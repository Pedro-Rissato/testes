const generator = document.querySelector(".generator")
console.log(generator);

const quoteel = document.querySelector (".quote")
const authorel = document.querySelector (".author")

const api_url = "https://api.quotable.io/random";

const getQuote = async () => {
    try {
        const response = await fetch(api_url);
        const data = await response.json();

        const quote = data.content
        const author = data.author || "Unknown";

        quoteel.textContent = quote;
        authorel.textContent = author;
    }
    catch (error) {
        console.log(error);
        quoteel.textContent = 'Oops! Something went wrong.';
        authorel.textContent = '';
    }
}

getQuote(); // fetching a quote on page load

generator.addEventListener('click', getQuote); // attaching an event listener to the new quote button