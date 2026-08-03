import { clubs } from "../data/clubs";

export const getClub = (id: number) =>
    clubs.find(club => club.id === id);

export const getClubName = (id: number) =>
    getClub(id)?.name ?? "Club inconnu";

export const getClubLogo = (id: number) =>
    getClub(id)?.logo;

export const getClubStadium = (id: number) =>
    getClub(id)?.stadium ?? "";

export const getClubBySlug = (slug: string) =>
    clubs.find(club => club.slug === slug);

export const getClubIdBySlug = (slug: string) =>
    getClubBySlug(slug)?.id;