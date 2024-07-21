const lowercaseLetters= "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers ="0123456789";
const symbols = "!@#$^&*_+={}[]\\|;':\",.?/<>;"


const lengthEl =document.getElementById("length");
const lowercaseEl =document.getElementById("lowercase");
const uppercaseEl=document.getElementById("Uppercase");
const numbersEl =document.getElementById("Numbers");
const SymbolsEl =document.getElementById("Symbols");
const generateEl =document.getElementById("generate");
const passwordEl =document.getElementById("password");

generateBtn.addEventListener("click",function(){

 const length = lengthEl.value;
 let characters = '';
 let password = '';

 if(lowercaseEl.checked){
    characters +=lowercaseLetters
 }

 if(uppercaseEl.checked){
    characters+= uppercaseLetters
 }
 if(numbersEl.checked){
    characters+= numbers;
 }
 if(SymbolsEl.checked){
    characters+= symbols;
 }

 for( let i=0; i<length;i++)
 {
    password+= characters.charAt(Math.floor(Math.random()*characters.length));
 }
 passwordE1.value = password;

});