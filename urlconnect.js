// function to retrieve data from a remote API

// load node-fetch
// const fetch = require('node-fetch');

//module.exports = {

async function urlGet(url) {
    try {
        const response = await fetch(url)
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error("Error: " + error);
    }
}

async function urlPost(url,pString) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: pString
        });
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error("Error: " + error);
    }
}
