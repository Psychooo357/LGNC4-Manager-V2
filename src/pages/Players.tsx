import Layout from "../components/layout/Layout";
import { players } from "../data/players";
import { clubs } from "../data/clubs";

export default function Players() {
    return (
        <Layout>
            <h1>👥 Joueurs</h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "20px",
                    marginTop: "30px",
                }}
            >
                {players.map((player) => {
                    const club = clubs.find(
                        (club) => club.id === player.clubId
                    );

                    return (
                        <div
                            key={player.id}
                            style={{
                                background: "#1b2435",
                                borderRadius: "16px",
                                padding: "20px",
                                textAlign: "center",
                                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                            }}
                        >
                            <img
                                src={player.avatar}
                                alt={player.pseudo}
                                style={{
                                    width: "90px",
                                    height: "90px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    border: "3px solid #ffffff30",
                                    marginBottom: "15px",
                                }}
                            />

                            <h2
                                style={{
                                    margin: 0,
                                    color: "#fff",
                                }}
                            >
                                {player.pseudo}
                            </h2>

                            {club && (
                                <p
                                    style={{
                                        color: "#9ca3af",
                                        marginTop: "8px",
                                        marginBottom: 0,
                                    }}
                                >
                                    {club.name}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
}