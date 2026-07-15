"use client";

import {useMemo, useState} from "react";
import {airbnbUrl, bookingUrl, phoneDisplay, rooms, type RoomKey, whatsappNumber} from "./data";

type Props = {
  initialRoom?: RoomKey | "any";
  compact?: boolean;
};

function formatDate(value: string) {
  if (!value) return "dates not selected";
  return new Intl.DateTimeFormat("en", {day: "numeric", month: "short", year: "numeric"}).format(new Date(`${value}T12:00:00`));
}

export default function BookingWidget({initialRoom = "any", compact = false}: Props) {
  const [room, setRoom] = useState<RoomKey | "any">(initialRoom);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(initialRoom === "triple" ? 3 : 2);

  const roomName = room === "any" ? "best available room" : rooms[room].name;
  const maxGuests = room === "double" ? 2 : room === "triple" ? 3 : 6;
  const datesInvalid = Boolean(checkIn && checkOut && checkOut <= checkIn);

  function changeRoom(nextRoom: RoomKey | "any") {
    setRoom(nextRoom);
    const nextMaximum = nextRoom === "double" ? 2 : nextRoom === "triple" ? 3 : 6;
    setGuests((current) => Math.min(current, nextMaximum));
  }

  const links = useMemo(() => {
    const bookingParams = new URLSearchParams({group_adults: String(guests), no_rooms: "1", selected_currency: "GEL"});
    if (checkIn) bookingParams.set("checkin", checkIn);
    if (checkOut) bookingParams.set("checkout", checkOut);

    const airbnbParams = new URLSearchParams({adults: String(guests)});
    if (checkIn) airbnbParams.set("check_in", checkIn);
    if (checkOut) airbnbParams.set("check_out", checkOut);

    const message = [
      "Hello Guesthouse Luka!",
      `I would like to ask about the ${roomName}.`,
      `Stay: ${formatDate(checkIn)} — ${formatDate(checkOut)}.`,
      `Guests: ${guests}.`,
      "Is it available, and what is the total price?",
    ].join("\n");

    return {
      booking: `${bookingUrl}?${bookingParams.toString()}`,
      airbnb: `${airbnbUrl}?${airbnbParams.toString()}`,
      whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    };
  }, [checkIn, checkOut, guests, roomName]);

  return (
    <div className={`lukaBookingWidget${compact ? " isCompact" : ""}`}>
      <div className="lukaBookingFields">
        <label>
          <span>ROOM</span>
          <select value={room} onChange={(event) => changeRoom(event.target.value as RoomKey | "any")}>
            <option value="any">Best available</option>
            <option value="double">Double Room</option>
            <option value="triple">Budget Triple Room</option>
          </select>
        </label>
        <label>
          <span>CHECK-IN</span>
          <input type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} aria-label="Check-in date" />
        </label>
        <label>
          <span>CHECK-OUT</span>
          <input type="date" value={checkOut} min={checkIn || undefined} onChange={(event) => setCheckOut(event.target.value)} aria-label="Check-out date" />
        </label>
        <label>
          <span>GUESTS</span>
          <select value={guests} onChange={(event) => setGuests(Number(event.target.value))}>
            {Array.from({length: maxGuests}, (_, index) => index + 1).map((count) => <option key={count} value={count}>{count} {count === 1 ? "guest" : "guests"}</option>)}
          </select>
        </label>
      </div>

      {datesInvalid && <p className="lukaBookingError" role="alert">Check-out must be later than check-in.</p>}

      <div className="lukaBookingChannels" aria-label="Choose a booking channel">
        <a className={datesInvalid ? "isDisabled" : ""} href={datesInvalid ? undefined : links.whatsapp} target="_blank" rel="noreferrer">
          <span className="lukaChannelMark wa">WA</span>
          <div><b>Message the owner</b><small>Fastest answer · pre-filled request</small></div>
          <i>↗</i>
        </a>
        <a className={datesInvalid ? "isDisabled" : ""} href={datesInvalid ? undefined : links.booking} target="_blank" rel="noreferrer">
          <span className="lukaChannelMark booking">B.</span>
          <div><b>Continue on Booking.com</b><small>Live prices · booking protection</small></div>
          <i>↗</i>
        </a>
        <a className={datesInvalid ? "isDisabled" : ""} href={datesInvalid ? undefined : links.airbnb} target="_blank" rel="noreferrer">
          <span className="lukaChannelMark airbnb">A</span>
          <div><b>Continue on Airbnb</b><small>Guest Favourite · 4.71/5</small></div>
          <i>↗</i>
        </a>
      </div>

      <div className="lukaBookingHelp">
        <span>Prefer to call?</span>
        <a href={`tel:+${whatsappNumber}`}>{phoneDisplay}</a>
        <small>Cash payment at the property · final availability is confirmed by the booking channel or host.</small>
      </div>
    </div>
  );
}
