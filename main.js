// apikey import from env file
const API_KEY = 'd5f71f1b88bcdb5972f77baa88b7ce9b';

// Call id's from HTML to Javascript
const trendingSpan = document.getElementById('trending')
const middleDiv = document.getElementById('middleDiv')
const bottomDiv = document.getElementById('bottomDiv')
const ArtBox2 = document.getElementById('ArtBox2');
const StockBox = document.getElementById('StockBox')
const TechUpdateSpan = document.getElementById('TechUpdate')
const LastDiv = document.getElementById('LastDiv')

// Main page trending title
async function Trending() {
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=india&lang=en&max=1&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data)

        // get the data from api
        const articles = data.articles;
        console.log(articles);

        //  append content to the heading 
        for (let i = 0; i < articles.length; i++) {
            const title = articles[i];
            trendingSpan.innerHTML = title.title
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Main page trending News
async function MainNews() {
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=india&lang=en&max=1&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data)

        // get the data from api
        const articles = data.articles;
        console.log(articles);

        // append content to the main news
        for (let i = 0; i < articles.length; i++) {
            const articleData = articles[i];
            
            // creating a Article Tag and append to the middleDiv
            const article = document.createElement('article');
            middleDiv.appendChild(article);

            const h4 = document.createElement('h4');
            h4.textContent = "LATEST NEWS";
            h4.classList.add('PosIcon');
            article.appendChild(h4);
            
            const h3 = document.createElement('h3');
            h3.textContent = articleData.title; 
            h3.classList.add('Mainh3'); 
            article.appendChild(h3); 

            const img = document.createElement('img')
            img.src = articleData.image;
            img.classList.add('img-fluid')
            article.appendChild(img); 
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

// BottomDiv page sports News
async function SportsNews() {
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=ipl&lang=en&max=3&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data)

        // get the data from api
        const articles = data.articles;
        console.log(articles);

        // append content to the main news
        for (let i = 0; i < articles.length; i++) {
            const Data = articles[i];
            
            // creating a Article Tag and append to the BottomDiv
            const article = document.createElement('article');
            bottomDiv.appendChild(article);
            
            const img = document.createElement('img')
            img.src = Data.image; // Fix: Use Data instead of articleData
            img.classList.add('img-fluid')
            article.appendChild(img); 
            
            const h4 = document.createElement('h4');
            h4.textContent = "SPORTS";
            h4.classList.add('Category');
            article.appendChild(h4);

            const h3 = document.createElement('h3');
            h3.textContent = Data.title; // Fix: Use Data instead of articleData
            h3.classList.add('TitleText'); 
            article.appendChild(h3);
            
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}



async function StockUpdate() {
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=uk&lang=en&max=5&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data)

        // get the data from api
        const articles = data.articles;
        console.log(articles);

        // append content to the main news
        for (let i = 0; i < articles.length; i++) {
            const articleData = articles[i];
            
            // creating a Article Tag and append to the ArtBox2
            const article = document.createElement('article');
            ArtBox2.appendChild(article);
            article.classList.add('d-flex')
            console.log(ArtBox2)

            const img = document.createElement('img')
            img.src = articleData.image;
            img.classList.add('ArtImage')
            article.appendChild(img); 
        

            const div = document.createElement('div')
            article.appendChild(div)
            
            const h4 = document.createElement('h4');
            h4.textContent = "WORLD NEWS";
            h4.classList.add('Category');
            div.appendChild(h4);

            const h3 = document.createElement('h3');
            h3.textContent = articleData.title; 
            h3.classList.add('TitleText'); 
            div.appendChild(h3);
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function TechHeading() {
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=election2024&lang=en&max=1&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data)

        // get the data from api
        const articles = data.articles;
        console.log(articles);

        //  append content to the heading 
        for (let i = 0; i < articles.length; i++) {
            const title = articles[i];
            TechUpdateSpan.innerHTML = title.title
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function TechnologyFinal() {
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=election%20india&lang=en&max=6&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data)

        // get the data from api
        const articles = data.articles;
        console.log(articles);

        // append content to the main news
        for (let i = 0; i < articles.length; i++) {
            const articleData = articles[i];
            
            // creating a Article Tag and append to the ArtBox2
            const article = document.createElement('article');
            LastDiv.appendChild(article);
            console.log(LastDiv)

            const img = document.createElement('img')
            img.src = articleData.image; 
            img.classList.add('card-img-top')
            article.appendChild(img); 

            const div = document.createElement('div')
            div.classList.add('card-body')
            article.appendChild(div)

            const h5 = document.createElement('h5');
            h5.textContent = articleData.title; 
            h5.classList.add('card-title'); 
            div.appendChild(h5);

            const p = document.createElement('p');
            p.textContent = articleData.title;
            p.classList.add('card-text'); 
            div.appendChild(p);


        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function
Trending();
MainNews();
SportsNews();
StockUpdate();
TechHeading();
TechnologyFinal();

