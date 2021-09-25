const quoteContainer = document.getElementById('qoute-container');
const quoteText = document.getElementById('quote');
const authortext = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// global variable
let apiQuotes =[];

// show new qoutes
function newQuote(){
    // Pick a random qoute from apiQoutes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if author field exist 
    if(!quote.author){
        authortext.textContent= 'Unknown';
    }else{
        authortext.textContent= quote.author;
    }
    //check quote length to determine styling 
    if(quote.text.length >120){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
}
// Get qoutes from api
async function getQuotes(){
    const apiurl= 'https://type.fit/api/quotes';
    try{
        const respons = await fetch(apiurl);
        apiQuotes = await respons.json();
        newQuote();
    }catch(error){
        // catch error 
    }
}


//Tweet Quote
function tweetQuote(){
    const twitterurl=`https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterurl,'_blank');//open twitter in a new tab
}

//Event listerners for button
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote)
// on load
getQuotes();
