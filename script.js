
// 1 Vazifa
let yosh = prompt("yoshingizni kiriting")
if(yosh < 18){
    alert("siz voyiga yetmagansiz")
}

else{
    alert("Siz voyiga yetmagansiz")
}

// 2 Vazifa
let son = prompt("xohlagan soningizni kiriting")

if (son, 100 % 2 === 1) {
    alert("juft son")
}
else {
     alert("toq son")
}


// 3 Vazifa
let a = Number(prompt("Birinchi sonni kiriting:"));
let b = Number(prompt("Ikkinchi sonni kiriting:"));

alert("Yig'indisi: " + (a + b));
alert("Ayirmasi: " + (a - b));
alert("Ko'paytmasi: " + (a * b));
alert("Bo'linmasi: " + (a / b));



// 4 Vazifa
let ism = prompt("Ismingizni kiriting:");

alert("Katta harflarda: " + ism.toUpperCase());

alert("Ismingiz uzunligi: " + ism.length);

alert("Birinchi harfi: " + ism[0]);




// 5 Vazifa
let student = {
    name: "Akrom",
    age: 14,
    course: "JavaScript",
    isActive: true
};

console.log(student);