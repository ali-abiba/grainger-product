const apiURL = 'http://localhost:8080';

export function get(url: string): Promise<any> {

    return fetch(apiURL + url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        });
}

export function post(url: string, body: any): Promise<any> {
    return fetch(apiURL + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const contentLength = response.headers.get('Content-Length');
        if (!contentLength || parseInt(contentLength, 10) === 0) {
            return {}; // Return an empty object if there's no body
        }
        return response.json();
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    });
}