import type {Metadata} from "next";
import BookingPageContent from "../../BookingPageContent";

export const metadata: Metadata = {
  title: "დაჯავშნა — Guesthouse Luka, უშგული",
  description: "აირჩიეთ თარიღები და დაუკავშირდით Guesthouse Luka-ს WhatsApp-ის, Booking.com-ის ან Airbnb-ის საშუალებით.",
};

export default function BookingPageGeorgian() {
  return <BookingPageContent lang="ka" />;
}
