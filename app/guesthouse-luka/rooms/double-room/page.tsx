import type {Metadata} from "next";
import RoomDetail from "../../RoomDetail";
import {rooms} from "../../data";

export const metadata: Metadata = {
  title: "Double Room — Guesthouse Luka, Ushguli",
  description: "A warm 15 m² twin room for two guests in historic Chazhashi, Ushguli.",
};

export default function DoubleRoomPage() {
  return <RoomDetail room={rooms.double} lang="en" />;
}
