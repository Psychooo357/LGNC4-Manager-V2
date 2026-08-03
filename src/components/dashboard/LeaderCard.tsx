import Card from "../common/Card";
import ClubBadge from "../ClubBadge/ClubBadge";

import { useLeague } from "../../context/LeagueContext";
import { getClubBySlug } from "../../utils/clubUtils";

export default function LeaderCard() {
    const { standings, loading } = useLeague();

    if (loading) {
        return (
            <Card title="🥇 Leader">
                <p>Chargement...</p>
            </Card>
        );
    }

    if (standings.length === 0) {
        return (
            <Card title="🥇 Leader">
                <p>Aucune donnée.</p>
            </Card>
        );
    }

    const leader = standings[0];
    const club = getClubBySlug(leader.teamSlug);

    return (
        <Card title="🥇 Leader">
            {club && (
                <ClubBadge
                    clubId={club.id}
                    size={36}
                />
            )}

            <h2>{leader.teamName}</h2>

            <h3>{leader.points} pts</h3>
        </Card>
    );
}