"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

console.log("");
console.log("Задание 3:");
const randomArray = [];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (let index = 0; index < 5; index++) {
    randomArray[index] = randomNumber(0, 9);
}
console.log(`${randomArray}`);

console.log(`1. Сумма элементов массива ${randomArray.reduce((sum, a) => sum + a, 0)}`);

console.log(`2. Минимальное значение в массиве ${Math.min(...randomArray)}`);
const newArray = [];
for (let index = 0; index < randomArray.length; index++) {
    if (randomArray[index] === 3) {
        newArray.push(index);
    }
}

console.log(`3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3. ${newArray}`);
