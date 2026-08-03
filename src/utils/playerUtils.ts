import { players } from "../data/players";
import { getClubBySlug } from "./clubUtils";

export function getPlayerByClubSlug(slug: string) {
    const club = getClubBySlug(slug);

    if (!club) return undefined;

    return players.find(player => player.clubId === club.id);
}