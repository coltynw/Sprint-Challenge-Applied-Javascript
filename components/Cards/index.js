// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardFunction(headlineContent, authorImage, authorsName){

    //creating the elements
    card = document.createElement('div');
    headline = document.createElement('div');
    author = document.createElement('div');
    imgContainer = document.createElement('div');
    authorImg = document.createElement('img');
    authorName = document.createElement('span');

    //adding classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //adding text and image content
    headline.textContent = headlineContent;
    authorImg.src = authorImage;
    authorName.textContent = authorsName;

    //adding the elements with append
    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(authorImg);
    author.append(authorName);

    return card;
}

cardContainer = document.querySelector('.cards-container');
axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        //looking at the data
        // console.log(response.data.articles);
        //indexing the data by iterating through it with a forEach. Setting it to the variable (box) and appending it.
        response.data.articles.bootstrap.forEach( i => {
            let box = cardFunction(i.headline, i.authorPhoto, i.authorName);
            cardContainer.append(box);
        })
        response.data.articles.javascript.forEach( i => {
            let box = cardFunction(i.headline, i.authorPhoto, i.authorName);
            cardContainer.append(box);
        })
        response.data.articles.jquery.forEach( i => {
            let box = cardFunction(i.headline, i.authorPhoto, i.authorName);
            cardContainer.append(box);
        })
        response.data.articles.node.forEach( i => {
            let box = cardFunction(i.headline, i.authorPhoto, i.authorName);
            cardContainer.append(box);
        })
        response.data.articles.technology.forEach( i => {
            let box = cardFunction(i.headline, i.authorPhoto, i.authorName);
            cardContainer.append(box);
        })
    })

    //the error
    .catch(error => {
        console.log("Couldn't get Data", error);
    })   