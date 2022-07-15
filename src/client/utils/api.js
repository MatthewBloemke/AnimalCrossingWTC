const headers = new Headers();
headers.append("Content-Type", "application/json");
console.log(process.env.apiKey)

const fetchJson = async (url, options, onCancel) => {
    try {
        const response = await fetch(url, options);
        if (response.status === 204) {
            return null;
        } else if (response.status === 401) {
            return undefined;
        };
        const payload = await response.json();
        if (payload.error) {
            return {status: response.status, error: payload.error};
        };
        return payload;
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            return {status: response.status, error};
        };
        return onCancel;
    };
};

export async function pullNHfish (currentMonth) {
    headers.append("X-API-KEY", process.env.apiKey)
    return await fetchJson(`https://api.nookipedia.com/nh/fish`, {headers}, [])
}