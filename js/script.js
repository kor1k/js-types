// let a =123;
//
// let b = false;
//
// let c = [];
//
// console.log(a + "");  //cast in String from Num
// console.log(b + '');  //cast in boolean from Num                OR // console.log(String(a));
// console.log(c + '');  // cast in 'hui znaet vo chto' from Array


// let b = true;
// let c = false;
// let a = [];
// let a1 = [1,2,2,334];
// console.log(+b);
// console.log(b);
// console.log(+c);
// console.log(c);
// console.log(+a);
// console.log(a);
// console.log(+a1);
// console.log(a1);


// let a = '111.11aaaa22.22';
// console.log(+a);
// console.log(parseInt(a)); // выбирает только цыфру, когда он видет стрингу, то он её не хавает
// console.log(parseFloat(a)); // выбирает только цыфру, когда он видет стрингу, то он её не хавает
//
// console.log((12,1 * 3) * 2); // =6, spasibo JS. (ЦЫФРА ДО ЗАПЯТОЙ ИГНОРИРУЮТЬСЯ)
// console.log(2**5); // возведение в степень

// let deadline = +prompt('enter deadline in days');
// if (isNaN(deadline)){
//     alert(`u r studip`)
// } else {
//     alert(`deadline is ${deadline+11}`)
// }


// let number = prompt('enter ur number');

// console.log(`Full number is: ${'+38'+number}`);

// console.log(Math.round(Math.random()*10000)/100); // генератор XXX.XX  (0 to 100, with 2 numbers after ','


// let a = 123123;
//
// switch (a) {
//     case 3:
//         console.log('equals = 3');
//         break;
//     case 10:
//         console.log('equals = 10');
//         break;
//     default:
//         console.log('something else')
// }


// let rand = Math.round(Math.random()*100);
//
// switch (true) {
//     case (rand<50):
//         console.log('random is less than 30');
//         break;
//     case (rand>=30 && rand<50):
//         console.log('between 30 and 50');
//         break;
//     default:
//         console.log('random is more than 50')
// }


///////////////////////////////////////////////////////////////TASK/////////////////////////////////////////////////////////////////

// 1) prompt - номер телефона
// 2) номер должен == 10 и там не должно быть стринги


let phoneNumber = prompt('Enter phone number');
// let check = phoneNumber.length;
if (phoneNumber.length == 10 && !isNaN(+phoneNumber)) {
    console.log('Phone number is legit.')
}
else {
    console.log('Wrong phone number.')
}


// console.log(phoneNumber.length);