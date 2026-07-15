import type {Metadata} from "next";
import BookingWidget from "../BookingWidget";
import LukaNav from "../LukaNav";
import {phoneDisplay, whatsappNumber} from "../data";

export const metadata: Metadata = {
  title: "Book Your Stay — Guesthouse Luka, Ushguli",
  description: "Choose dates and contact Guesthouse Luka through WhatsApp, Booking.com or Airbnb.",
};

export default function BookingPage() {
  return (
    <main className="luka lukaBookPage">
      <LukaNav solid />
      <header className="lukaBookHero">
        <div>
          <p className="lukaKicker">ONE REQUEST · THREE WAYS TO BOOK</p>
          <h1>Plan your stay<br />in <em>Ushguli.</em></h1>
          <p>Select a room, dates and guest count. Then message the owner directly or continue on your preferred booking platform.</p>
          <div className="lukaBookTrust"><span><b>8.7</b> Booking.com</span><span><b>4.71</b> Airbnb</span><span><b>5.0</b> Communication</span></div>
        </div>
        <img src="/guesthouse-luka/property-front.jpg" alt="Guesthouse Luka exterior beside historic Svan towers" />
      </header>

      <section className="lukaBookFormSection">
        <div className="lukaBookFormIntro">
          <p className="lukaKicker">YOUR STAY DETAILS</p>
          <h2>Start with the dates.</h2>
          <p>No payment is taken on this website. WhatsApp opens a pre-filled message to the property; Booking.com and Airbnb complete the reservation securely on their platforms.</p>
        </div>
        <BookingWidget />
      </section>

      <section className="lukaBookingSteps">
        <article><span>01</span><h2>Select your stay</h2><p>Choose the room, arrival, departure and number of guests.</p></article>
        <article><span>02</span><h2>Choose a channel</h2><p>Message the owner, or compare live terms on Booking.com and Airbnb.</p></article>
        <article><span>03</span><h2>Receive confirmation</h2><p>The host or platform confirms availability, price and reservation terms.</p></article>
      </section>

      <section className="lukaDirectContact">
        <div><p className="lukaKicker">DIRECT CONTACT</p><h2>Need a quick answer?</h2><p>The primary property number is listed by the Georgian National Tourism Administration and accommodation platforms.</p></div>
        <div><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp the owner <span>↗</span></a><a href={`tel:+${whatsappNumber}`}>Call {phoneDisplay} <span>→</span></a></div>
      </section>

      <footer className="lukaFooter">
        <div><b>Guesthouse Luka</b><span>Chazhashi · Ushguli · Georgia</span></div>
        <p>This website does not process payments. Availability, prices, policies and final confirmation are provided by the host, Booking.com or Airbnb.</p>
      </footer>
    </main>
  );
}
