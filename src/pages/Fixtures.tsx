import Layout from "../components/layout/Layout";
import Card from "../components/common/Card";
import ClubBadge from "../components/ClubBadge/ClubBadge";

import { useLeague } from "../context/LeagueContext";
import { getClubBySlug } from "../utils/clubUtils";

export default function Fixtures() {
    const { fixtures, loading } = useLeague();

    if (loading) {
        return (
            <Layout>
                <h1>📅 Calendrier</h1>
                <p>Chargement...</p>
            </Layout>
        );
    }

    if (!fixtures.length) {
        return (
            <Layout>
                <h1>📅 Calendrier</h1>
                <p>Aucun match disponible.</p>
            </Layout>
        );
    }

    const rounds = [
        ...new Set(fixtures.map((m: any) => m.round)),
    ];

    return (
        <Layout>
            <h1 className="page-title">📅 Calendrier</h1>

            {rounds.map((round: any) => {
                const matches = fixtures.filter(
                    (m: any) => m.round === round
                );

                const formattedDate = new Date(
                    matches[0].startDateTimeUtc
                ).toLocaleString("fr-FR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                });

                return (
                    <Card
                        key={round}
                        title={round}
                    >
                        <div
                            style={{
                                textAlign: "center",
                                color: "#94a3b8",
                                marginBottom: 24,
                                fontWeight: 600,
                            }}
                        >
                            {formattedDate}
                        </div>

                        {matches.map((match: any) => {
                            const homeClub = getClubBySlug(
                                match.homeParticipantNameUrl
                            );

                            const awayClub = getClubBySlug(
                                match.awayParticipantNameUrl
                            );

                            return (
                                <div
                                    key={match.eventId}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "1fr auto 1fr",
                                        alignItems: "center",
                                        padding: "16px 0",
                                        borderTop:
                                            "1px solid rgba(255,255,255,.08)",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12,
                                        }}
                                    >
                                        {homeClub && (
                                            <ClubBadge
                                                clubId={
                                                    homeClub.id
                                                }
                                            />
                                        )}
                                    </div>

                                    <strong
                                        style={{
                                            fontSize: 20,
                                            minWidth: 60,
                                            textAlign: "center",
                                        }}
                                    >
                                        {match.homeScore != null &&
                                            match.awayScore != null
                                            ? `${match.homeScore} - ${match.awayScore}`
                                            : "VS"}
                                    </strong>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent:
                                                "flex-end",
                                            alignItems: "center",
                                            gap: 12,
                                        }}
                                    >
                                        {awayClub && (
                                            <ClubBadge
                                                clubId={
                                                    awayClub.id
                                                }
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </Card>
                );
            })}
        </Layout>
    );
}