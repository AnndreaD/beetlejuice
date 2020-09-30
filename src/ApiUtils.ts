//TODO add to env
const apiBaseUrl = 'http://localhost:3000/';

export const questionUrl = apiBaseUrl + 'question';
export const claimUrl = apiBaseUrl + 'claim';

export async function doPost(url: string, body: object) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    const json = await res.json();
}
