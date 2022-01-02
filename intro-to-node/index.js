//jshint esversion:6

// // var creates cariable can be changed, const creates constants cannot change
// const fs = require('fs');
// // import fs, { fstat } from 'fs';
// fs.copyFileSync("file1.txt","file2.txt");



const superheroes = require('superheroes');
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
var randSuperHero = superheroes.random();
console.log(randSuperHero);