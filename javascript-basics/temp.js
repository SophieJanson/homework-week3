let userInputTemp;
let numberInputTemp;
let language;
let buttons = document.querySelectorAll('button[data-submit]');

for(var i; i < buttons.length; i++) {
  console.log(i);
  buttons[i].addEventListener("click", function(e) {

    console.log(e || "hello");
  })
}

if(userInputTemp < 4) {
    console.log("Parka weather");
} else if (userInputTemp > 4 && userInputTemp > 18) {
  console.log("Jacket weather");
} else {
  console.log("okay");
};

let evenOdd = numberInputTemp % 2 === 0 ? "even" : "odd";
//document.body.innerHTML = evenOdd;

//let judgement = language.toLowerCase() === "javascript" ? "I love" + language : "I kinda not love " + language.toUpperCase();
//document.body.innerHTML = `<h1>${judgement}</h1>`;
