import { useParams } from "react-router-dom";
import { useState } from "react";

import { clubs } from "../data/clubs";
import { loadMatches, saveMatches } from "../services/storageService";

export default function MatchPage() {
    const { id } = useParams();

    const foundMatch = loadMatches().find(
        (m) => m.id === Number(id)
    );

    if (!foundMatch) {
        return <h2>Match introuvable</h2>;
    }

    const match = foundMatch;

    const homeClub = clubs.find((c) => c.id === match.homeClubId)!;
    const awayClub = clubs.find((c) => c.id === match.awayClubId)!;

    const [homeGoals, setHomeGoals] = useState(match.homeGoals ?? 0);
    const [awayGoals, setAwayGoals] = useState(match.awayGoals ?? 0);

    function save() {
        const matches = loadMatches();

        const updatedMatches = matches.map((m) =>
            m.id === match.id
                ? {
                    ...m,
                    homeGoals,
                    awayGoals,
                    played: true,
                }
                : m
        );

        saveMatches(updatedMatches);

        alert("Match enregistré !");
    }
    return (
        <div className="match-page">
            <h1>{homeClub.name}</h1>

            <div className="score-editor">
                <button onClick={() => setHomeGoals(Math.max(0, homeGoals - 1))}>
                    -
                </button>

                <span>{homeGoals}</span>

                <button onClick={() => setHomeGoals(homeGoals + 1)}>
                    +
                </button>

                <span style={{ margin: "0 20px" }}>-</span>

                <button onClick={() => setAwayGoals(Math.max(0, awayGoals - 1))}>
                    -
                </button>

                <span>{awayGoals}</span>

                <button onClick={() => setAwayGoals(awayGoals + 1)}>
                    +
                </button>
            </div>

            <h1>{awayClub.name}</h1>

            <button onClick={save}>Enregistrer</button>
        </div>
    );
}