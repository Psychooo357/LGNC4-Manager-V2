import Card from "../common/Card";
import ClubBadge from "../ClubBadge/ClubBadge";

import { useLeague } from "../../context/LeagueContext";
import { getClubBySlug } from "../../utils/clubUtils";

export default function TopThreeCard() {
    const { standings, loading } = useLeague();

    if (loading) {
        return (
            <Card title="🥇 Top 3">
                <p>Chargement...</p>
            </Card>
        );
    }

    const top3 = standings.slice(0, 3);

    return (
        <Card title="🥇 Top 3">
            {top3.map((team, index) => {
                const club = getClubBySlug(team.teamSlug);

                return (
                    <div
                        key={team.teamId}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 12,
                        }}
                    >
                        <span>
                            {index + 1}. {team.teamName}
                        </span>

                        {club && (
                            <ClubBadge
                                clubId={club.id}
                                size={22}
                            />
                        )}
                    </div>
                );
            })}
        </Card>
    );
}