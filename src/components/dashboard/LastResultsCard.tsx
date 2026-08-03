import Card from "../common/Card";
import ClubBadge from "../ClubBadge/ClubBadge";

import { useLeague } from "../../context/LeagueContext";
import { getClubBySlug } from "../../utils/clubUtils";

export default function LastResultsCard() {
    const { results, loading } = useLeague();

    if (loading) {
        return (
            <Card title="🌍 Derniers résultats">
                <p>Chargement...</p>
            </Card>
        );
    }

    if (!results || results.length === 0) {
        return (
            <Card title="🌍 Derniers résultats">
                <p>Aucun match joué pour le moment.</p>
            </Card>
        );
    }

    return (
        <Card title="🌍 Derniers résultats">
            {results.map((match: any) => {
                const homeClub = getClubBySlug(match.homeTeamSlug);
                const awayClub = getClubBySlug(match.awayTeamSlug);

                return (
                    <div
                        key={match.id}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr auto 1fr",
                            alignItems: "center",
                            marginBottom: 12,
                            gap: 16,
                        }}
                    >
                        <div style={{ justifySelf: "start" }}>
                            {homeClub && (
                                <ClubBadge
                                    clubId={homeClub.id}
                                    size={24}
                                />
                            )}
                        </div>

                        <strong
                            style={{
                                textAlign: "center",
                                minWidth: 70,
                            }}
                        >
                            {match.homeScore} - {match.awayScore}
                        </strong>

                        <div style={{ justifySelf: "end" }}>
                            {awayClub && (
                                <ClubBadge
                                    clubId={awayClub.id}
                                    size={24}
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </Card>
    );
}