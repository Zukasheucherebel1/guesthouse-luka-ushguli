import BookingWidget from "./BookingWidget";
import LukaNav from "./LukaNav";
import {bookingUrl, type Lang, roomListFor} from "./data";

const content = {
  en: {
    eyebrow: "CHAZHASHI · USHGULI · GEORGIA",
    title: <>Stay close to<br /><em>the Svan towers.</em></>,
    heroCopy: "A warm family guesthouse in historic Upper Svaneti, with mountain views, local food and a genuine village welcome.",
    roomsCta: "Explore rooms",
    score: "Fabulous on Booking.com", locationScore: "Location", reviews: "verified reviews", wifi: "Free Wi-Fi",
    bookingKicker: "PLAN YOUR STAY", bookingTitle: "Check dates, then book your way.",
    aboutKicker: "A FAMILY-RUN STAY", aboutTitle: <>Simple comfort.<br /><em>Remarkable place.</em></>,
    aboutLead: "Guesthouse Luka sits in Chazhashi — the historic centre of Ushguli and part of UNESCO-listed Upper Svaneti.",
    aboutBody: "Wake beside medieval stone towers. Return from the mountains to a warm room, a hot shower and generous Svan hospitality.",
    roomsKicker: "TWO ROOM TYPES", roomsTitle: "A warm place to rest.", roomsBody: "Uncomplicated rooms with heating, mountain views and the essentials for a comfortable stay.",
    upTo: "Up to", guests: "guests", viewRoom: "View room",
    stayKicker: "YOUR STAY", stayTitle: <>Mountain days.<br /><em>Warm evenings.</em></>,
    stayBody: "Breakfast and dinner can be prepared at the guesthouse. There is also a quiet garden, shared kitchen, free parking and Wi-Fi.",
    amenity1: "Home-cooked food", amenity2: "Garden & terrace", amenity3: "Heating & hot shower", amenity4: "Parking & Wi-Fi",
    locationKicker: "LOCATION · 9.4", locationTitle: <>Historic Chazhashi,<br /><em>right outside.</em></>,
    address: "Chazhashi village, Ushguli 3214, Georgia", mapCta: "View verified location",
    ctaKicker: "READY FOR USHGULI?", ctaTitle: "Choose your dates and booking channel.", ctaButton: "Check availability",
    photoCredit: "Property imagery from the Guesthouse Luka listings. Hero landscape:", demo: "Demo by Zura Khorguani.",
    mobileBook: "Check availability",
  },
  ka: {
    eyebrow: "ჩაჟაში · უშგული · საქართველო",
    title: <>დარჩით სვანურ<br /><em>კოშკებთან ახლოს.</em></>,
    heroCopy: "თბილი საოჯახო სასტუმრო ისტორიულ ზემო სვანეთში — მთის ხედებით, ადგილობრივი კერძებითა და გულწრფელი მასპინძლობით.",
    roomsCta: "ოთახების ნახვა",
    score: "შესანიშნავი შეფასება Booking.com-ზე", locationScore: "მდებარეობა", reviews: "დადასტურებული შეფასება", wifi: "უფასო Wi-Fi",
    bookingKicker: "დაგეგმეთ თქვენი ვიზიტი", bookingTitle: "აირჩიეთ თარიღები და დაჯავშნის გზა.",
    aboutKicker: "საოჯახო სასტუმრო", aboutTitle: <>მარტივი კომფორტი.<br /><em>გამორჩეული ადგილი.</em></>,
    aboutLead: "Guesthouse Luka მდებარეობს ჩაჟაშში — უშგულის ისტორიულ ცენტრში, რომელიც იუნესკოს დაცული ზემო სვანეთის ნაწილია.",
    aboutBody: "გაიღვიძეთ შუასაუკუნეების კოშკებთან. მთაში გატარებული დღის შემდეგ დაბრუნდით თბილ ოთახში, ცხელი შხაპისა და სვანური სტუმართმოყვარეობის გარემოში.",
    roomsKicker: "ორი ტიპის ოთახი", roomsTitle: "თბილი ადგილი დასასვენებლად.", roomsBody: "მყუდრო ოთახები გათბობით, მთის ხედებითა და ყველაფრით, რაც კომფორტული დასვენებისთვის გჭირდებათ.",
    upTo: "მაქს.", guests: "სტუმარი", viewRoom: "ოთახის ნახვა",
    stayKicker: "თქვენი დასვენება", stayTitle: <>დღე მთაში.<br /><em>თბილი საღამო.</em></>,
    stayBody: "სასტუმროში შესაძლებელია საუზმისა და ვახშმის მომზადება. სტუმრებისთვის ხელმისაწვდომია მშვიდი ბაღი, საერთო სამზარეულო, უფასო პარკინგი და Wi-Fi.",
    amenity1: "სახლში მომზადებული კერძები", amenity2: "ბაღი და ტერასა", amenity3: "გათბობა და ცხელი შხაპი", amenity4: "პარკინგი და Wi-Fi",
    locationKicker: "მდებარეობა · 9.4", locationTitle: <>ისტორიული ჩაჟაში<br /><em>თქვენს კართან.</em></>,
    address: "სოფელი ჩაჟაში, უშგული 3214, საქართველო", mapCta: "მდებარეობის ნახვა",
    ctaKicker: "მზად ხართ უშგულისთვის?", ctaTitle: "აირჩიეთ თარიღები და დაჯავშნის გზა.", ctaButton: "თავისუფალი ნომრების ნახვა",
    photoCredit: "სასტუმროს ფოტოები აღებულია Guesthouse Luka-ს განცხადებებიდან. მთავარი პეიზაჟი:", demo: "დემო შექმნა ზურა ხორგუანმა.",
    mobileBook: "თავისუფალი ნომრები",
  },
};

