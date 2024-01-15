export let url = `https://plant-disease-471i.onrender.com/`;

export default async function callApi(route: string, method: string, body: any) {
    const headers = {
        accept: 'application/json',
        'Content-Type': 'application/json',
    };

    const config: any = {
        method: method.toUpperCase(),
        headers: headers,
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url + route, config);
        const data = await response.json();
        return { data, status: response.status };

    } catch (error) {
        return { error };
    }
}