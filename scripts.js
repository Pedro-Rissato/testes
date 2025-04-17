function fetchRandomQuote() {
    fetch("https://api.quotable.io/random")
    .then (respone => Response.json())
    .then (data => {
        const quote = data.content;
        document.getElementById ("quote").textContent = quote;

    })
    .catch(error => {
        console.error("Error fetching quote", error);
    });
}

document.getElementById("generator").addEventListener("click",fetchRandomQuote);

fetchRandomQuote()