const path = require('path');

// console.log('Склеить участи пути', path.join(__dirname, '..', '..'));

// const fullpath = path.resolve('first', 'sec');
// console.log('Парсинг пути', path.parse(fullpath));

// ------------------------------

const siteURL = 'http://localhost:8080/users?id=5123';

const url = new URL(siteURL);

console.log(url);
