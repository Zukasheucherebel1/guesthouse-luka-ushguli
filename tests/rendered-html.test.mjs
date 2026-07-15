import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const {default: worker} = await import(workerUrl.href);

async function render(path) {
  return worker.fetch(
    new Request(`http://localhost${path}`, {headers: {accept: "text/html"}}),
    {ASSETS: {fetch: async () => new Response("Not found", {status: 404})}},
    {waitUntil() {}, passThroughOnException() {}},
  );
}

const routes = [
  "/guesthouse-luka",
  "/guesthouse-luka/book",
  "/guesthouse-luka/rooms/double-room",
  "/guesthouse-luka/rooms/budget-triple-room",
  "/guesthouse-luka/ka",
  "/guesthouse-luka/ka/book",
  "/guesthouse-luka/ka/rooms/double-room",
  "/guesthouse-luka/ka/rooms/budget-triple-room",
];

for (const route of routes) {
  test(`server-renders ${route}`, async () => {
    const response = await render(route);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, /Guesthouse Luka/i);
    assert.match(html, /guesthouse-luka\/og\.png/i);
  });
}

test("booking page exposes every verified booking channel", async () => {
  const response = await render("/guesthouse-luka/book");
  const html = await response.text();
  assert.match(html, /wa\.me\/995555368020/i);
  assert.match(html, /booking\.com\/hotel\/ge\/guesthouse-luka-ushguli/i);
  assert.match(html, /airbnb\.com\/rooms\/1089191074728130751/i);
  assert.equal((html.match(/type="date"/g) ?? []).length, 2);
});

test("Georgian version is fully server-rendered and links to its booking flow", async () => {
  const response = await render("/guesthouse-luka/ka");
  const html = await response.text();
  assert.match(html, /lang="ka"/i);
  assert.match(html, /დარჩით სვანურ/);
  assert.match(html, /href="\/guesthouse-luka\/ka\/book"/i);
  assert.match(html, /href="\/guesthouse-luka"[^>]*lang="en"/i);
});

test("Georgian booking page exposes every verified booking channel", async () => {
  const response = await render("/guesthouse-luka/ka/book");
  const html = await response.text();
  assert.match(html, /wa\.me\/995555368020/i);
  assert.match(html, /booking\.com\/hotel\/ge\/guesthouse-luka-ushguli/i);
  assert.match(html, /airbnb\.com\/rooms\/1089191074728130751/i);
  assert.match(html, /დაგეგმეთ ვიზიტი/);
});
