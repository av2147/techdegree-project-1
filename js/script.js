// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// this holds an array of quotes

var quotes =[
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    source: "H. Jackson Brown, Jr.",

  },

  {
    quote: "Look deep into nature, and then you will understand everything better.",
    source: "Albert Eienstien",
  },

  {
    quote: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
    source: "Abraham Lincoln"
  },

  {
    quote: "The secret of getting ahead is getting started.",
    source: "Mark Twain"
  },

  {
    quote: "Never find fault with the absent.",
    source: "Alexander Pope"
  }
];

// gets random qoute frome the quotes variable and returns value

function getRandomQuote (){
  var famousQuotes;
  famousQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    return famousQuotes;
}

// prints qoute to the document

function printQuote(){
  var randomQuote = getRandomQuote();

  var html = '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source + '</p>';

  if (randomQuote.citation){

    html += '<span class="citation">' + randomQuote.citation + '</span>';

  }

  if (randomQuote.year) {
  html += '<span class="year">' + randomQuote.year + '</span>';

    }


  document.getElementById('quote-box').innerHTML = "";
  document.getElementById('quote-box').innerHTML = html;

}
