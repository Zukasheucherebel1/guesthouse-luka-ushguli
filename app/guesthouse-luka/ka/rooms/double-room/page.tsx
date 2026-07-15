import type {Metadata} from "next";
import RoomDetail from "../../../RoomDetail";
import {roomsByLang} from "../../../data";

export const metadata: Metadata = {
  title: "ორადგილიანი ოთახი — Guesthouse Luka, უშგული",
  description: "თბილი 15 მ² ოთახი ორი სტუმრისთვის ისტორიულ ჩაჟაშში, უშგულში.",
};

export default function DoubleRoomPageGeorgian() {
  return <RoomDetail room={roomsByLang.ka.double} lang="ka" />;
}
