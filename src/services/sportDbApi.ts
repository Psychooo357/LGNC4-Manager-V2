const BASE_URL = "https://lgnc4-api.kilyan357.workers.dev";

async function fetchApi(endpoint: string) {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(`Erreur SportDB : ${response.status}`);
    }

    return response.json();
}

export function getLigue3Standings() {
    return fetchApi("/standings");
}

export function getLigue3Results() {
    return fetchApi("/results?page=1");
}

export function getLigue3Fixtures() {
    return fetchApi("/fixtures?page=1");
}