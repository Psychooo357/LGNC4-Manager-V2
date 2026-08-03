import { saveMatches } from "./storageService";
import type { Match } from "../types";

export function saveAllMatches(matches: Match[]) {
    saveMatches(matches);
}