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

export interface CardP {
  [key: number]: {
    name: string;
    description: string;
    image: string;
  };
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
  cheeseBurger: {
    name: "Cheese Burger",
    description:
      "Cheeseburger is a natural evolution of the beloved hamburger, the only difference between the two being that the cheeseburger has a slice of cheese added on top of the meat patty",
    image: "/assets/img/meals/cheeseBurger.png",
  },
  drymartini: {
    name: "Dry Martini",
    description:
      "A well-made dry Martini is elegance in a glass. The classic mix of gin and dry vermouth, Garnish with a lemon twist or a few olives to make it more personal",
    image: "/assets/img/cocktails/drymartini.png",
  },
  onionBurger: {
    name: "Onion Burger",
    description:
      "Oklahoma onion burger is prepared by smashing thin slices of onions into a beef patty. The meat and onions cook together until the onions become caramelized and crispy and the meat is fully cooked. The burger usually also contains a slice of American cheese, pickles, and mustard or mayonnaise (or both), all tucked inside soft and fluffy burger buns.",
    image: "/assets/img/meals/onionburger.png",
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
  aperolSpritz: {
    name: "Aperol Spritz",
    description:
      " This popular aperitif is as visually pleasing as it is tasty and easy to make: a three-two-one ratio of Prosecco, Aperol, and soda.",
    image: "/assets/img/cocktails/aperol.png",
  },
  eggSandwich: {
    name: "Egg Sandwich",
    description:
      "Egg sandwiches are rich in protein, giving your body plenty of energy for the day ahead.",
    image: "/assets/img/meals/eggsaladsandwich.png",
  },
  chickenSandwich: {
    name: "Chicken Sandwich",
    description:
      "Sandwiches are commonly eaten for breakfast – they’re pretty popular. The chicken sandwich is especially well loved, thanks to the fact that it has been deep fried and comes with a bunch of cheese to make it melt in your mouth.",
    image: "/assets/img/meals/chickenSandwich.png",
  },
  espressoMartini: {
    name: "Espresso Martini",
    description:
      "Like a refined Red Bull and vodka for coffee lovers, the Espresso Martini promises a pick-me-up, calm-me-down effect in a tasty package. The after-dinner drink will wake you up while still keeping your buzz going. It’s also been called a Vodka Espresso and Pharmaceutical Stimulant.",
    image: "/assets/img/cocktails/espressoMartini.png",
  },
  manhattan: {
    name: "Manhattan",
    description:
      "It’s hard to stray from the Manhattan, and the ascent of rye whiskey makes it even more difficult. Spicy rye, sweet vermouth, and two dashes of Angostura, stirred, strained, and garnished with a brandied cherry can make you feel like a true class act.",
    image: "/assets/img/cocktails/manhattan.png",
  },
};
