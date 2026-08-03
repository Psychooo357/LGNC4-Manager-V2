import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import type { Match } from "../types";
import type { Standing } from "../types/sportdb";

import {
    getLigue3Fixtures,
    getLigue3Results,
    getLigue3Standings,
} from "../services/sportDbApi";

import {
    loadMatches,
    saveMatches,
} from "../services/storageService";

interface LeagueContextType {
    matches: Match[];

    standings: Standing[];
    fixtures: any[];
    results: any[];

    loading: boolean;

    updateMatch: (
        id: number,
        homeGoals: number,
        awayGoals: number
    ) => void;
}

const LeagueContext = createContext<LeagueContextType | null>(null);

export function LeagueProvider({
    children,
}: {
    children: ReactNode;
}) {
    // Ancien système (à supprimer plus tard)
    const [matches, setMatches] = useState<Match[]>(loadMatches());

    // SportDB
    const [standings, setStandings] = useState<Standing[]>([]);
    const [fixtures, setFixtures] = useState<any[]>([]);
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        saveMatches(matches);
    }, [matches]);

    useEffect(() => {
        async function loadData() {
            try {
                const [
                    standingsData,
                    resultsData,
                    fixturesData,
                ] = await Promise.all([
                    getLigue3Standings(),
                    getLigue3Results(),
                    getLigue3Fixtures(),
                ]);

                setStandings(standingsData);
                setResults(resultsData);
                setFixtures(fixturesData);
                console.log(fixturesData[0]);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    function updateMatch(
        id: number,
        homeGoals: number,
        awayGoals: number
    ) {
        setMatches((previous) =>
            previous.map((match) =>
                match.id === id
                    ? {
                        ...match,
                        homeGoals,
                        awayGoals,
                        played: true,
                    }
                    : match
            )
        );
    }

    return (
        <LeagueContext.Provider
            value={{
                matches,
                standings,
                fixtures,
                results,
                loading,
                updateMatch,
            }}
        >
            {children}
        </LeagueContext.Provider>
    );
}

export function useLeague() {
    const context = useContext(LeagueContext);

    if (!context) {
        throw new Error(
            "useLeague doit être utilisé dans LeagueProvider"
        );
    }

    return context;
}