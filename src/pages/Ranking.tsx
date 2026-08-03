import { useEffect, useState } from "react";

import "./Ranking.css";

import Layout from "../components/layout/Layout";
import RankingTable from "../components/ranking/RankingTable";
import Ligue3Table from "../components/ranking/Ligue3Table";

import { getLigue3Standings } from "../services/sportDbApi";
import { buildManagerRanking } from "../services/managerService";
import type { Standing } from "../types/sportdb";

export default function Ranking() {
    const [mode, setMode] = useState<"league" | "manager">("league");

    const [standings, setStandings] = useState<Standing[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const data = await getLigue3Standings();
                setStandings(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, []);

    const managerStandings = buildManagerRanking(standings);

    if (loading) {
        return (
            <Layout>
                <h2>Chargement du classement...</h2>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="ranking-header">
                <h1>🏆 Classements</h1>

                <p>
                    Consultez le classement officiel de la Ligue 3
                    ou le classement des managers.
                </p>
            </div>

            <div className="ranking-tabs">
                <button
                    className={
                        mode === "league"
                            ? "ranking-tab active"
                            : "ranking-tab"
                    }
                    onClick={() => setMode("league")}
                >
                    🏆 Ligue 3
                </button>

                <button
                    className={
                        mode === "manager"
                            ? "ranking-tab active"
                            : "ranking-tab"
                    }
                    onClick={() => setMode("manager")}
                >
                    👥 Managers
                </button>
            </div>

            {mode === "league" ? (
                <Ligue3Table standings={standings} />
            ) : (
                <RankingTable standings={managerStandings} />
            )}
        </Layout>
    );
}