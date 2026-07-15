"use client";

import {useMemo, useState} from "react";
import {airbnbUrl, bookingUrl, type Lang, phoneDisplay, roomsByLang, type RoomKey, whatsappNumber} from "./data";

type Props = {
  initialRoom?: RoomKey | "any";
  compact?: boolean;
  lang?: Lang;
};

const copy = {
  en: {
    room: "Room", any: "Best available", checkIn: "Check-in", checkOut: "Check-out", guests: "Guests",
    guest: "guest", guestsPlural: "guests", invalid: "Check-out must be later than check-in.",
    message: "Message the owner", messageSub: "Fastest answer · pre-filled request",
    booking: "Continue on Booking.com", bookingSub: "Live prices · booking protection",
    airbnb: "Continue on Airbnb", airbnbSub: "Guest Favourite · 4.71/5",
    call: "Prefer to call?", note: "Final availability is confirmed by the host or booking platform.",
    noDates: "dates not selected",
  },
  ka: {
    room: "ოთახი", any: "საუკეთესო ხელმისაწვდომი", checkIn: "შესვლა", checkOut: "გასვლა", guests: "სტუმრები",
    guest: "სტუმარი", guestsPlural: "სტუმარი", invalid: "გასვლის თარიღი შესვლის თარიღზე გვიან უნდა იყოს.",
    message: "მიწერეთ მასპინძელს", messageSub: "სწრაფი პასუხი · გამზადებული ტექსტი",
    booking: "გადადით Booking.com-ზე", bookingSub: "აქტუალური ფასები · დაცული ჯავშანი",
    airbnb: "გადადით Airbnb-ზე", airbnbSub: "სტუმრების რჩეული · 4.71/5",
    call: "გირჩევნიათ დარეკვა?", note: "საბოლოო ხელმისაწვდომობას ადასტურებს მასპინძელი ან პლატფორმა.",
    noDates: "თარიღები არ არის არჩეული",
  },
};

function formatDate(value: string, lang: Lang) {
  if (!value) return copy[lang].noDates;
  return new Intl.DateTimeFormat(lang === "ka" ? "ka-GE" : "en-GB", {day: "numeric", month: "short", year: "numeric"}).format(new Date(`${value}T12:00:00`));
}

export default function BookingWidget({initialRoom = "any", compact = false, lang = "en"}: Props) {
  const t = copy[lang];
  const [room, setRoom] = useState<RoomKey | "any">(initialRoom);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(initialRoom === "triple" ? 3 : 2);
  const roomName = room === "any" ? t.any : roomsByLang[lang][room].name;
  const maxGuests = room === "double" ? 2 : 3;
  const datesInvalid = Boolean(checkIn && checkOut && checkOut <= checkIn);

  function changeRoom(nextRoom: RoomKey | "any") {
    setRoom(nextRoom);
    const nextMaximum = nextRoom === "double" ? 2 : 3;
    setGuests((current) => Math.min(current, nextMaximum));
  }

  const links = useMemo(() => {
    const bookingParams = new URLSearchParams({group_adults: String(guests), no_rooms: "1", selected_currency: "GEL"});
    if (checkIn) bookingParams.set("checkin", checkIn);
    if (checkOut) bookingParams.set("checkout", checkOut);
    const airbnbParams = new URLSearchParams({adults: String(guests)});
    if (checkIn) airbnbParams.set("check_in", checkIn);
    if (checkOut) airbnbParams.set("check_out", checkOut);

    const message = lang === "ka"
      ? [`გამარჯობა, Guesthouse Luka!`, `მაინტერესებს: ${roomName}.`, `თარიღები: ${formatDate(checkIn, lang)} — ${formatDate(checkOut, lang)}.`, `სტუმრები: ${guests}.`, "თავისუფალია? რა იქნება სრული ფასი?"].join("\n")
      : ["Hello Guesthouse Luka!", `I would like to ask about the ${roomName}.`, `Stay: ${formatDate(checkIn, lang)} — ${formatDate(checkOut, lang)}.`, `Guests: ${guests}.`, "Is it available, and what is the total price?"].join("\n");

    return {
      booking: `${bookingUrl}?${bookingParams.toString()}`,
      airbnb: `${airbnbUrl}?${airbnbParams.toString()}`,
      whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    };
  }, [checkIn, checkOut, guests, lang, roomName]);

  return (
    <div className={`lukaBookingWidget${compact ? " isCompact" : ""}`}>
      <div className="lukaBookingFields">
        <label><span>{t.room}</span><select value={room} onChange={(event) => changeRoom(event.target.value as RoomKey | "any")}><option value="any">{t.any}</option><option value="double">{roomsByLang[lang].double.name}</option><option value="triple">{roomsByLang[lang].triple.name}</option></select></label>
        <label><span>{t.checkIn}</span><input type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} aria-label={t.checkIn} /></label>
        <label><span>{t.checkOut}</span><input type="date" value={checkOut} min={checkIn || undefined} onChange={(event) => setCheckOut(event.target.value)} aria-label={t.checkOut} /></label>
        <label><span>{t.guests}</span><select value={guests} onChange={(event) => setGuests(Number(event.target.value))}>{Array.from({length: maxGuests}, (_, index) => index + 1).map((count) => <option key={count} value={count}>{count} {count === 1 ? t.guest : t.guestsPlural}</option>)}</select></label>
      </div>

      {datesInvalid && <p className="lukaBookingError" role="alert">{t.invalid}</p>}

      <div className="lukaBookingChannels" aria-label={lang === "ka" ? "აირჩიეთ დაჯავშნის არხი" : "Choose a booking channel"}>
        <a className={datesInvalid ? "isDisabled" : ""} href={datesInvalid ? undefined : links.whatsapp} target="_blank" rel="noreferrer"><span className="lukaChannelMark wa">WA</span><div><b>{t.message}</b><small>{t.messageSub}</small></div><i>↗</i></a>
        <a className={datesInvalid ? "isDisabled" : ""} href={datesInvalid ? undefined : links.booking} target="_blank" rel="noreferrer"><span className="lukaChannelMark booking">B.</span><div><b>{t.booking}</b><small>{t.bookingSub}</small></div><i>↗</i></a>
        <a className={datesInvalid ? "isDisabled" : ""} href={datesInvalid ? undefined : links.airbnb} target="_blank" rel="noreferrer"><span className="lukaChannelMark airbnb">A</span><div><b>{t.airbnb}</b><small>{t.airbnbSub}</small></div><i>↗</i></a>
      </div>

      {!compact && <div className="lukaBookingHelp"><span>{t.call}</span><a href={`tel:+${whatsappNumber}`}>{phoneDisplay}</a><small>{t.note}</small></div>}
    </div>
  );
}
