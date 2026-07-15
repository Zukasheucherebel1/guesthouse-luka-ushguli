import BookingWidget from "./BookingWidget";
import LukaNav from "./LukaNav";
import {type Lang, type Room, roomsByLang} from "./data";

const copy = {
  en: {
    rooms: "Rooms", availability: "Check availability", size: "Room size", sleeps: "Sleeps", upTo: "Up to", beds: "Beds", bathroom: "Bathroom",
    roomKicker: "YOUR ROOM IN USHGULI", roomTitle: <>A warm base for<br /><em>mountain days.</em></>, bestFor: "BEST FOR",
    amenitiesKicker: "ROOM & SHARED AMENITIES", amenitiesTitle: <>Simple comforts,<br /><em>thoughtfully covered.</em></>,
    bookKicker: "BOOK YOUR STAY", bookTitle: <>Choose your dates.<br /><em>Choose how to book.</em></>,
    bookBody: "Send your request directly to the owner on WhatsApp, or continue through Booking.com or Airbnb.",
    other: "EXPLORE THE OTHER OPTION", footer: "Room details and imagery are based on the Guesthouse Luka listings. Final availability and room allocation are confirmed by the host or booking platform.", mobileBook: "Book this room",
  },
  ka: {
    rooms: "ოთახები", availability: "თავისუფალი ნომრის ნახვა", size: "ოთახის ზომა", sleeps: "ტევადობა", upTo: "მაქს.", beds: "საწოლები", bathroom: "სააბაზანო",
    roomKicker: "თქვენი ოთახი უშგულში", roomTitle: <>თბილი სივრცე<br /><em>მთაში გატარებული დღის შემდეგ.</em></>, bestFor: "ვისთვისაა საუკეთესო",
    amenitiesKicker: "ოთახისა და საერთო სივრცის პირობები", amenitiesTitle: <>მარტივი კომფორტი,<br /><em>ყველაფერი საჭირო.</em></>,
    bookKicker: "დაჯავშნეთ ვიზიტი", bookTitle: <>აირჩიეთ თარიღები.<br /><em>შემდეგ — დაჯავშნის გზა.</em></>,
    bookBody: "გაუგზავნეთ მოთხოვნა მასპინძელს WhatsApp-ზე ან განაგრძეთ Booking.com-სა თუ Airbnb-ზე.",
    other: "ნახეთ მეორე ვარიანტი", footer: "ოთახის ინფორმაცია და ფოტოები ეყრდნობა Guesthouse Luka-ს განცხადებებს. საბოლოო ხელმისაწვდომობასა და ოთახის გამოყოფას ადასტურებს მასპინძელი ან პლატფორმა.", mobileBook: "ოთახის დაჯავშნა",
  },
};

export default function RoomDetail({room, lang = "en"}: {room: Room; lang?: Lang}) {
  const t = copy[lang];
  const isKa = lang === "ka";
  const base = isKa ? "/guesthouse-luka/ka" : "/guesthouse-luka";
  const other = room.key === "double" ? roomsByLang[lang].triple : roomsByLang[lang].double;

  return (
    <main className="luka lukaRoomPage" lang={lang}>
      <LukaNav solid lang={lang} />

      <header className="lukaRoomHero">
        <div className="lukaRoomHeroImage"><img src={room.hero} alt={`${room.name} — Guesthouse Luka`} /></div>
        <div className="lukaRoomHeroCopy">
          <div className="lukaBreadcrumbs"><a href={base}>Guesthouse Luka</a><span>/</span><a href={`${base}#rooms`}>{t.rooms}</a><span>/</span><b>{room.name}</b></div>
          <p className="lukaKicker">{room.eyebrow}</p><h1>{room.name}</h1><p>{room.description}</p>
          <a className="lukaPrimary" href="#book-this-room">{t.availability} <span>↓</span></a>
        </div>
      </header>

      <section className="lukaRoomFacts" aria-label={isKa ? "ოთახის დეტალები" : "Room facts"}>
        <div><span>{t.size}</span><b>{room.size}</b></div><div><span>{t.sleeps}</span><b>{t.upTo} {room.guests}</b></div><div><span>{t.beds}</span><b>{room.beds}</b></div><div><span>{t.bathroom}</span><b>{room.bathroom}</b></div>
      </section>

      <section className="lukaRoomStory">
        <div><p className="lukaKicker">{t.roomKicker}</p><h2>{t.roomTitle}</h2></div>
        <div className="lukaRoomStoryCopy"><p>{room.longDescription}</p><div><span>{t.bestFor}</span><b>{room.bestFor}</b></div></div>
      </section>

      <section className="lukaRoomGallery" aria-label={`${room.name} gallery`}>
        {room.gallery.map((image, index) => <figure key={image} className={index === 0 ? "isLarge" : ""}><img src={image} alt={`${room.name} — ${index + 1}`} /><figcaption>{String(index + 1).padStart(2, "0")}</figcaption></figure>)}
      </section>

      <section className="lukaRoomAmenities">
        <div><p className="lukaKicker">{t.amenitiesKicker}</p><h2>{t.amenitiesTitle}</h2></div>
        <ul>{room.amenities.map((amenity, index) => <li key={amenity}><span>{String(index + 1).padStart(2, "0")}</span>{amenity}</li>)}</ul>
      </section>

      <section className="lukaRoomBooking" id="book-this-room">
        <div className="lukaRoomBookingHead"><p className="lukaKicker">{t.bookKicker}</p><h2>{t.bookTitle}</h2><p>{t.bookBody}</p></div>
        <BookingWidget initialRoom={room.key} lang={lang} />
      </section>

      <section className="lukaNextRoom"><span>{t.other}</span><a href={`${base}/rooms/${other.slug}`}>{other.name} <i>→</i></a></section>
      <footer className="lukaFooter"><div><b>Guesthouse Luka</b><span>{isKa ? "ჩაჟაში · უშგული · საქართველო" : "Chazhashi · Ushguli · Georgia"}</span></div><p>{t.footer}</p></footer>
      <a className="lukaMobileBook" href="#book-this-room">{t.mobileBook} <span>↓</span></a>
    </main>
  );
}
