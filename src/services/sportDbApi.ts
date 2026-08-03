const API_KEY = import.meta.env.VITE_SPORTDB_API_KEY;

const BASE_URL = "https://api.sportdb.dev";

const headers = {
    "X-API-Key": API_KEY,
};

async function fetchApi(endpoint: string) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers,
    });

    if (!response.ok) {
        throw new Error(`Erreur SportDB : ${response.status}`);
    }

    return response.json();
}

export function getLigue3Standings() {
    return fetchApi(
        "/api/flashscore/football/france:77/ligue-3:pv9Nf2KF/2026-2027/standings"
    );
}

export function getLigue3Results() {
    return fetchApi(
        "/api/flashscore/football/france:77/ligue-3:pv9Nf2KF/2026-2027/results?page=1"
    );
}

export function getLigue3Fixtures() {
    return fetchApi(
        "/api/flashscore/football/france:77/ligue-3:pv9Nf2KF/2026-2027/fixtures?page=1"
    );
}