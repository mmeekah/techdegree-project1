/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var red;
var green;
var blue;
var quotes=[
  
  { 
    quote:"Every moment is a fresh beginning.",
    source: "T.S Eliot",
    citation: "Book",
    year: 1994

  }, 
  {
    quote:"Everything you can imagine is real.",
    source: "Pablo Picasso",
    citation: "",
    year: ""
  }, 
  {
    quote:"Whatever you do, do it well.", 
    source: "Walt Disney",
    citation: "gfregr",
    year:""
  }, 
  {
    quote:"What we think, we become.",
    source:"Buddha",
    citation: "",
    year:1600
  }, 
  {
    quote:"Be so good they can’t ignore you.",
    source:" Martin",
    citation: "dcbsdkcds",
    year:1500
  }

];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}

 

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  return randomQuote;
}


//Function to genereate random rgb color value
function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}
randomColorGenerator();
console.log(randomColorGenerator())

/***
 * `printQuote` function
***/
function printQuote(){
  //On click first function printQuote runs, and then getRandomQuote runs 
var newQuote= getRandomQuote();

const quote = document.querySelector(".quote");
const source = document.querySelector(".source");

quote.textContent = newQuote.quote;
source.innerText = newQuote.source;



// const div = document.createElement("div");
// div.classList.add("quote-box");

// const quoteContent = document.createElement("p");
// quoteContent.textContent = quote.quote;
// quoteContent.classList.add("quote")

// const quoteSource = document.createElement("p");
// quoteSource.textContent = quote.source;
// quoteSource.classList.add("source")

// div.appendChild(quoteContent);
// div.appendChild(quoteSource);

// document.write(div);


if(newQuote.citation){
  const citation = document.createElement("span")
  citation.classList.add("citation");
  citation.textContent=newQuote.citation;
  source.appendChild(citation);
}

if(newQuote.year){
  const year = document.createElement("span")
  year.classList.add("year");
  year.textContent=newQuote.year;
  source.appendChild(year)
}




 


//Update background with new random color
document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);