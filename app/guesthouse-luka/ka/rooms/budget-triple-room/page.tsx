import type {Metadata} from "next";
import RoomDetail from "../../../RoomDetail";
import {roomsByLang} from "../../../data";

export const metadata: Metadata = {
  title: "ეკონომ სამადგილიანი ოთახი — Guesthouse Luka, უშგული",
  description: "თბილი 18 მ² ოთახი სამი ცალკე საწოლით ისტორიულ ჩაჟაშში, უშგულში.",
};

export default function TripleRoomPageGeorgian() {
  return <RoomDetail room={roomsByLang.ka.triple} lang="ka" />;
}
