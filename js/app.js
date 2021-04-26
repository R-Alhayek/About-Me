'use strict';

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
        break;
    case 'n':
        //console.log('true');//
        alert('CORRECT!');
        

}
let age = prompt('Do you think I am above 26(yes,no)?');
age = age.toLowerCase();
switch (age) {
    case 'yes':
        //console.log('correct!');//
        alert('CORRECT!');
        break;
    case 'y':
        //console.log('correct!');//
        alert('CORRECT!');
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
        break;
    case 'n':
        //console.log('true');//
        alert('CORRECT!');
}
let cook = prompt('Do you think I can make good desserts(yes,no)?');
cook = cook.toLowerCase();
switch (cook) {
    case 'yes':
        //console.log('correct!');//
        alert('CORRECT!');
        break;
    case 'y':
        //console.log('correct!');//
        alert('CORRECT!');
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
        break;
    case 'n':
        //console.log('true');//
        alert('CORRECT!');
}

alert(`Hello, ${userName}. Glad to have you inside my website!`);