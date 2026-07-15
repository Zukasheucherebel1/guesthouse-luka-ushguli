import type {Metadata} from "next";
import "./luka.css";

export const metadata: Metadata = {
  openGraph: {
    title: "Guesthouse Luka — Ushguli, Georgia",
    description: "Warm rooms, local food and ancient Svan towers at your doorstep.",
    images: ["https://zura-khorguani-portfolio.m-khorguani.chatgpt.site/guesthouse-luka/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guesthouse Luka — Ushguli, Georgia",
    description: "Warm rooms, local food and ancient Svan towers at your doorstep.",
    images: ["https://zura-khorguani-portfolio.m-khorguani.chatgpt.site/guesthouse-luka/og.png"],
  },
};

export default function GuesthouseLayout({children}: {children: React.ReactNode}) {
  return children;
}
