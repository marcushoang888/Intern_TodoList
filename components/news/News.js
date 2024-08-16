let news = document.querySelector(".news");

const url =
    "https://api.worldnewsapi.com/search-news?max-sentiment=-0.4&news-sources=https%3A%2F%2Fwww.huffingtonpost.co.uk&language=en";

function getNumber(number) {
    fetch(
        `https://newsapi.org/v2/everything?q=tesla&from=2024-07-16&sortBy=publishedAt&apiKey=b525d9255c0c463ab0fef771579f365a&page=${number}&pageSize=5`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);

            news.innerHTML = ``;
            let articles = data.articles;

            articles.forEach((article) => {
                news.innerHTML += `
            <div class="articleComponent">
              <img class="articleImg" src="${article.urlToImage}" alt="" />
              <div class="articleContent">

                <h3 class="articleTitle">${article.title}</h3>
                <a class ="articleLink btnSubmit" href="${article.description}" target="_blank">Read more</a>
              </div>
              </div>
            `;
            });
        })
        .catch((error) =>
            console.error(
                "There was a problem with the fetch operation:",
                error
            )
        );
}

getNumber(1);
