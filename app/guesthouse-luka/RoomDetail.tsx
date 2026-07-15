import BookingWidget from "./BookingWidget";
import LukaNav from "./LukaNav";
import {type Room} from "./data";

export default function RoomDetail({room}: {room: Room}) {
  const otherRoom = room.key === "double"
    ? {name: "Budget Triple Room", href: "/guesthouse-luka/rooms/budget-triple-room"}
    : {name: "Double Room", href: "/guesthouse-luka/rooms/double-room"};

  return (
    <main className="luka lukaRoomPage">
      <LukaNav solid />

      <header className="lukaRoomHero">
        <div className="lukaRoomHeroImage"><img src={room.hero} alt={`${room.name} at Guesthouse Luka`} /></div>
        <div className="lukaRoomHeroCopy">
          <div className="lukaBreadcrumbs"><a href="/guesthouse-luka">Guesthouse Luka</a><span>/</span><a href="/guesthouse-luka#stay">Rooms</a><span>/</span><b>{room.name}</b></div>
          <p className="lukaKicker">{room.eyebrow}</p>
          <h1>{room.name}</h1>
          <p>{room.description}</p>
          <a className="lukaPrimary" href="#book-this-room">Check availability <span>↓</span></a>
        </div>
      </header>

      <section className="lukaRoomFacts" aria-label="Room facts">
        <div><span>ROOM SIZE</span><b>{room.size}</b></div>
        <div><span>SLEEPS</span><b>Up to {room.guests}</b></div>
        <div><span>BEDS</span><b>{room.beds}</b></div>
        <div><span>BATHROOM</span><b>{room.bathroom}</b></div>
      </section>

      <section className="lukaRoomStory">
        <div>
          <p className="lukaKicker">YOUR ROOM IN USHGULI</p>
          <h2>A warm base for<br /><em>mountain days.</em></h2>
        </div>
        <div className="lukaRoomStoryCopy">
          <p>{room.longDescription}</p>
          <div><span>BEST FOR</span><b>{room.bestFor}</b></div>
        </div>
      </section>

      <section className="lukaRoomGallery" aria-label={`${room.name} photo gallery`}>
        {room.gallery.map((image, index) => (
          <figure key={image} className={index === 0 ? "isLarge" : ""}>
            <img src={image} alt={`${room.name} — view ${index + 1}`} />
            <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
          </figure>
        ))}
      </section>

      <section className="lukaRoomAmenities">
        <div>
          <p className="lukaKicker">ROOM & SHARED AMENITIES</p>
          <h2>Simple comforts,<br /><em>thoughtfully covered.</em></h2>
        </div>
        <ul>{room.amenities.map((amenity, index) => <li key={amenity}><span>{String(index + 1).padStart(2, "0")}</span>{amenity}</li>)}</ul>
      </section>

      <section className="lukaRoomBooking" id="book-this-room">
        <div className="lukaRoomBookingHead">
          <p className="lukaKicker">BOOK YOUR STAY</p>
          <h2>Choose your dates.<br /><em>Choose how to book.</em></h2>
          <p>Send the same stay request directly to the owner on WhatsApp, or continue through Booking.com or Airbnb.</p>
        </div>
        <BookingWidget initialRoom={room.key} />
      </section>

      <section className="lukaNextRoom">
        <span>EXPLORE THE OTHER OPTION</span>
        <a href={otherRoom.href}>{otherRoom.name} <i>→</i></a>
      </section>

      <footer className="lukaFooter">
        <div><b>Guesthouse Luka</b><span>Chazhashi · Ushguli · Georgia</span></div>
        <p>Room details and property imagery are based on the Guesthouse Luka Booking.com and Airbnb listings. Final availability and room allocation are confirmed by the host or booking platform.</p>
      </footer>
      <a className="lukaMobileBook" href="#book-this-room">Book this room <span>↓</span></a>
    </main>
  );
}
