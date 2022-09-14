const inputEl = document.getElementById("inpPassword");
const btnCopy = document.getElementById("btnCopy");
const btnGenerate = document.getElementById("btnGenerate");
let passLenght = document.querySelector('#passLenght');


inputEl.addEventListener( 'keypress', (e) => {
  e.preventDefault();
});

inputEl.addEventListener( 'focus', (e) => {
  navigator.clipboard.writeText(inputEl.value)

});

btnGenerate.addEventListener( 'click', (e) => {
  let password = generatePassword(passLenght.value);
  inputEl.value = password;
});

btnCopy.addEventListener('click', (e) => {
  inputEl.select();
  inputEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputEl.value)
});

function generatePassword(passLenght) {
  const number = '0123456789';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const symbols = '!@#$%^&*()_+-=[]{}?<>'
  const allChars = number + upper + lower + symbols;
  let randomString = '';
    for (let i = 0; i < passLenght; i++) {
      let random = Math.floor(Math.random() * allChars.length)
      randomString += allChars[random];
    }
  return randomString;
};



