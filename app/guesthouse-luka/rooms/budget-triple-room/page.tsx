import type {Metadata} from "next";
import RoomDetail from "../../RoomDetail";
import {rooms} from "../../data";

export const metadata: Metadata = {
  title: "Budget Triple Room — Guesthouse Luka, Ushguli",
  description: "A warm 18 m² room with three single beds in historic Chazhashi, Ushguli.",
};

export default function BudgetTripleRoomPage() {
  return <RoomDetail room={rooms.triple} />;
}
