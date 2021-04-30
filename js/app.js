"use strict";
/*let score = 0;
let userName = prompt("please enter your name");

function askStudy() {
  let study = prompt(
    "Do you think I studied programming at univirsity (yes,no)?"
  );
  study = study.toLowerCase();
  switch (study) {
    case "yes":
      //console.log('wrong!');//
      alert("NAH, NOT REALLY!!");
      break;
    case "y":
      //console.log('wrong!');//
      alert("NAH, NOT REALLY!!");
      break;
    case "no":
      //console.log('true');//
      alert("CORRECT!");
      score++;
      break;
    case "n":
      //console.log('true');//
      alert("CORRECT!");
      score++;
  }
}

function askAge() {
  let age = prompt("Do you think I am above 26(yes,no)?");
  age = age.toLowerCase();
  switch (age) {
    case "yes":
      //console.log('correct!');//
      alert("CORRECT!");
      score++;
      break;
    case "y":
      //console.log('correct!');//
      alert("CORRECT!");
      score++;
      break;
    case "no":
      //console.log('wrong');//
      alert("NAH, NOT REALLY!");
      break;
    case "n":
      //console.log('wrong');//
      alert("NAH, NOT REALLY!");
  }
}

function askMovies() {
  let movies = prompt("Do you think I like horror movies(yes,no)?");
  movies = movies.toLowerCase();
  switch (movies) {
    case "yes":
      //console.log('wrong');//
      alert("NAH, NOT REALLY!");
      break;
    case "y":
      //console.log('wrong');//
      alert("NAH, NOT REALLY!!");
      break;
    case "no":
      //console.log('true');//
      alert("CORRECT!");
      score++;
      break;
    case "n":
      //console.log('true');//
      alert("CORRECT!");
      score++;
  }
}
function askCook() {
  let cook = prompt("Do you think I can make good desserts(yes,no)?");
  cook = cook.toLowerCase();
  switch (cook) {
    case "yes":
      //console.log('correct!');//
      alert("CORRECT!");
      score++;
      break;
    case "y":
      //console.log('correct!');//
      alert("CORRECT!");
      score++;
      break;
    case "no":
      //console.log('wrong');//
      alert("NAH, NOT REALLY!");
      break;
    case "n":
      //console.log('wrong');//
      alert("NAH, NOT REALLY!");
  }
}

function askSing() {
  let sing = prompt("Do you think I can sing well(yes,no)?");
  sing = sing.toLowerCase();
  switch (sing) {
    case "yes":
      //console.log('wrong');//
      alert("NAH, NOT REALLY!");
      break;
    case "y":
      //console.log('wrong');//
      alert("NAH, NOT REALLY!");
      break;
    case "no":
      //console.log('true');//
      alert("CORRECT!");
      score++;
      break;
    case "n":
      //console.log('true');//
      alert("CORRECT!");
      score++;
  }
}

alert(`Hello, ${userName}. Glad to have you inside my website!`);

function askFavnumber() {
  let favNumber = Number(
    prompt(
      "Guess my favorit number?/ You Only have 4 guesses "
    )
  );
  let attempt = 0;
  for (let i = 0; i < 3; i++) {
    if (favNumber > 10) {
      favNumber = prompt("too high. Try again");
      attempt++;
      console.log("wrong");
    } else if (favNumber < 10) {
      attempt++;
      favNumber = prompt("too low. Try again");
      console.log("wrong");
    } else if (favNumber == 10) {
      alert("CORRECT!");
      console.log("true");
      score++;
      break;
    }
  }
  if (attempt >= 3) {
    alert("The correct answer is 10");
  }
}

function askCity() {
  let attempt = 0;
  let city = ["paris", "dubai", "tokyo", "rome"];
  let favCity = prompt("Guess what city I dream to visit? You have 6 attempts").toLowerCase();
  let dot = false;
  for (let i = 0; i < 5; i++) {
    if (city.indexOf(favCity) != -1) {
      alert("CORRECT!");
      console.log("true");
      score++;
      break;
    } else {
      attempt++;
      favCity = prompt("Try again! One more attempt to go").toLowerCase();
      console.log("wrong");
    }
   
  }
  if (attempt >= 5) {
    favCity = alert(`I dream to visit ${city}`);
  }
}
askStudy();
askAge();
askMovies();
askCook();
askSing();
askFavnumber();
askCity();

alert(`Your score is ${score}`);
