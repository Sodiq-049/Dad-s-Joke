const clickEl = document.getElementById("click");
const jokesEl = document.getElementById("jokes")

const apiKey = "yxeSKh0+AhbFA0l9yJt3cA==2TWIOr9IYXJejgkN";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJokes(){

    try {
        jokesEl.innerText = "Updating...";
    clickEl.disabled = true;
    clickEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    clickEl.disabled = false;
    clickEl.innerText = "TELL ME A JOKE";

    jokesEl.innerText = data[0].joke;
    } catch (error) {
        jokesEl.innerText = "An error occured, try again later";
        clickEl.disabled = false;
        clickEl.innerText = "TELL ME A JOKE";
        console.log(error);
    }
}

clickEl.addEventListener("click", getJokes);