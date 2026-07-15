import type {Metadata} from "next";
import BookingPageContent from "../BookingPageContent";

export const metadata: Metadata = {
  title: "Book Your Stay — Guesthouse Luka, Ushguli",
  description: "Choose dates and contact Guesthouse Luka through WhatsApp, Booking.com or Airbnb.",
};

export default function BookingPage() {
  return <BookingPageContent lang="en" />;
}
