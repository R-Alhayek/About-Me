'use strict';
let score = 0;
let userName = prompt('please enter your name');


let study = prompt('Do you think I studied programming at univirsity (yes,no)?');
study = study.toLowerCase();
switch (study) {
    case 'yes':
        //console.log('wrong!');//
        alert('NAH, NOT REALLY!!');
        break;
    case 'y':
        //console.log('wrong!');//
        alert('NAH, NOT REALLY!!');
        break;
    case 'no':
        //console.log('true');//
        alert('CORRECT!');
        score++;
        break;
    case 'n':
        //console.log('true');//
        alert('CORRECT!');
        score++;

}
let age = prompt('Do you think I am above 26(yes,no)?');
age = age.toLowerCase();
switch (age) {
    case 'yes':
        //console.log('correct!');//
        alert('CORRECT!');
         score++;
        break;
    case 'y':
        //console.log('correct!');//
        alert('CORRECT!');
        score++;
        break;
    case 'no':
        //console.log('wrong');//
        alert('NAH, NOT REALLY!');
        break;
    case 'n':
        //console.log('wrong');//
        alert('NAH, NOT REALLY!');
        

}
let movies = prompt('Do you think I like horror movies(yes,no)?');
movies = movies.toLowerCase();
switch (movies) {
    case 'yes':
        //console.log('wrong');//
        alert('NAH, NOT REALLY!');
        break;
    case 'y':
        //console.log('wrong');//
        alert('NAH, NOT REALLY!!');
        break;
    case 'no':
        //console.log('true');//
        alert('CORRECT!');
        score++;
        break;
    case 'n':
        //console.log('true');//
        alert('CORRECT!');
        score++;
}
let cook = prompt('Do you think I can make good desserts(yes,no)?');
cook = cook.toLowerCase();
switch (cook) {
    case 'yes':
        //console.log('correct!');//
        alert('CORRECT!');
        score++;
        break;
    case 'y':
        //console.log('correct!');//
        alert('CORRECT!');
        score++;
        break;
    case 'no':
        //console.log('wrong');//
        alert('NAH, NOT REALLY!');
        break;
    case 'n':
        //console.log('wrong');//
        alert('NAH, NOT REALLY!');
}
let sing = prompt('Do you think I can sing well(yes,no)?');
sing = sing.toLowerCase();
switch (sing) {
    case 'yes':
        //console.log('wrong');//
        alert('NAH, NOT REALLY!');
        break;
    case 'y':
        //console.log('wrong');//
        alert('NAH, NOT REALLY!');
        break;
    case 'no':
        //console.log('true');//
        alert('CORRECT!');
        score++;
        break;
    case 'n':
        //console.log('true');//
        alert('CORRECT!');
        score++;
}

alert(`Hello, ${userName}. Glad to have you inside my website!`);

let favNumber = prompt('Guess my favorit number?/ You Only have 4 guesses and it\'s between 1 to 10');

for (let i = 0; i < 3; i++) {
    if (favNumber > 10) {
        favNumber = prompt('too high. Try again');
        console.log('wrong');
    } else if (favNumber < 10) {
        favNumber = prompt('too low. Try again');
        console.log('wrong');
    } else if (favNumber == 10) {
        alert('CORRECT!');
        console.log('true');
        score++;
        break;
    }
}

let city = ['paris','dubai','tokyo','rome'];
let favCity = prompt ('Guess what city I dream to visit?');
let dot = false;
for (let i=0; i<city.length; i++){
    if (favCity === city[i]){
        alert ('CORRECT!');
        console.log ('true');
        score++;
        dot = true;
        break;
    }
}
if (dot === false){
    favCity = prompt ('Try again!');
}

alert (`your score is ${score}`);