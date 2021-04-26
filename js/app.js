'use strict';

let userName = prompt('please enter your name');
let study = prompt('Do you think I studied programming at univirsity (yes,no)?');
study = study.toLowerCase();
switch (study) {
    case 'yes':
        console.log('correct!');
        alert('CORRECT!');
        break;
    case 'y':
        console.log('correct!');
        alert('CORRECT!');
        break;
    case 'no':
        console.log('wrong');
        alert('NAH, NOT REALLY!');
        break;
    case 'n':
        console.log('wrong');
        alert('NAH, NOT REALLY!');
        break;

}
