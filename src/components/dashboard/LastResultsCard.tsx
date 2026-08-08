import Card from "../common/Card";
import ClubBadge from "../ClubBadge/ClubBadge";

import { useLeague } from "../../context/LeagueContext";
import { getClubBySlug } from "../../utils/clubUtils";
import "./LastResultsCard.css";

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
            <div className="last-results-list">
                {results.map((match: any) => {
                    const homeSlug =
                        match.homeParticipantNameUrl
                    const awaySlug =
                        match.awayParticipantNameUrl
                    const homeClub = getClubBySlug(homeSlug);
                    const awayClub = getClubBySlug(awaySlug);

                    return (
                        <div
                            key={match.eventId}
                            className="last-result"
                        >
                            <div className="last-result-team home">
                                {homeClub && (
                                    <ClubBadge
                                        clubId={homeClub.id}
                                        size={28}
                                    />
                                )}
                            </div>

                            <strong className="last-result-score">
                                {match.homeScore} - {match.awayScore}
                            </strong>

                            <div className="last-result-team away">
                                {awayClub && (
                                    <ClubBadge
                                        clubId={awayClub.id}
                                        size={28}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}