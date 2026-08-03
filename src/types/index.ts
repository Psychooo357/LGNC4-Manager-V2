export interface Player {
    id: number;
    pseudo: string;
    clubId: number;
}

export interface Club {
    id: number;
    name: string;
    slug: string;
    logo: string;
    managed: boolean;
    stadium: string;
}

export interface Match {
    id: number;

    matchday: number;

    date: string;

    homeClubId: number;
    awayClubId: number;

    homeGoals: number | null;
    awayGoals: number | null;

    played: boolean;
}

export interface Standing {
    playerId: number;
    pseudo: string;
    clubId: number;

    played: number;
    wins: number;
    draws: number;
    losses: number;

    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;

    points: number;
}