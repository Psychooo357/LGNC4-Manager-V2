import Layout from "../components/layout/Layout";
import Card from "../components/common/Card";

import { useLeague } from "../context/LeagueContext";

export default function Stats() {
    const { standings, results, loading } = useLeague();

    if (loading) {
        return (
            <Layout>
                <h1 className="page-title">📊 Stats Ligue 3</h1>
                <p>Chargement...</p>
            </Layout>
        );
    }

    const safeStandings = Array.isArray(standings)
        ? standings
        : [];

    const safeResults = Array.isArray(results)
        ? results
        : [];

    const totalMatches = safeResults.length;

    const totalGoals = safeResults.reduce(
        (sum: number, match: any) =>
            sum +
            (Number(match.homeScore) || 0) +
            (Number(match.awayScore) || 0),
        0
    );

    const avgGoals =
        totalMatches > 0
            ? (totalGoals / totalMatches).toFixed(2)
            : "0.00";

    return (
        <Layout>
            <h1 className="page-title">
                📊 Stats Ligue 3
            </h1>

            <div className="dashboard-grid">
                <Card title="⚽ Buts">
                    <h2>{totalGoals}</h2>
                </Card>

                <Card title="🏟️ Matchs joués">
                    <h2>{totalMatches}</h2>
                </Card>

                <Card title="📈 Moyenne">
                    <h2>{avgGoals}</h2>
                </Card>

                <Card title="🥇 Leader">
                    <h2>
                        {safeStandings[0]?.teamName ??
                            "-"}
                    </h2>
                </Card>
            </div>
        </Layout>
    );
}