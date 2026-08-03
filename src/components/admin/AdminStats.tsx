import Card from "../common/Card";
import { loadMatches } from "../../services/storageService";

import "./AdminStats.css";

export default function AdminStats() {
    const matches = loadMatches();

    const played = matches.filter(m => m.played).length;
    const total = matches.length;
    const remaining = total - played;

    return (
        <div className="admin-stats">
            <Card title="Matchs">
                <h2>{total}</h2>
            </Card>

            <Card title="Joués">
                <h2>{played}</h2>
            </Card>

            <Card title="Restants">
                <h2>{remaining}</h2>
            </Card>

            <Card title="Complété">
                <h2>{Math.round((played / total) * 100)}%</h2>
            </Card>
        </div>
    );
}