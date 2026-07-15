export const bookingUrl = "https://www.booking.com/hotel/ge/guesthouse-luka-ushguli.en-gb.html";
export const airbnbUrl = "https://www.airbnb.com/rooms/1089191074728130751";
export const whatsappNumber = "995555368020";
export const phoneDisplay = "+995 555 368 020";

export type Lang = "en" | "ka";
export type RoomKey = "double" | "triple";

export type Room = {
  key: RoomKey;
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  size: string;
  guests: number;
  beds: string;
  bathroom: string;
  hero: string;
  gallery: string[];
  description: string;
  longDescription: string;
  bestFor: string;
  amenities: string[];
};

const media: Record<RoomKey, Pick<Room, "key" | "slug" | "size" | "guests" | "hero" | "gallery">> = {
  double: {
    key: "double",
    slug: "double-room",
    size: "15 m²",
    guests: 2,
    hero: "/guesthouse-luka/double-room-main.jpg",
    gallery: [
      "/guesthouse-luka/double-room-main.jpg",
      "/guesthouse-luka/double-room-alt.jpg",
      "/guesthouse-luka/double-room-hall.jpg",
      "/guesthouse-luka/bathroom-alt.jpg",
    ],
  },
  triple: {
    key: "triple",
    slug: "budget-triple-room",
    size: "18 m²",
    guests: 3,
    hero: "/guesthouse-luka/room-triple.jpg",
    gallery: [
      "/guesthouse-luka/room-triple.jpg",
      "/guesthouse-luka/triple-room-alt.jpg",
      "/guesthouse-luka/bathroom.jpg",
      "/guesthouse-luka/property-courtyard.jpg",
    ],
  },
};

export const roomsByLang: Record<Lang, Record<RoomKey, Room>> = {
  en: {
    double: {
      ...media.double,
      name: "Double Room",
      shortName: "Double",
      eyebrow: "A QUIET ROOM FOR TWO",
      beds: "2 single beds",
      bathroom: "Shared bathroom",
      description: "A peaceful twin room for couples, friends or solo travellers who value warmth and a restful night.",
      longDescription: "A calm place to recharge after hiking and exploring Ushguli. Two separate beds, reliable heating and thick blankets make the room comfortable even on cold mountain nights. The shared bathroom is close by and includes a hot shower, hairdryer and toiletries.",
      bestFor: "Couples, two friends or solo travellers looking for a warm, good-value base in Chazhashi.",
      amenities: ["Mountain or village view", "Heating and extra blankets", "Free Wi-Fi", "Wardrobe", "Hairdryer", "Hot shower", "Free toiletries", "Shared kitchen access"],
    },
    triple: {
      ...media.triple,
      name: "Budget Triple Room",
      shortName: "Triple",
      eyebrow: "MORE SPACE FOR THE JOURNEY",
      beds: "3 single beds",
      bathroom: "Shared bathroom",
      description: "A warm wooden room with three separate beds — practical and comfortable for friends or a small family.",
      longDescription: "The guesthouse's roomiest listed option. Three individual beds make it easy for a group to share the experience without sharing a bed. Timber walls, heating and extra blankets create a cosy base for mountain adventures, while shared facilities are only a few steps away.",
      bestFor: "Three friends, trekkers travelling together or a small family seeking the best value per guest.",
      amenities: ["Mountain or courtyard view", "Heating and extra blankets", "Free Wi-Fi", "Wardrobe", "Hairdryer", "Hot shower", "Free toiletries", "Shared kitchen access"],
    },
  },
  ka: {
    double: {
      ...media.double,
      name: "ორადგილიანი ოთახი",
      shortName: "ორადგილიანი",
      eyebrow: "მშვიდი ოთახი ორი სტუმრისთვის",
      beds: "2 ერთადგილიანი საწოლი",
      bathroom: "საერთო სააბაზანო",
      description: "მყუდრო და მშვიდი ოთახი წყვილისთვის, მეგობრებისთვის ან მარტო მოგზაურისთვის.",
      longDescription: "კომფორტული სივრცე უშგულის დათვალიერებისა და მთაში გატარებული დღის შემდეგ დასასვენებლად. ორი ცალკე საწოლი, გათბობა და თბილი საბნები ცივ ღამეებშიც სიმყუდროვეს ქმნის. საერთო სააბაზანო ახლოსაა და აღჭურვილია ცხელი შხაპით, ფენითა და ჰიგიენური ნივთებით.",
      bestFor: "წყვილისთვის, ორი მეგობრისთვის ან მარტო მოგზაურისთვის, ვისაც თბილი და ხელმისაწვდომი ოთახი სურს.",
      amenities: ["მთის ან სოფლის ხედი", "გათბობა და დამატებითი საბნები", "უფასო Wi-Fi", "ტანსაცმლის კარადა", "ფენი", "ცხელი შხაპი", "ჰიგიენური ნივთები", "საერთო სამზარეულო"],
    },
    triple: {
      ...media.triple,
      name: "ეკონომ სამადგილიანი ოთახი",
      shortName: "სამადგილიანი",
      eyebrow: "მეტი სივრცე თქვენი მოგზაურობისთვის",
      beds: "3 ერთადგილიანი საწოლი",
      bathroom: "საერთო სააბაზანო",
      description: "თბილი ხის ოთახი სამი ცალკე საწოლით — პრაქტიკული არჩევანი მეგობრებისა და მცირე ოჯახისთვის.",
      longDescription: "სასტუმროს ყველაზე ფართო ნომერი სამი ინდივიდუალური საწოლით. ხის კედლები, გათბობა და დამატებითი საბნები მთაში გატარებული დღის შემდეგ მყუდრო გარემოს ქმნის. საერთო სააბაზანო ოთახიდან რამდენიმე ნაბიჯშია.",
      bestFor: "სამი მეგობრისთვის, ერთად მოგზაური მოლაშქრეებისთვის ან მცირე ოჯახისთვის.",
      amenities: ["მთის ან ეზოს ხედი", "გათბობა და დამატებითი საბნები", "უფასო Wi-Fi", "ტანსაცმლის კარადა", "ფენი", "ცხელი შხაპი", "ჰიგიენური ნივთები", "საერთო სამზარეულო"],
    },
  },
};

export const rooms = roomsByLang.en;
export const roomList = [rooms.double, rooms.triple];

export function roomListFor(lang: Lang) {
  return [roomsByLang[lang].double, roomsByLang[lang].triple];
}
