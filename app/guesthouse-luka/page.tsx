import type {Metadata} from "next";
import GuesthouseHome from "./GuesthouseHome";

export const metadata: Metadata = {
  title: "Guesthouse Luka — Stay in Ushguli",
  description: "A warm family guesthouse in historic Chazhashi, Ushguli — surrounded by Svan towers and the Caucasus mountains.",
};

export default function GuesthouseLuka() {
  return <GuesthouseHome lang="en" />;
}
