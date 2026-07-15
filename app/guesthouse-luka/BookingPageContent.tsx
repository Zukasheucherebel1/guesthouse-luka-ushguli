import BookingWidget from "./BookingWidget";
import LukaNav from "./LukaNav";
import {type Lang, phoneDisplay, whatsappNumber} from "./data";

const copy = {
  en: {
    kicker: "ONE REQUEST · THREE WAYS TO BOOK", title: <>Plan your stay<br />in <em>Ushguli.</em></>,
    intro: "Choose a room, dates and guest count. Then contact the owner directly or continue on your preferred booking platform.",
    formKicker: "YOUR STAY DETAILS", formTitle: "Start with the dates.",
    formBody: "No payment is taken here. WhatsApp opens a prepared message; Booking.com and Airbnb complete the reservation on their platforms.",
    step1Title: "Select your stay", step1Body: "Choose the room, arrival, departure and number of guests.",
    step2Title: "Choose a channel", step2Body: "Message the owner, or compare live terms on Booking.com and Airbnb.",
    step3Title: "Receive confirmation", step3Body: "The host or platform confirms availability, price and booking terms.",
    contactKicker: "DIRECT CONTACT", contactTitle: "Need a quick answer?", contactBody: "Contact the property directly by WhatsApp or phone.",
    whatsapp: "WhatsApp the owner", call: "Call", footer: "This website does not process payments. Availability, prices and final confirmation are provided by the host or booking platform.",
  },
  ka: {
    kicker: "ერთი მოთხოვნა · დაჯავშნის სამი გზა", title: <>დაგეგმეთ ვიზიტი<br /><em>უშგულში.</em></>,
    intro: "აირჩიეთ ოთახი, თარიღები და სტუმრების რაოდენობა. შემდეგ დაუკავშირდით მასპინძელს ან განაგრძეთ დაჯავშნა სასურველ პლატფორმაზე.",
    formKicker: "თქვენი ვიზიტის დეტალები", formTitle: "დაიწყეთ თარიღებით.",
    formBody: "ამ საიტზე გადახდა არ ხდება. WhatsApp გახსნის გამზადებულ შეტყობინებას, Booking.com და Airbnb კი ჯავშანს საკუთარ პლატფორმაზე დაასრულებს.",
    step1Title: "აირჩიეთ ვიზიტი", step1Body: "მიუთითეთ ოთახი, შესვლისა და გასვლის თარიღები და სტუმრების რაოდენობა.",
    step2Title: "აირჩიეთ არხი", step2Body: "მიწერეთ მასპინძელს ან შეადარეთ პირობები Booking.com-სა და Airbnb-ზე.",
    step3Title: "მიიღეთ დასტური", step3Body: "ხელმისაწვდომობას, ფასსა და პირობებს დაადასტურებს მასპინძელი ან პლატფორმა.",
    contactKicker: "პირდაპირი კონტაქტი", contactTitle: "გსურთ სწრაფი პასუხი?", contactBody: "დაუკავშირდით სასტუმროს პირდაპირ WhatsApp-ით ან ტელეფონით.",
    whatsapp: "მისწერეთ მასპინძელს", call: "დარეკეთ", footer: "საიტი გადახდებს არ ამუშავებს. ხელმისაწვდომობას, ფასებსა და საბოლოო ჯავშანს ადასტურებს მასპინძელი ან დაჯავშნის პლატფორმა.",
  },
};

export default function BookingPageContent({lang}: {lang: Lang}) {
  const t = copy[lang];
  const isKa = lang === "ka";

  return (
    <main className="luka lukaBookPage" lang={lang}>
      <LukaNav solid lang={lang} />
      <header className="lukaBookHero">
        <div><p className="lukaKicker">{t.kicker}</p><h1>{t.title}</h1><p>{t.intro}</p><div className="lukaBookTrust"><span><b>8.7</b> Booking.com</span><span><b>4.71</b> Airbnb</span><span><b>9.4</b> {isKa ? "მდებარეობა" : "Location"}</span></div></div>
        <img src="/guesthouse-luka/property-front.jpg" alt={isKa ? "Guesthouse Luka სვანურ კოშკებთან" : "Guesthouse Luka beside historic Svan towers"} />
      </header>

      <section className="lukaBookFormSection">
        <div className="lukaBookFormIntro"><p className="lukaKicker">{t.formKicker}</p><h2>{t.formTitle}</h2><p>{t.formBody}</p></div>
        <BookingWidget lang={lang} />
      </section>

      <section className="lukaBookingSteps">
        <article><span>01</span><h2>{t.step1Title}</h2><p>{t.step1Body}</p></article>
        <article><span>02</span><h2>{t.step2Title}</h2><p>{t.step2Body}</p></article>
        <article><span>03</span><h2>{t.step3Title}</h2><p>{t.step3Body}</p></article>
      </section>

      <section className="lukaDirectContact">
        <div><p className="lukaKicker">{t.contactKicker}</p><h2>{t.contactTitle}</h2><p>{t.contactBody}</p></div>
        <div><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">{t.whatsapp} <span>↗</span></a><a href={`tel:+${whatsappNumber}`}>{t.call} {phoneDisplay} <span>→</span></a></div>
      </section>

      <footer className="lukaFooter"><div><b>Guesthouse Luka</b><span>{isKa ? "ჩაჟაში · უშგული · საქართველო" : "Chazhashi · Ushguli · Georgia"}</span></div><p>{t.footer}</p></footer>
    </main>
  );
}
