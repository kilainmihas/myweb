const passwordEl = document.querySelector("#password");
const showTimeEl = document.querySelector(".showtime");
const lengthEl = document.getElementById("length");
const numberlengthEl = document.getElementById("number-length");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("number");
const specialEl = document.getElementById("special");
const resultEl = document.querySelector(".result");

let confirm0 = document.querySelector("#confirm");
let confirm1 = document.querySelector("#confirm1");
let confirm2 = document.querySelector("#confirm2");


function getTime() {
    let date = new Date();
    //取0-10個字元
    let day = date.toISOString().substring(0, 10);
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();

    showTimeEl.textContent = `${day} :${hour} :${minute} :${sec}`;

    setTimeout("getTime()", 1000); // setTimeout("函式",毫秒) 1000毫秒=1秒
    console.log(date.toDateString());
}

   
function generate() {
    let long = 0;
        if (numberlengthEl.value != 0) {
            long = numberlengthEl.value;
        } else {
            long = lengthEl.value;
        }
        let password = '';
        let characters = 'abcdefghijklmnopqrstuvwxyz';

        if (confirm0.checked){
            characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
        }
        if (confirm1.checked){
            characters+= '0123456789';
        }
        if (confirm2.checked){
            characters+= '!@#$%^&*()_~';
        }

        for (let i =0 ; i< long; i++){
            password += characters.charAt(Math.floor(Math.random()*characters.length));
        }
        
        resultEl.textContent = "Your password: " + password;
    }