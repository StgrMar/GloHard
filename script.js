'use strict'

//lesson03
// let lang = confirm('Вывести дни на русском языке?');

// if (lang == true)  {
//     alert('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье')
// } else if (lang == false) {
//     alert('Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday')
// };
// console.log(lang)

//  switch(lang) {
//     case true:
//         alert('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
//         break;
    
//     case false:
//         alert('Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday');
//         break;
//  };
// console.log(lang);

// let days = {
//     true: ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
//     false: ['Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday'],
// };

// alert(days[lang]);
// console.log(lang)

// let namePerson = prompt('Введите имя', 'Артем');

// let nameFromPrompt;
// nameFromPrompt = namePerson === 'Артем' ? 'Директор' : namePerson === 'Алекс' ? 'Преподаватель' : 'студент';
// alert(namePerson + " " + nameFromPrompt)

// lesson04

let lang = prompt('Введите текст:', ' текст ');


function langPrompt(a) {
    console.log(typeof a);
    if (typeof a !== 'string') {
        alert('Введите текст!');
        return
    };

    if (a.length >= 30) {
        return console.log(a.trim().substring(0, 30) + '...');
    } else {
        return console.log(a.trim());

    }
     
};
langPrompt(lang);


