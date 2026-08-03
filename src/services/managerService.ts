import type { Standing } from "../types/sportdb";
import { getPlayerByClubSlug } from "../utils/playerUtils";

export interface ManagerStanding {
    rank: number;
    pseudo: string;
    club: string;
    clubSlug: string;
    points: number;
    wins: number;
    draws: number;
    matches: number;
    goalDiff: number;
}

export function buildManagerRanking(
    standings: Standing[]
): ManagerStanding[] {
    return standings
        .flatMap((team) => {
            const player = getPlayerByClubSlug(team.teamSlug);

            if (!player) return [];

            return [{
                rank: Number(team.rank),
                pseudo: player.pseudo,
                club: team.teamName,
                clubSlug: team.teamSlug,
                points: Number(team.points),
                wins: Number(team.wins),
                draws: Number(team.draws),
                matches: Number(team.matches),
                goalDiff: Number(team.goalDiff),
            }];
        })
        .sort((a, b) => a.rank - b.rank);
}