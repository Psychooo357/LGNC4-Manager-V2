import { useLeague } from "../context/LeagueContext";

export function useLeagueData() {
    const { standings, loading } = useLeague();

    return {
        standings,
        leader: standings[0] ?? null,
        top3: standings.slice(0, 3),
        loading,
    };
}