var quoteArray = [
  {
    content:
      'We realize the importance of our voices only when we are silenced.',
    author: 'Malala Yousafzai',
  },
  {
    content:
      'If it’s a good idea go ahead and do it. It’s much easier to apologize than it is to get permission.',
    author: 'Grace Hopper',
  },
  {
    content: 'What makes you different or weird, thats your strength.',
    author: 'Meryl Streep',
  },
  {
    content: 'I’m not afraid of storms, for I’m learning to sail my ship.',
    author: 'Louisa May Alcott',
  },
  {
    content: 'Power is not given to you. You have to take it.',
    author: 'Beyoncé Knowles',
  },
  {
    content:
      'Don’t feel stupid if you don’t like what everyone else pretends to love.',
    author: 'Emma Watson',
  },
  {
    content:
      "What a wonderful thought it is that some of the best days of our lives haven't even happened yet.",
    author: 'Anne Frank',
  },
  {
    content: 'Be less curious about people and more curious about ideas.',
    author: 'Marie Curie',
  },
  {
    content:
      'At the end of the day, we can endure much more than we think we can.',
    author: 'Frida Kahlo',
  },
  {
    content: 'Nothing has really happened until it has been described.',
    author: 'Virginia Woolf',
  },
  {
    content:
      'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.',
    author: 'Harriet Tubman',
  },
];

//grab html elements
var button = document.getElementById('quote-button'),
  quote = document.getElementById('quote'),
  author = document.getElementById('quote-author'),
  tweet = document.getElementById('tweet'),
  random;

//Generate a Random Quote
window.onload = randomQuote;
button.addEventListener('click', randomQuote);

//run the function so there are no double buttons happening
tweetQuote();

//random quote function
function randomQuote() {
  //get a random number to pick a random quote object
  random = Math.floor(Math.random() * quoteArray.length);
  //get that random quote's content
  quote.innerHTML = quoteArray[random].content;
  //get that random quote's author
  author.innerHTML = '&mdash; ' + quoteArray[random].author;

  //Tweet that new generated quote
  tweetQuote();
}

//Dynamically Generate Content + Button
function tweetQuote() {
  var quoteShort = quote.innerHTML,
    quoteShortAuthor = author.innerHTML.substr(2).trim(),
    msg = '';

  //are there two tweet buttons? also from http://jsfiddle.net/LEBz8/1/
  var elem = document.getElementById('twitterbutton');
  if (elem !== null) {
    elem.parentNode.removeChild(elem);
  }

  //cut the message to fit the 140 length + leave some extra
  if (quoteShort.length + quoteShortAuthor.length <= 90) {
    msg = '"' + quoteShort + '" by ' + quoteShortAuthor;
  } else {
    msg = '"' + quoteShort.substr(0, 65) + '[...]" by ' + quoteShortAuthor;
  }

  //select the button using its class reference https://bit.ly/221t0Hw
  var tweetDiv = document.querySelector('.twitter-share-button');

  //make a new twitter button to dynamically generate stuff http://jsfiddle.net/LEBz8/1/
  var link = document.createElement('a');

  //set attributes for new button
  link.setAttribute('href', 'https://twitter.com/share');
  link.setAttribute('class', 'twitter-share-button');
  link.setAttribute('id', 'tweet');
  link.setAttribute('data-text', msg);
  link.setAttribute('data-via', 'littleblacksmth');
  link.setAttribute('data-size', 'large');

  //replace the button for this one
  tweetDiv.parentNode.replaceChild(link, tweetDiv);

  //load twitter -- important
  twttr.widgets.load();
}

!(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, 'script', 'twitter-wjs');
