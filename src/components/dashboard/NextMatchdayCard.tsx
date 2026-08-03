import Card from "../common/Card";
import ClubBadge from "../ClubBadge/ClubBadge";

import { useLeague } from "../../context/LeagueContext";
import { getClubBySlug } from "../../utils/clubUtils";

export default function NextMatchdayCard() {
    const { fixtures, loading } = useLeague();

    if (loading) {
        return (
            <Card title="🗓️ Prochaine journée">
                <p>Chargement...</p>
            </Card>
        );
    }

    if (!fixtures || fixtures.length === 0) {
        return (
            <Card title="🗓️ Prochaine journée">
                <p>Aucun match programmé pour le moment.</p>
            </Card>
        );
    }

    const nextRound = fixtures.find(
        (match: any) => match.eventStage === "SCHEDULED"
    )?.round;

    const nextMatches = fixtures.filter(
        (match: any) =>
            match.round === nextRound &&
            match.eventStage === "SCHEDULED"
    );

    return (
        <Card title="🗓️ Prochaine journée">
            {nextMatches.map((match: any, index: number) => {
                const homeClub = getClubBySlug(
                    match.homeParticipantNameUrl.replace("-fc", "")
                );

                const awayClub = getClubBySlug(
                    match.awayParticipantNameUrl.replace("-fc", "")
                );

                return (
                    <div
                        key={index}
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
                                minWidth: 50,
                                textAlign: "center",
                            }}
                        >
                            VS
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