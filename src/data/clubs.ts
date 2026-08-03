import type { Club } from "../types";

import aubagne from "../assets/clubs/aubagne.png";
import thionville from "../assets/clubs/thionville.png";
import concarneau from "../assets/clubs/concarneau.png";
import orleans from "../assets/clubs/orleans.png";
import bourg from "../assets/clubs/bourg.png";
import villefranche from "../assets/clubs/villefranche.png";
import rouen from "../assets/clubs/rouen.png";
import cannes from "../assets/clubs/cannes.png";
import paris13 from "../assets/clubs/paris13.png";
import qrm from "../assets/clubs/qrm.png";
import laroche from "../assets/clubs/laroche.png";
import versailles from "../assets/clubs/versailles.png";
import fleury from "../assets/clubs/fleury.png";
import amiens from "../assets/clubs/amiens.png";
import caen from "../assets/clubs/caen.png";
import valenciennes from "../assets/clubs/valenciennes.png";
import bastia from "../assets/clubs/bastia.png";
import lepuy from "../assets/clubs/lepuy.png";
export const clubs: Club[] = [
    {
        id: 1,
        name: "SC Aubagne Air Bel",
        slug: "aubagne",
        logo: aubagne,
        managed: false,
        stadium: "Stade de Lattre-de-Tassigny",
    },
    {
        id: 2,
        name: "US Thionville Lusitanos",
        slug: "thionville",
        logo: thionville,
        managed: true,
        stadium: "Stade de Guentrange",
    },
    {
        id: 3,
        name: "US Concarneau",
        slug: "concarneau",
        logo: concarneau,
        managed: true,
        stadium: "Stade Guy-Piriou",
    },
    {
        id: 4,
        name: "US Orléans",
        slug: "orleans",
        logo: orleans,
        managed: true,
        stadium: "Stade de la Source",
    },
    {
        id: 5,
        name: "Football Bourg-en-Bresse",
        slug: "bourg-peronnas", // ✅
        logo: bourg,
        managed: true,
        stadium: "Stade Marcel-Verchère",
    },
    {
        id: 6,
        name: "FC Villefranche Beaujolais",
        slug: "villefranche",
        logo: villefranche,
        managed: false,
        stadium: "Stade Armand-Chouffet",
    },
    {
        id: 7,
        name: "FC Rouen 1899",
        slug: "rouen",
        logo: rouen,
        managed: false,
        stadium: "Stade Robert-Diochon",
    },
    {
        id: 8,
        name: "AS Cannes",
        slug: "cannes",
        logo: cannes,
        managed: true,
        stadium: "Stade Pierre-de-Coubertin",
    },
    {
        id: 9,
        name: "Paris 13 Atletico",
        slug: "paris-13-atletico", // ✅
        logo: paris13,
        managed: false,
        stadium: "Stade Pelé",
    },
    {
        id: 10,
        name: "QRM",
        slug: "quevilly", // ✅
        logo: qrm,
        managed: false,
        stadium: "Stade Robert-Diochon",
    },
    {
        id: 11,
        name: "Vendée FC La Roche/Yon",
        slug: "la-roche-vendee", // ✅
        logo: laroche,
        managed: false,
        stadium: "Stade Henri-Desgrange",
    },
    {
        id: 12,
        name: "FC Versailles",
        slug: "versailles",
        logo: versailles,
        managed: false,
        stadium: "Stade Jean-Bouin",
    },
    {
        id: 13,
        name: "FC Fleury 91",
        slug: "fleury-merogis", // ✅
        logo: fleury,
        managed: true,
        stadium: "Stade Walter-Felder",
    },
    {
        id: 14,
        name: "Amiens SC",
        slug: "amiens-sc", // ✅
        logo: amiens,
        managed: false,
        stadium: "Stade Crédit Agricole La Licorne",
    },
    {
        id: 15,
        name: "SM Caen",
        slug: "caen",
        logo: caen,
        managed: true,
        stadium: "Stade Michel-d'Ornano",
    },
    {
        id: 16,
        name: "Valenciennes FC",
        slug: "valenciennes",
        logo: valenciennes,
        managed: true,
        stadium: "Stade du Hainaut",
    },
    {
        id: 17,
        name: "SC Bastia",
        slug: "bastia",
        logo: bastia,
        managed: false,
        stadium: "Stade Armand-Cesari",
    },
    {
        id: 18,
        name: "Le Puy-en-Velay FC",
        slug: "le-puy-en-velay", // ✅
        logo: lepuy,
        managed: false,
        stadium: "Stade Charles-Massot",
    },
];