export default function GuesthouseHome({lang}: {lang: Lang}) {
  const t = content[lang];
  const isKa = lang === "ka";
  const base = isKa ? "/guesthouse-luka/ka" : "/guesthouse-luka";
  const rooms = roomListFor(lang);

  return (
    <main className="luka" lang={lang}>
      <LukaNav lang={lang} />

      <header className="lukaHero" id="home">
        <img src="/guesthouse-luka/hero-svaneti.jpg" alt={isKa ? "კავკასიონის მთები უშგულის თავზე" : "The Caucasus mountains above Ushguli"} />
        <div className="lukaHeroShade" />
        <div className="lukaHeroCopy">
          <p className="lukaEyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="lukaHeroText">{t.heroCopy}</p>
          <a className="lukaPrimary" href={`${base}#rooms`}>{t.roomsCta} <span>↓</span></a>
        </div>
      </header>

      <section className="lukaTrust" aria-label={isKa ? "სტუმრების შეფასებები" : "Guest scores"}>
        <div className="lukaTrustLead"><b>8.7</b><span>{t.score}</span></div>
        <div><b>9.4</b><span>{t.locationScore}</span></div>
        <div><b>102</b><span>{t.reviews}</span></div>
        <div><b>10</b><span>{t.wifi}</span></div>
      </section>

      <section className="lukaQuickBooking" aria-label={isKa ? "სწრაფი დაჯავშნა" : "Quick booking"}>
        <div><p className="lukaKicker">{t.bookingKicker}</p><h2>{t.bookingTitle}</h2></div>
        <BookingWidget compact lang={lang} />
      </section>

      <section className="lukaAbout" id="about">
        <div className="lukaAboutImage"><img src="/guesthouse-luka/property-garden.jpg" alt={isKa ? "Guesthouse Luka-ს ეზო" : "Guesthouse Luka garden and exterior"} /></div>
        <div className="lukaAboutCopy">
          <p className="lukaKicker">{t.aboutKicker}</p>
          <h2>{t.aboutTitle}</h2>
          <p className="lukaLead">{t.aboutLead}</p>
          <p>{t.aboutBody}</p>
        </div>
      </section>

      <section className="lukaRooms" id="rooms">
        <div className="lukaSectionHead"><div><p className="lukaKicker">{t.roomsKicker}</p><h2>{t.roomsTitle}</h2></div><p>{t.roomsBody}</p></div>
        <div className="lukaRoomCards">
          {rooms.map((room) => (
            <article key={room.key}>
              <a className="lukaRoomCardImage" href={`${base}/rooms/${room.slug}`}><img src={room.hero} alt={`${room.name} — Guesthouse Luka`} /></a>
              <div className="lukaRoomCardCopy"><p>{room.size} · {t.upTo} {room.guests} {t.guests}</p><h3>{room.name}</h3><p>{room.description}</p><a href={`${base}/rooms/${room.slug}`}>{t.viewRoom} <span>→</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="lukaExperience" id="experience">
        <div className="lukaExperienceCopy">
          <p className="lukaKicker">{t.stayKicker}</p><h2>{t.stayTitle}</h2><p>{t.stayBody}</p>
          <ul><li>{t.amenity1}</li><li>{t.amenity2}</li><li>{t.amenity3}</li><li>{t.amenity4}</li></ul>
        </div>
        <img src="/guesthouse-luka/svan-feast.jpg" alt={isKa ? "სტუმრები სვანურ სუფრასთან" : "Guests sharing a meal at Guesthouse Luka"} />
      </section>

      <section className="lukaLocation" id="location">
        <img src="/guesthouse-luka/property-front.jpg" alt={isKa ? "Guesthouse Luka სვანურ კოშკთან" : "Guesthouse Luka beside a Svan tower"} />
        <div className="lukaLocationCopy"><p className="lukaKicker">{t.locationKicker}</p><h2>{t.locationTitle}</h2><p>{t.address}</p><a href={bookingUrl} target="_blank" rel="noreferrer">{t.mapCta} <span>↗</span></a></div>
      </section>

      <section className="lukaCta">
        <img src="/guesthouse-luka/ushguli-night.jpg" alt={isKa ? "უშგულის კოშკები ღამით" : "Ushguli towers at night"} />
        <div className="lukaCtaShade" />
        <div><p>{t.ctaKicker}</p><h2>{t.ctaTitle}</h2><a className="lukaPrimary" href={`${base}/book`}>{t.ctaButton} <span>→</span></a></div>
      </section>

      <footer className="lukaFooter">
        <div><b>Guesthouse Luka</b><span>{isKa ? "ჩაჟაში · უშგული · საქართველო" : "Chazhashi · Ushguli · Georgia"}</span></div>
        <p>{t.photoCredit} <a href="https://commons.wikimedia.org/wiki/File:Svaneti_-_Ushguli_(9458072993).jpg" target="_blank" rel="noreferrer">Andrzej Wójtowicz, CC BY-SA 2.0</a>. {t.demo}</p>
      </footer>

      <a className="lukaMobileBook" href={`${base}/book`}>{t.mobileBook} <span>→</span></a>
    </main>
  );
}
