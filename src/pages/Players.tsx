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
                            }}
                        >
                            <div
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "50%",
                                    background: "#2d3a52",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 15px",
                                    fontSize: "32px",
                                }}
                            >
                                👤
                            </div>

                            <h2>{player.pseudo}</h2>

                            {club && (
                                <>
                                    <p
                                        style={{
                                            color: "#9ca3af",
                                            marginTop: "10px",
                                        }}
                                    >
                                        {club.name}
                                    </p>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
}