import Card from "../common/Card";
import ClubBadge from "../ClubBadge/ClubBadge";

import { useLeague } from "../../context/LeagueContext";
import { getClubBySlug } from "../../utils/clubUtils";

import "./MatchEditor.css";

export default function MatchEditor() {
    const { fixtures, loading } = useLeague();

    if (loading) {
        return <p>Chargement...</p>;
    }

    if (!fixtures.length) {
        return <p>Aucun match disponible.</p>;
    }

    return (
        <Card title="Calendrier Ligue 3">
            {fixtures.map((match: any) => {
                const homeClub = getClubBySlug(match.homeTeamSlug);
                const awayClub = getClubBySlug(match.awayTeamSlug);

                return (
                    <div
                        key={match.id}
                        className="match-card"
                    >
                        <div className="match-content">
                            <div className="team-name">
                                {homeClub && (
                                    <ClubBadge
                                        clubId={homeClub.id}
                                        size={24}
                                    />
                                )}
                            </div>

                            <div
                                style={{
                                    fontWeight: 700,
                                    minWidth: 80,
                                    textAlign: "center",
                                }}
                            >
                                {match.homeScore != null &&
                                    match.awayScore != null
                                    ? `${match.homeScore} - ${match.awayScore}`
                                    : "VS"}
                            </div>

                            <div className="team-name away-team">
                                {awayClub && (
                                    <ClubBadge
                                        clubId={awayClub.id}
                                        size={24}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </Card>
    );
}