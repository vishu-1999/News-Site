console.log("Welcome to the project 3");

// Your API key is: 8f794533f8444676b8653cd5f1892c95

//gnews api 75iGK3mJTYlBeVfdMM8rmCYVqF1zMnqrmuOOU7F2po9Yk0GTOfkzogcJH2Yc

// api key gnews -39d4d504012b428f5be4f24a513031b5


// initialize the news api parameters
// let source = 'bbc-news';
// let apiKey = '8f794533f8444676b8653cd5f1892c95';


// grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=39d4d504012b428f5be4f24a513031b5&country=in&lang=en
`, true);


// what to do when response is ready
xhr.onload = function () {
    if(this.status === 200){

        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element,index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                    <b>Breaking News ${index+1}</b> : ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body"> 
                                    ${element["content"]}.<a href="${element["url"]}" target='_blank'>Read more here</a>
                                </div>
                            </div>
                        </div>`;
           newsHtml += news;             
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("Some error occured")
    }
}
xhr.send()


