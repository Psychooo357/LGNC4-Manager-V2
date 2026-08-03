import Layout from "../components/layout/Layout";
import Card from "../components/common/Card";

import "./Admin.css";

export default function Admin() {
    return (
        <Layout>
            <div className="admin-header">
                <div>
                    <h1>⚙️ Administration</h1>

                    <p>
                        Cette section est actuellement en cours de
                        développement.
                    </p>
                </div>
            </div>

            <Card title="🚧 En construction">
                <p>
                    L'administration de la Ligue 3 sera bientôt disponible.
                </p>

                <p style={{ marginTop: 12 }}>
                    Les fonctionnalités suivantes arriveront
                    progressivement :
                </p>

                <ul
                    style={{
                        marginTop: 16,
                        paddingLeft: 20,
                        lineHeight: 1.8,
                    }}
                >
                    <li>Gestion des résultats</li>
                    <li>Modification du calendrier</li>
                    <li>Administration des clubs</li>
                    <li>Administration des joueurs</li>
                    <li>Statistiques de la ligue</li>
                </ul>
            </Card>
        </Layout>
    );
}