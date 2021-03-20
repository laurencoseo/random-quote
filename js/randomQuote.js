function buildQuote() {
    
  let randomNum = Math.floor(Math.random()*myQuotes.length);
  console.log(randomNum);
  // variable to store the HTML output
  const output = [];
  
  // add this question and its answers to the output
  output.push(
      `<div class="quote">
        ${myQuotes[randomNum].quote}
        <span class="author">- ${myQuotes[randomNum].author}</span>
      </div>`
  );
   
  // finally combine our output list into one string of HTML and put it on the page
  quoteContainer.innerHTML = output.join('');

  // if (myQuotes[randomNum].quote.length > 150) {
  //   document.getElementById("quote").style.fontSize = "36px";
  // }
}

function getColor() {
  let randomNum = Math.floor(Math.random()*myColors.length);
  // console.log(randomNum);
  let bgColor = myColors[randomNum];
  document.body.style.background = bgColor;
}

const quoteContainer = document.getElementById('quote');

const myColors = ["hsl(12, 100%, 79%)", "hsl(162, 72.05%, 67.8%)", "hsl(119, 55.98%, 70.47%)", "hsl(40, 100%, 80%)", "rgb(253, 236, 188)", "rgb(255, 213, 239)", "rgb(255, 213, 216)", "rgb(213, 228, 255)", "rgb(213, 255, 222)", "rgb(246, 255, 213)"];

const myQuotes = [
    {
      quote: '"Enjoy the process of being a work in progress."',
      author: "Unknown"
    },
    {
      quote: '"You miss 100% of the shots you don’t take. – Wayne Gretzky"',
      author: "Michael Scott"
    },
    {
      quote: '"Be brave enough to suck at something new."',
      author: "Unknown"
    },
    {
      quote: '"Do one thing every day that scares you."', 
      author: "Eleanor Roosevelt"
    },
    {
      quote: '"What is the point of being alive if you don’t at least try to do something remarkable?"',
      author: "John Green"
    },
    {
      quote: '"You are never too old to set another goal or to dream a new dream."',
      author: "C.S. Lewis"
    },
    {
      quote: '"The bravest people are the ones who don’t mind looking like cowards."',
      author: "T.H. White"
    },
    // {
    //   quote: '"For what it\'s worth: it\'s never too late or, in my case, too early to be whoever you want to be. There\'s no time limit, stop whenever you want. You can change or stay the same, there are no rules to this thing. We can make the best or the worst of it. I hope you make the best of it. And I hope you see things that startle you. I hope you feel things you never felt before. I hope you meet people with a different point of view. I hope you live a life you\'re proud of. If you find that you\'re not, I hope you have the strength to start all over again."',
    //   author: "Benjamin Button, The Curious Case of Benjamin Button"
    // },
    {
      quote: '"Be who you are and be that well."',
      author: "Saint Francis de Sales"
    },
    {
      quote: '"Why’d you have to go and make things so complicated?"',
      author: "Avril Lavigne"
    },
    {
      quote: '"I didn’t want  my sailboat to be in the driveway when I died."',
      author: "From Nomadland (2020)"
    },
    {
      quote: '"How are you going to spend your life? I’m not sure, but I do know I’m gonna live every minute of it."',
      author: "From Soul (2020)"
    },
    {
      quote: '"If I go, there\'s just no telling how far I\'ll go"',
      author: "Moana"
    },
    {
      quote: '"That the prison wasn’t the place, but the perspective."',
      author: "From Midnight Library by Matt Haig"
    },
    {
      quote: '"And I swear, in that moment, we were infinite."',
      author: "From Perks of Being a Wallflower by Stephen Chbosky"
    },
    {
      quote: '"To change one’s life, start immediately, do it flamboyantly, no exceptions."',
      author: "William James"
    },
    {
      quote: '"You shall love your crooked neighbor, with your crooked heart."',
      author: "W.H. Auden"
    },
    {
      quote: '"We’re all building our world, right now, in real time. Let’s build it better."',
      author: "From Shrill by Lindy West"
    },
    {
      quote: '"If I keep doing what I’m doing, there is a 100% chance that I’ll be unhappy. If I try something new, there’s a 50% chance I’ll be unhappy. Statistically, I should really just try something new."',
      author: "Vicky Tsai"
    },
    {
      quote: '"Tell me, what is it you plan to do / with your one wild and precious life?"',
      author: "From The Summer Day by Mary Oliver"
    },
    {
      quote: '"Be the change you wish to see in the world."',
      author: "Mahatma Gandhi"
    },
    {
      quote: '"If not now, then when?"',
      author: "Unknown"
    }
];

buildQuote();
getColor();
