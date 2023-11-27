const car=['maruti suzuki','volvo','tata','newcar'];
let text = '';
for(let i = 0; i < car.length; i++){
    text += car[i] + '<br>'
};
document.getElementById('demo').innerHTML = text;
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;