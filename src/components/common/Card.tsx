import "./Card.css";
import type { ReactNode } from "react";

interface CardProps {
    title: string;
    children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
    return (
        <div className="card">
            <h3>{title}</h3>

            <div className="card-content">
                {children}
            </div>
        </div>
    );
}