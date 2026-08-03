import ClubBadge from "../ClubBadge/ClubBadge";

import { getClubBySlug } from "../../utils/clubUtils";

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
                    <th>Club</th>
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

                    return (
                        <tr key={player.pseudo}>
                            <td>{player.rank}</td>

                            <td>{player.pseudo}</td>

                            <td>
                                {club && (
                                    <ClubBadge
                                        clubId={club.id}
                                        size={22}
                                    />
                                )}
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