import ClubBadge from "../ClubBadge/ClubBadge";

import { getClubBySlug } from "../../utils/clubUtils";
import { getPlayerByClubSlug } from "../../utils/playerUtils";

import "./RankingTable.css";

interface ManagerStanding {
    rank: number;
    pseudo: string;
    club: string;
    clubSlug: string;
    matches: number;
    wins: number;
    draws: number;
    points: number;
    goalDiff: number;
}

interface RankingTableProps {
    standings: ManagerStanding[];
}

export default function RankingTable({
    standings,
}: RankingTableProps) {
    return (
        <table className="ranking-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Manager</th>
                    <th>MJ</th>
                    <th>V</th>
                    <th>N</th>
                    <th>Diff</th>
                    <th>Pts</th>
                </tr>
            </thead>

            <tbody>
                {standings.map((player) => {
                    const club = getClubBySlug(player.clubSlug);
                    const manager = getPlayerByClubSlug(player.clubSlug);

                    return (
                        <tr key={player.pseudo}>
                            <td>{player.rank}</td>

                            <td>
                                <div className="manager-cell">
                                    {manager && (
                                        <img
                                            src={manager.avatar}
                                            alt={manager.pseudo}
                                            className="manager-avatar"
                                        />
                                    )}

                                    <div className="manager-info">
                                        <span className="manager-name">
                                            {player.pseudo}
                                        </span>

                                        {club && (
                                            <div className="club-info">
                                                <ClubBadge
                                                    clubId={club.id}
                                                    size={18}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </td>

                            <td>{player.matches}</td>
                            <td>{player.wins}</td>
                            <td>{player.draws}</td>
                            <td>{player.goalDiff}</td>

                            <td className="points">
                                {player.points}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}