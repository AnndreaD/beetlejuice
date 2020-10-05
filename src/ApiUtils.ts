//TODO add to env
const apiBaseUrl = 'http://localhost:3000/';

//TODO move to routes file
export const questionUrl = apiBaseUrl + 'question';
export const claimUrl = apiBaseUrl + 'claim';
export const category = apiBaseUrl + 'category';
export const language = apiBaseUrl + 'language';

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

export async function doGet(url: string) {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
}

//TODO create params function

export async function doGetWithParams(url: string, params: string) {
    const res = await fetch(url + params, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
}
