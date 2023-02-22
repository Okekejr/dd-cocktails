export interface MenuD {
  [key: string]: {
    name: string;
    description: string;
    image: string;
  };
}

export interface CardM {
  name: string;
  description: string;
  image: string;
}

export const MenuData: MenuD = {
  negroni: {
    name: "Negroni",
    description:
      "We love Negronis at Okeke&Robles, and our bartenders make Gin, Campari, and vermouth come together in a perfect, punchy package.",
    image: "/assets/img/cocktails/negroni.png",
  },
  oldfashioned: {
    name: "Old Fashioned",
    description:
      "This simple classic made with rye or bourbon, a sugar cube, Angostura bitters, a thick cube of ice, and an orange twist delivers every time.",
    image: "/assets/img/cocktails/oldfashioned.png",
  },
  drymartini: {
    name: "Dry Martini",
    description:
      "A well-made dry Martini is elegance in a glass. The classic mix of gin and dry vermouth, Garnish with a lemon twist or a few olives to make it more personal",
    image: "/assets/img/cocktails/drymartini.png",
  },
  margarita: {
    name: "Margarita",
    description:
      "Definitely doesnt need any introduction, ladies and gentlemen our very own - The Margarita, in its tart, tangy simplicity, tequila",
    image: "/assets/img/cocktails/margarita.png",
  },
  diaquiri: {
    name: "Diaquiri",
    description:
      "A true Daiquiri is simply made with white rum, lime juice, and simple syrup. It is a clean and refreshing drink for any occasion.",
    image: "/assets/img/cocktails/diaquiri.png",
  },
};
