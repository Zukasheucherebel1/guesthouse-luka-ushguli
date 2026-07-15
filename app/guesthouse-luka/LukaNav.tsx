import {phoneDisplay, whatsappNumber} from "./data";

export default function LukaNav({solid = false}: {solid?: boolean}) {
  return (
    <nav className={`lukaNav${solid ? " lukaNavSolid" : ""}`} aria-label="Main navigation">
      <a className="lukaBrand" href="/guesthouse-luka" aria-label="Guesthouse Luka home">
        <span>GL</span>
        <b>Guesthouse Luka</b>
      </a>
      <div className="lukaNavLinks">
        <a href="/guesthouse-luka#story">Our story</a>
        <a href="/guesthouse-luka#stay">Rooms</a>
        <a href="/guesthouse-luka#experience">Experience</a>
        <a href="/guesthouse-luka#location">Location</a>
        <a href={`tel:+${whatsappNumber}`}>{phoneDisplay}</a>
      </div>
      <a className="lukaBook lukaBookLight" href="/guesthouse-luka/book">
        Book your stay <span>→</span>
      </a>
    </nav>
  );
}
