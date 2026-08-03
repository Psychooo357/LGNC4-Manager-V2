import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import "./Layout.css";

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="layout">

            <aside className="sidebar">

                <h2>⚽ LGNC4</h2>

                <nav>

                    <Link to="/">🏠 Dashboard</Link>

                    <Link to="/classement">🏆 Classement</Link>

                    <Link to="/joueurs">👥 Joueurs</Link>

                    <Link to="/journees">⚽ Journées</Link>

                    <Link to="/stats">📊 Stats</Link>

                    <Link to="/admin">⚙️ Admin</Link>

                </nav>

            </aside>

            <main className="content">

                {children}

            </main>

        </div>
    );
}