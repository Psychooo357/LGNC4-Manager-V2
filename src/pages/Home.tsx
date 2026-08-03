import Layout from "../components/layout/Layout";

import LeaderCard from "../components/dashboard/LeaderCard";
import TopThreeCard from "../components/dashboard/TopThreeCard";
import LastResultsCard from "../components/dashboard/LastResultsCard";
import NextMatchdayCard from "../components/dashboard/NextMatchdayCard";

import "./Home.css";

export default function Home() {
    return (
        <Layout>
            <h1 className="page-title">Dashboard</h1>

            <div className="dashboard-grid">
                <LeaderCard />

                <TopThreeCard />

                <LastResultsCard />

                <NextMatchdayCard />
            </div>
        </Layout>
    );
}