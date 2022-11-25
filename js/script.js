// Строгий режим
"use strict"

// Домашка JS "Основи синтаксису"

// Варіант №1 _________________________________
// console.log('Learn JS'); 
// вірно

// Варіант №2_________________________________
// console.log('JS')
// console.log('Learn')
// Вірно, але краще закінчувати команду ";"


// Варіант №3_________________________________
// console.log('JS') console.log('Learn')
// Не вірно, викличе помилку.
// Команди які пропичкються в один ряд мають закриватися ";"

// console.log('JS'); console.log('Learn');
// Вірний запис

// Варіант №4_________________________________
// console.log('Learn); Не вірни запис, все що відкрито має бути закритим

// console.log('JS'); Вірний запис


// Домашка JS (Змінні в JS. LET, CONST, VAR)"_________________________________

// Завдання 1 
/*
Придумай ім'я змінної для зберігання кольору очей користувача сайту
*/
// let userEyeColor = 'Green';
// console.log(userEyeColor);

// Завдання 2
/*
Об'яви дві змінні - user і userName.
Присвой значення "Вася" змінній userName.
Зкопіюй значення змінної userName в змінну user.
Виведи в консоль змінну user. Результат повинен бути Вася
*/
// let user;
// let userName;
// userName = 'Вася';
// user = userName;
// console.log(user);

// Завдання 3
/*
Який варіант або варіанти записані НЕ ВІРНО?
*/
// Варіант 1
// let user = 'Вася' let age = 36
// Запис не вірний, змінна має починатся з нового рядка і бажано зактнчувати ";"

// let user = 'Вася';
// let age = 36;
// Вірний запис


// Варіант 2
// let myage = 36;
// Запис не зовсім коректний, помилки не буде але ім'я змінної краще писати через lowerCamelCase (myAge)
// Варіант 3
// const BLOCK_SIZE = 14 + 50;
// Вірний запис

// Варіант 4
// const BLOCK_HEIGHT = 100;
// Вірний запис

// Варіант 5
/*
if (true) {
  var size = 15;
}
*/
// console.log(size);
// Вірний запис



// Домашка JS (Типи даних))"_________________________________

// Варіант 1
// let userAge = 36;
// let userInfo = "Freelancer ${userAge}";
// Цей запис не вірний, потрібно використовувати зворотні лапки.
// let userInfo = `Freelancer ${userAge}`;
// console.log(userInfo);
// Вірний запис


// Варіант 2
// let userHeight = 145 / 0;
// console.log(userHeight);
// Поверне не NaN, а Infinity


// Варіант 3
// let userName;
// console.log(typeof userName);
// Поверне тип данних не Null, а underfined

// Варіант 4
// let userAge = "45" / "8";
// console.log(typeof userAge);
// Тип даних number