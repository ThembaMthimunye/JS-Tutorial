// // // // // const increaseBtn = document.getElementById("IncreaseBtn");
// // // // // const resertBtn = document.getElementById("resetBtn");
// // // // // const decreaseBtn = document.getElementById("decreaseBtn");
// // // // // const countLabel = document.getElementById("countLabel");
// // // // // let count = 0;

// // // // // increaseBtn.onclick = function() {
// // // // //     count++;
// // // // //     countLabel.textContent = count;
// // // // // }

// // // // // decreaseBtn.onclick = function() {
// // // // //     count--;
// // // // //     countLabel.textContent = count;
// // // // // }

// // // // // resertBtn.onclick=function(){
// // // // //     let count=0;
// // // // //     countLabel.textContent = count;
// // // // // }

// // // // // let random=Math.floor(Math.random()*100-50)
// // // // // +50;
// // // // // console.log(random);

// // // // // const randomBtn = document.getElementById("randomBtn");
// // // // // const countLabel = document.getElementById("countLabel");
// // // // // randomBtn.onclick = function () {
// // // // //   let random = Math.floor(Math.random() * 100 - 50) + 50;
// // // // //   countLabel.textContent = random;
// // // // // };

// // // // // let age=window.prompt("enter your age");
// // // // // if(age>=18){
// // // // //     console.log("you are too old for high school");
// // // // // }else{
// // // // //     console.log("please enter your real age");
// // // // // let isStudent=true;

// // // // // if(isStudent){
// // // // //     console.log("yes");
// // // // // }else{
// // // // //     console.log("No");
// // // // // }

// // // // // let age=window.prompt("How old are you");
// // // // // let isStudent=false;

// // // // // if(age>15){
// // // // //     console.log("You qualify for a license");
// // // // //     if(isStudent){
// // // // //         console.log("You have a licence")
// // // // //     }
// // // // //     else {
// // // // //         console.log("You dont have a licence")
// // // // //     }
// // // // // }else{
// // // // //     console.log("You have to be 16 and above")
// // // // // }

// // // // {
// // // //   /* <div>
// // // //     <div>
// // // //       <input type="checkbox" id="subBtn">
// // // //       <label for="">Subscribe</label>
// // // //     </div>
// // // //     <div>
// // // //       <input type="radio" id="visaBtn">
// // // //       <label for="">Visa</label>
// // // //     </div>
// // // //     <div>
// // // //       <input type="radio" id="masterBtn">
// // // //       <label for="">Mastercard</label>
// // // //     </div>
// // // //     <div>
// // // //       <input type="radio" id="paypalBtn">
// // // //       <label for="">PayPal</label>
// // // //     </div>
// // // //     <div>
// // // //       <button id="submitBtn">submit</button> */
// // // // }

// // // // //   const checkBox=document.getElementById("checkBox");
// // // // //   const visaBtn=document.getElementById("visaBtn");
// // // // //   const masterBtn=document.getElementById("masterBtn");
// // // // //   const paypalBtn=document.getElementById("paypalBtn");
// // // // //   const submitBtn=document.getElementById("submitBtn");
// // // // //   const subResult=document.getElementById("subResult");
// // // // //   const payResult=document.getElementById("payResult");

// // // // //   submitBtn.onclick = function () {

// // // // //     checkBox.checked ? subResult.textContent="You are subscribed":subResult.textContent="You are not subscribed"

// // // // //     if(visaBtn.checked){
// // // // //         payResult.textContent="You Do  have a visa";
// // // // //     }
// // // // //     else if(masterBtn.checked){
// // // // //         payResult.textContent="You do have a mastercard";
// // // // //     }
// // // // //     else if(paypalBtn.checked){
// // // // //         payResult.textContent="You do have a paypal";
// // // // //     }else
// // // // //     {
// // // // //         payResult.textContent="you must select a payment type"
// // // // //     }

// // // // //     }

// // // // let day = window.prompt("enter your day1");
// // // // day = Number(day);

// // // // switch (day) {
// // // //   case 1:
// // // //     console.log("today is monday");
// // // //     break;
// // // //   case 2:
// // // //     console.log("today is Tuesday");
// // // //     break;
// // // //   case 3:
// // // //     console.log("today is wednesday");
// // // //     break;
// // // //   case 4:
// // // //     console.log("today is Thursday");
// // // //     break;
// // // //   case 5:
// // // //     console.log("today is Friday");
// // // //     break;
// // // //   case 6:
// // // //     console.log("today is Saturday6");
// // // //     break;
// // // // }

// // // // let name = " Themba";
// // // // check = name.startsWith(" ");
// // // // console.log(name);

// // // // if (check) {
// // // //   window.alert("name cannot start with empty space");
// // // // } else {
// // // //   window.alert(`xap fede ${name}`);
// // // // }

// // // // let phoneNumber='079-021-1232';

// // // // phoneNumber=phoneNumber.replaceAll('-','*');
// // // // console.log(phoneNumber);

// // // name=window.prompt('Enter your full name');
// // // // let letter=name.slice(0,1)
// // // // letter=letter.toUpperCase();
// // // //  extra=name.slice(1);
// // // //  extra=extra.toLowerCase();

// // // //  let fullName=letter+extra;
// // // name=name.slice(0,1).toUpperCase()+name.slice(1).toLowerCase();
// // //  console.log(name);
// // let loggedIn = false;
// // let user = "";
// // let pass = "";

// // while (!loggedIn) {
// //   user = window.prompt("enter your user name");
// //   pass = window.prompt("enter your password");

// //  user === "themba" && pass === "12345"?console.log("you are logged in") : console.log("please provide the correct username and password");

// // }

// // for(let i =15; i>=1;i--)
// // {
// //   if(i==13){continue;}else { console.log(i);}
// // }

// // console.log("happy new year")

// let max = 100;
// let min = 1;
// let guess;
// running = true;
// let attempt = 0;
// // const random=Math.floor(Math.random()*(max-min+1))+min
// let random = Math.floor(Math.random() * max - min) + min;

// while (running) {
//   guess = window.prompt("please enter the guess number");
//   guess = Number(guess);

//   attempt++;
//   if (isNaN(guess)) {
//     window.alert("Please enter a valid number");
//   } else if (guess < min || guess > max) {
//     window.alert(`please enter a number ${min} - ${max}`);
//   } else {
//     if (guess < random) {
//       window.alert(`to low `);
//     } else if (guess > random) {
//       window.alert("to high");
//     } else {
//       window.alert("correct");
//       running = false;
//     }
//   }
// }
const textbox = document.getElementById("textbox");
const toFarhenheit = document.getElementById("toFarhenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFarhenheit.checked) {
    // result.textContent="Selected Farhenheit";
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + " Farhenheit (🤩)";
  } else if (toCelcius.checked) {
    temp = Number(textbox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + " Celcius (🤩)";
  } else {
    result.textContent = "Select a unit";
  }
}
