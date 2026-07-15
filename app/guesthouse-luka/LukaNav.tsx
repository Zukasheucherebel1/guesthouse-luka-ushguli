import {type Lang, phoneDisplay, whatsappNumber} from "./data";

export default function LukaNav({solid = false, lang = "en"}: {solid?: boolean; lang?: Lang}) {
  const isKa = lang === "ka";
  const base = isKa ? "/guesthouse-luka/ka" : "/guesthouse-luka";

  return (
    <nav className={`lukaNav${solid ? " lukaNavSolid" : ""}`} aria-label={isKa ? "მთავარი ნავიგაცია" : "Main navigation"}>
      <a className="lukaBrand" href={base} aria-label={isKa ? "Guesthouse Luka-ს მთავარი გვერდი" : "Guesthouse Luka home"}>
        <span>GL</span>
        <b>Guesthouse Luka</b>
      </a>
      <div className="lukaNavLinks">
        <a href={`${base}#about`}>{isKa ? "ჩვენ შესახებ" : "About"}</a>
        <a href={`${base}#rooms`}>{isKa ? "ოთახები" : "Rooms"}</a>
        <a href={`${base}#location`}>{isKa ? "მდებარეობა" : "Location"}</a>
        <a href={`tel:+${whatsappNumber}`}>{phoneDisplay}</a>
      </div>
      <div className="lukaNavActions">
        <a className="lukaLang" href={isKa ? "/guesthouse-luka" : "/guesthouse-luka/ka"} lang={isKa ? "en" : "ka"}>
          {isKa ? "EN" : "ქარ"}
        </a>
        <a className="lukaBook lukaBookLight" href={`${base}/book`}>
          {isKa ? "დაჯავშნა" : "Book"} <span>→</span>
        </a>
      </div>
    </nav>
  );
}
