import { useState } from "react";

import "./ScoreEditor.css";

type Props = {
    homeGoals: number | null;
    awayGoals: number | null;
    onSave: (home: number, away: number) => void;
};

export default function ScoreEditor({
    homeGoals,
    awayGoals,
    onSave,
}: Props) {

    const [home, setHome] = useState(homeGoals ?? 0);
    const [away, setAway] = useState(awayGoals ?? 0);

    return (
        <div className="score-editor">

            <div className="score-column">

                <button
                    onClick={() => {
                        const newHome = home + 1;
                        setHome(newHome);
                        onSave(newHome, away);
                    }}
                >
                    +
                </button>

                <input
                    type="number"
                    value={home}
                    min={0}
                    onChange={(e) =>
                        setHome(
                            Math.max(
                                0,
                                Number(e.target.value)
                            )
                        )
                    }
                />

                <button
                    onClick={() => {
                        const newHome = Math.max(0, home - 1);
                        setHome(newHome);
                        onSave(newHome, away);
                    }}
                >
                    −
                </button>

            </div>

            <span className="separator">-</span>

            <div className="score-column">

                <button
                    onClick={() => {
                        const newAway = away + 1;
                        setAway(newAway);
                        onSave(home, newAway);
                    }}
                >
                    +
                </button>
                <input
                    type="number"
                    value={away}
                    min={0}
                    onChange={(e) =>
                        setAway(
                            Math.max(
                                0,
                                Number(e.target.value)
                            )
                        )
                    }
                />

                <button
                    onClick={() => {
                        const newAway = Math.max(0, away - 1);
                        setAway(newAway);
                        onSave(home, newAway);
                    }}
                >
                    −
                </button>

            </div>



        </div>
    );
}