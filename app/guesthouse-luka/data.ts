export const bookingUrl = "https://www.booking.com/hotel/ge/guesthouse-luka-ushguli.en-gb.html";
export const airbnbUrl = "https://www.airbnb.com/rooms/1089191074728130751";
export const whatsappNumber = "995555368020";
export const phoneDisplay = "+995 555 368 020";

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

export const rooms: Record<RoomKey, Room> = {
  double: {
    key: "double",
    slug: "double-room",
    name: "Double Room",
    shortName: "Double",
    eyebrow: "A QUIET ROOM FOR TWO",
    size: "15 m²",
    guests: 2,
    beds: "2 single beds",
    bathroom: "Shared bathroom",
    hero: "/guesthouse-luka/double-room-main.jpg",
    gallery: [
      "/guesthouse-luka/double-room-main.jpg",
      "/guesthouse-luka/double-room-alt.jpg",
      "/guesthouse-luka/double-room-hall.jpg",
      "/guesthouse-luka/bathroom-alt.jpg",
    ],
    description: "A simple, peaceful twin room for couples, friends or solo travellers who value warmth and a restful night.",
    longDescription: "The Double Room gives two guests a calm place to recharge after hiking and exploring Ushguli. Two separate beds, reliable heating and thick blankets make it comfortable even on cold mountain nights. The shared bathroom is close by and includes a hot shower, hairdryer and toiletries.",
    bestFor: "Couples, two friends or solo travellers looking for a warm, good-value base in historic Chazhashi.",
    amenities: ["Mountain or village view", "Heating and extra blankets", "Free Wi-Fi", "Wardrobe", "Hairdryer", "Hot shower", "Free toiletries", "Shared kitchen access"],
  },
  triple: {
    key: "triple",
    slug: "budget-triple-room",
    name: "Budget Triple Room",
    shortName: "Triple",
    eyebrow: "MORE SPACE FOR THE JOURNEY",
    size: "18 m²",
    guests: 3,
    beds: "3 single beds",
    bathroom: "Shared bathroom",
    hero: "/guesthouse-luka/room-triple.jpg",
    gallery: [
      "/guesthouse-luka/room-triple.jpg",
      "/guesthouse-luka/triple-room-alt.jpg",
      "/guesthouse-luka/bathroom.jpg",
      "/guesthouse-luka/property-courtyard.jpg",
    ],
    description: "A warm wooden room with three separate beds — practical, comfortable and ideal for friends or a small family.",
    longDescription: "The Budget Triple Room is the guesthouse's roomiest listed option. Three individual beds make it easy for a group to share the experience without sharing a bed. Warm timber walls, heating and extra blankets create a cosy base for mountain adventures, while the shared facilities are only a few steps away.",
    bestFor: "Three friends, trekkers travelling together or a small family seeking the best value per guest.",
    amenities: ["Mountain or courtyard view", "Heating and extra blankets", "Free Wi-Fi", "Wardrobe", "Hairdryer", "Hot shower", "Free toiletries", "Shared kitchen access"],
  },
};

export const roomList = [rooms.double, rooms.triple];
