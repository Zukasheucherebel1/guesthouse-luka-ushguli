import type {Metadata} from "next";
import "./luka.css";

const bookingUrl = "https://www.booking.com/hotel/ge/guesthouse-luka-ushguli.en-gb.html";

export const metadata: Metadata = {
  title: "Guesthouse Luka — Stay in Ushguli",
  description: "A warm family guesthouse in historic Chazhashi, Ushguli — surrounded by Svan towers and the Caucasus mountains.",
  openGraph: {
    title: "Guesthouse Luka — Ushguli, Georgia",
    description: "Warm rooms, local food and ancient Svan towers at your doorstep.",
    images: ["https://zura-khorguani-portfolio.m-khorguani.chatgpt.site/guesthouse-luka/hero-svaneti.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guesthouse Luka — Ushguli, Georgia",
    description: "Warm rooms, local food and ancient Svan towers at your doorstep.",
    images: ["https://zura-khorguani-portfolio.m-khorguani.chatgpt.site/guesthouse-luka/hero-svaneti.jpg"],
  },
};

const facts = [
  ["8.7", "Fabulous"],
  ["9.4", "Location"],
  ["10", "Free Wi-Fi"],
  ["102", "Reviews"],
];

const amenities = [
  ["01", "Breakfast & dinner", "Home-cooked local dishes and several breakfast choices."],
  ["02", "Garden & terrace", "Outdoor seating, picnic space and mountain air."],
  ["03", "Warm, simple rooms", "Heating, blankets, mountain views and complimentary toiletries."],
  ["04", "Easy essentials", "Free Wi-Fi, free parking, shared kitchen and laundry service."],
];

export default function GuesthouseLuka() {
  return (
    <main className="luka">
      <nav className="lukaNav" aria-label="Main navigation">
        <a className="lukaBrand" href="#home" aria-label="Guesthouse Luka home">
          <span>GL</span>
          <b>Guesthouse Luka</b>
        </a>
        <div className="lukaNavLinks">
          <a href="#story">Our story</a>
          <a href="#stay">Rooms</a>
          <a href="#experience">Experience</a>
          <a href="#location">Location</a>
        </div>
        <a className="lukaBook lukaBookLight" href={bookingUrl} target="_blank" rel="noreferrer">
          Check availability <span>↗</span>
        </a>
      </nav>

      <header className="lukaHero" id="home">
        <img src="/guesthouse-luka/hero-svaneti.jpg" alt="The Caucasus mountains above Ushguli in Upper Svaneti" />
        <div className="lukaHeroShade" />
        <div className="lukaHeroCopy">
          <p className="lukaEyebrow">CHAZHASHI · USHGULI · GEORGIA</p>
          <h1>Sleep beneath<br />the <em>Svan towers.</em></h1>
          <div className="lukaHeroBottom">
            <p>A warm family guesthouse in the UNESCO-listed heart of Upper Svaneti, with mountain views, local food and centuries of history outside the door.</p>
            <a className="lukaPrimary" href={bookingUrl} target="_blank" rel="noreferrer">See rooms & prices <span>↗</span></a>
          </div>
        </div>
        <div className="lukaHeroProperty">
          <img src="/guesthouse-luka/property-front.jpg" alt="Guesthouse Luka wooden exterior beside Svan towers" />
          <div><span>THIS IS YOUR STAY</span><b>In historic Chazhashi</b></div>
        </div>
        <div className="lukaScroll">SCROLL TO DISCOVER <i>↓</i></div>
      </header>

      <section className="lukaTrust" aria-label="Booking.com guest scores">
        <p>VERIFIED ON BOOKING.COM</p>
        {facts.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}
      </section>

      <section className="lukaStory" id="story">
        <div className="lukaStoryTitle">
          <p className="lukaKicker">A FAMILY-RUN STAY IN UPPER SVANETI</p>
          <h2>Old-world<br />wonder.<br /><em>Real warmth.</em></h2>
        </div>
        <div className="lukaStoryImage">
          <img src="/guesthouse-luka/property-garden.jpg" alt="Guesthouse Luka exterior and garden seating" />
          <span>THE GUESTHOUSE</span>
        </div>
        <div className="lukaStoryCopy">
          <p className="lukaLead">Guesthouse Luka sits in Chazhashi — the historic centre of Ushguli and part of UNESCO-listed Upper Svaneti.</p>
          <p>Wake to stone towers and mountain air. Return after a day of walking to a warm wooden room, a hot shower and generous Svan hospitality.</p>
          <a href="#stay">Discover your stay <span>↓</span></a>
        </div>
      </section>

      <section className="lukaGallery" aria-label="Authentic Guesthouse Luka photo gallery">
        <figure className="lukaGalleryMain"><img src="/guesthouse-luka/room-triple.jpg" alt="Warm wooden triple room at Guesthouse Luka" /><figcaption>WARM WOODEN ROOMS</figcaption></figure>
        <figure><img src="/guesthouse-luka/bathroom.jpg" alt="Guest bathroom with hot shower" /><figcaption>HOT SHOWER</figcaption></figure>
        <figure><img src="/guesthouse-luka/garden.jpg" alt="Guesthouse Luka stone-walled garden" /><figcaption>QUIET GARDEN</figcaption></figure>
        <figure className="lukaGalleryWide"><img src="/guesthouse-luka/ushguli-night.jpg" alt="Historic Svan towers of Ushguli illuminated at night" /><figcaption>USHGULI AFTER DARK</figcaption></figure>
      </section>

      <section className="lukaStay" id="stay">
        <div className="lukaStayIntro">
          <p className="lukaKicker">TWO SIMPLE ROOM TYPES</p>
          <h2>Rest well.<br /><em>Wake somewhere<br />unforgettable.</em></h2>
          <p>Warm, clean rooms with heating, mountain views and everything you need after a day in the Caucasus.</p>
        </div>
        <div className="lukaRoomList">
          <article>
            <span>01</span>
            <div><h3>Double Room</h3><p>15 m² · 2 single beds · Shared bathroom</p></div>
            <b>Up to 2 guests</b>
          </article>
          <article>
            <span>02</span>
            <div><h3>Budget Triple Room</h3><p>18 m² · 3 single beds · Shared bathroom</p></div>
            <b>Up to 3 guests</b>
          </article>
          <div className="lukaRoomNotes">
            <p>INCLUDED</p>
            <span>Heating</span><span>Free Wi-Fi</span><span>Mountain view</span><span>Hairdryer</span><span>Shower</span><span>Toiletries</span>
          </div>
          <a className="lukaPrimary lukaPrimaryDark" href={bookingUrl} target="_blank" rel="noreferrer">Check live availability <span>↗</span></a>
        </div>
      </section>

      <section className="lukaExperience" id="experience">
        <div className="lukaExperiencePhoto">
          <img src="/guesthouse-luka/svan-feast.jpg" alt="Guests sharing a generous meal at Guesthouse Luka" />
          <span>LOCAL FOOD · SHARED TABLES</span>
        </div>
        <div className="lukaExperienceCopy">
          <p className="lukaKicker">MORE THAN A ROOM</p>
          <h2>Come as a guest.<br /><em>Leave with a story.</em></h2>
          <p>Guests consistently remember the friendly family, satisfying dinners and the feeling of being welcomed into village life.</p>
          <div className="lukaAmenities">
            {amenities.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="lukaReview">
        <p className="lukaKicker">WHAT GUESTS VALUE MOST</p>
        <h2>Friendly hosts, warm rooms<br />and an <em>unbeatable location.</em></h2>
        <div className="lukaReviewGrid">
          <div><b>9.1</b><span>STAFF</span><i /></div>
          <div><b>9.0</b><span>COMFORT</span><i /></div>
          <div><b>9.2</b><span>VALUE</span><i /></div>
          <div><b>9.4</b><span>LOCATION</span><i /></div>
        </div>
        <p className="lukaReviewNote">Scores from verified Booking.com guest reviews.</p>
      </section>

      <section className="lukaSeasons">
        <div><img src="/guesthouse-luka/winter-ushguli.jpg" alt="Ski touring through snowy Ushguli" /></div>
        <div>
          <p className="lukaKicker">A DIFFERENT WORLD IN EVERY SEASON</p>
          <h2>Walk the green valleys.<br /><em>Meet the winter silence.</em></h2>
          <p>Hiking is available nearby, and every season changes the mood of Ushguli — from long summer evenings to deep Caucasus snow.</p>
        </div>
      </section>

      <section className="lukaLocation" id="location">
        <div className="lukaLocationCopy">
          <p className="lukaKicker">EXCELLENT LOCATION · 9.4</p>
          <h2>At the heart<br />of historic<br /><em>Chazhashi.</em></h2>
          <p>Chazhashi village, Ushguli 3214, Georgia</p>
          <ul><li>40 km — Museum of History and Ethnography</li><li>43 km — Mikhail Khergiani House Museum</li><li>167 km — Kutaisi International Airport</li></ul>
          <a href={bookingUrl} target="_blank" rel="noreferrer">View the verified location <span>↗</span></a>
        </div>
        <div className="lukaLocationVisual">
          <img src="/guesthouse-luka/property-front.jpg" alt="Guesthouse Luka beside a medieval Svan tower" />
          <div><span>42.9167° N</span><b>USHGULI</b><span>43.0167° E</span></div>
        </div>
      </section>

      <section className="lukaCta">
        <img src="/guesthouse-luka/hero-svaneti.jpg" alt="Upper Svaneti mountain landscape" />
        <div className="lukaCtaShade" />
        <div>
          <p>YOUR SVANETI STORY STARTS HERE</p>
          <h2>Come for the views.<br /><em>Stay for the welcome.</em></h2>
          <a className="lukaPrimary" href={bookingUrl} target="_blank" rel="noreferrer">Check rooms on Booking.com <span>↗</span></a>
        </div>
      </section>

      <footer className="lukaFooter">
        <div><b>Guesthouse Luka</b><span>Chazhashi · Ushguli · Georgia</span></div>
        <p>Property imagery from the Guesthouse Luka Booking.com listing. Hero landscape: <a href="https://commons.wikimedia.org/wiki/File:Svaneti_-_Ushguli_(9458072993).jpg" target="_blank" rel="noreferrer">Andrzej Wójtowicz, CC BY-SA 2.0</a>. Demo by Zura Khorguani.</p>
      </footer>

      <a className="lukaMobileBook" href={bookingUrl} target="_blank" rel="noreferrer">Check availability <span>↗</span></a>
    </main>
  );
}
