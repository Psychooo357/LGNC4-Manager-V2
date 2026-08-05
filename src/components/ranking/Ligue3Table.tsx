import ClubBadge from "../ClubBadge/ClubBadge";

import "./Ligue3Table.css";

import { getClubBySlug } from "../../utils/clubUtils";

import type { Standing } from "../../types/sportdb";

interface Ligue3TableProps {
    standings: Standing[];
}

export default function Ligue3Table({
    standings,
}: Ligue3TableProps) {
    return (
        <div className="ligue3-table-container">
            <table className="ligue3-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="club-col">Club</th>
                        <th>MJ</th>
                        <th>V</th>
                        <th>N</th>
                        <th>D</th>
                        <th>Diff</th>
                        <th>Pts</th>
                    </tr>
                </thead>

                <tbody>
                    {standings.map((club) => {
                        console.log(club.teamName, club.teamSlug);
                        const localClub = getClubBySlug(club.teamSlug);


                        const losses =
                            Number(club.matches) -
                            Number(club.wins) -
                            Number(club.draws);

                        return (
                            <tr key={club.teamId}>
                                <td className={`rank rank-${club.rank}`}>
                                    {club.rank}
                                </td>

                                <td className="club-cell">
                                    {localClub ? (
                                        <ClubBadge
                                            clubId={localClub.id}
                                            size={22}
                                        />
                                    ) : (
                                        <span>{club.teamName}</span>
                                    )}
                                </td>

                                <td>{club.matches}</td>
                                <td>{club.wins}</td>
                                <td>{club.draws}</td>
                                <td>{losses}</td>

                                <td>
                                    {Number(club.goalDiff) > 0
                                        ? `+${club.goalDiff}`
                                        : club.goalDiff}
                                </td>

                                <td className="points">
                                    {club.points}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}