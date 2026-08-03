import type { Match } from "../types";

let currentId = 1;

export function createMatch(
    matchday: number,
    homeClubId: number,
    awayClubId: number
): Match {
    return {
        id: currentId++,

        matchday,

        date: "",

        homeClubId,
        awayClubId,

        homeGoals: null,
        awayGoals: null,

        played: false,
    };
}