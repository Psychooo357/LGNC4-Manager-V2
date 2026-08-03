import "./ClubBadge.css";
import { getClub } from "../../utils/clubUtils";

interface ClubBadgeProps {
    clubId: number;
    size?: number;
}

export default function ClubBadge({
    clubId,
    size = 30,
}: ClubBadgeProps) {
    const club = getClub(clubId);

    if (!club) return null;

    return (
        <div className="club-badge">
            <img
                src={club.logo}
                alt={club.name}
                className="club-badge-logo"
                style={{
                    width: size,
                    height: size,
                }}
            />

            <span>{club.name}</span>
        </div>
    );
}