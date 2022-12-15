// EXERCISE #1

let write = prompt("So'z kiriting! (Teskari chiqaradi)")
let newString = "";

for (let i = write.length - 1; i >= 0; i--) {
    newString += write[i];
}
alert(newString);


// // EXERCISE #2
let n = +prompt("Son kiriting (n songacha bo'lgan sonlarni bir biriga qo'shib chiqadi!)");
let sum = 0
for (let i = 1; i <= n; i++) {
    sum = sum + i
}
alert(sum);


// EXERCISE #3

let number = prompt("Son kiriting (Yig'indisini chiqarib beradi)");
let newNumber = 0;

for (let i = 0; i < number.length; i++) {
    newNumber = newNumber + Number(number[i]);
}if (isFinite(newNumber)) {
    number += newNumber;
    alert(newNumber);
} else {
    alert("Iltimos faqat son kiritng!!!");
};