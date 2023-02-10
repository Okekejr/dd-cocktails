import React from "react";
import { Bbva } from "../_icons/bbva";
import { Campari } from "../_icons/campari";
import { CasaBonay } from "../_icons/casaBonay";
import { Ilegal } from "../_icons/ilegal";
import { Mancino } from "../_icons/mancino";
import { MES } from "../_icons/mes";
import { Michters } from "../_icons/michters";
import { Nikka } from "../_icons/nikka";
import { Scrappys } from "../_icons/scrappys";

export interface Partner {
  [key: string]: {
    name: string;
    url: string;
    icon: React.ReactElement;
  };
}

export interface List {
  name: string;
  url: string;
  icon: React.ReactElement;
}

export const PartnerData: Partner = {
  scrappys: {
    name: "Scrappys Bitters",
    url: "https://www.scrappysbitters.com/",
    icon: <Scrappys width="22rem" h="17rem" />,
  },

  nikka: {
    name: "Nikka Whiskey",
    url: "https://www.nikka.com/eng/",
    icon: <Nikka width="20rem" h="17rem" />,
  },

  michters: {
    name: "Michters",
    url: "https://michters.com/",
    icon: <Michters width="24rem" h="10rem" />,
  },

  mes: {
    name: "MEZCAL EL SILENCIO",
    url: "https://www.casasilencio.com/",
    icon: <MES width="24rem" h="10rem" color='#000'/>,
  },

  mancion: {
    name: "Mancino Vermouth",
    url: "https://mancinovermouth.com/",
    icon: <Mancino width="24rem" h="10rem" />,
  },

  ilegal: {
    name: "Ilegal Mezcal",
    url: "https://www.ilegalmezcal.com/",
    icon: <Ilegal width="20rem" h="10rem" />,
  },

  casaBonay: {
    name: "Casa Bonay",
    url: "https://casabonay.com/",
    icon: <CasaBonay width="24rem" h="10rem" />,
  },

  campari: {
    name: "Campari",
    url: "https://www.campari.com/",
    icon: <Campari width="24rem" h="10rem" />,
  },

  bbva: {
    name: "BBVA",
    url: "https://www.bbva.mx/",
    icon: <Bbva width="18rem" h="10rem" />,
  },
};
