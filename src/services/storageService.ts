import { matches as defaultMatches } from "../data/matches";
import type { Match } from "../types";

const STORAGE_KEY = "lgnc4_matches";

export function loadMatches(): Match[] {

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return defaultMatches;
    }

    return JSON.parse(data);

}

export function saveMatches(matches: Match[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(matches));
}