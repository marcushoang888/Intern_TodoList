let news = document.querySelector(".news");

const url =
    "https://api.worldnewsapi.com/search-news?max-sentiment=-0.4&news-sources=https%3A%2F%2Fwww.huffingtonpost.co.uk&language=en";
const apiKey = "387544140b0646829f150a7e7aa81971";

fetch(url, {
    method: "GET",
    headers: {
        "x-api-key": apiKey,
    },
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        news.innerHTML = ``;
        let articles = data.news;
        console.log(articles);
        
        articles.forEach((article) => {
            news.innerHTML += `
            <div class="articleComponent">
              <img class="articleImg" src="${article.image}" alt="" />
              <div class="articleContent">

                <h3 class="articleTitle">${article.title}</h3>
                <a class ="articleLink btnSubmit" href="${article.summary}" target="_blank">Read more</a>
              </div>
              </div>
            `;
        });
    })
    .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
    );

// getNumber(1);
