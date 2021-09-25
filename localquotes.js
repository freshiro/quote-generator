
// show new qoutes
function newQuote(){
    // Pick a random qoute from  array
    const qoute = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(qoute);

} 

newQuote();