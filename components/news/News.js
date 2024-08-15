let news = document.querySelector(".news");

function getNumber(number) {
    fetch(
        `
        https://newsapi.org/v2/everything?q=apple&from=2024-08-14&to=2024-08-14&sortBy=popularity&apiKey=b525d9255c0c463ab0fef771579f365a&page=${number}&pageSize=5`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            news.innerHTML = ``;
            let articles = data.articles;
            articles.forEach((article) => {
                news.innerHTML += `
            <div class="articleComponent">
              <img class="articleImg" src="${article.urlToImage}" alt="" />
              <div class="articleContent">

                <h3 class="articleTitle">${article.title}</h3>
                <p class="articleDesc">${article.content}</p>
                <a class ="articleLink btnSubmit" href="${article.url}" target="_blank">Read more</a>
              </div>
              </div>
            `;
            });
        });
}

getNumber(1);
