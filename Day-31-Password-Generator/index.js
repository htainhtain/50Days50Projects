const generatePasswordForm = document.getElementById("generate-password");
const passwordDom = document.querySelector(".password");
const copyButtonDom = document.querySelector(".copy-button");
const passwordLength = generatePasswordForm.elements[0];
const upperCase = generatePasswordForm.elements[1];
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = generatePasswordForm.elements[2];
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = generatePasswordForm.elements[3];
const num = "0123456789";
const symbols = generatePasswordForm.elements[4];
const sym = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let password = "";

generatePasswordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    passwordLength.value,
    upperCase.checked,
    lowerCase.checked,
    numbers.checked,
    symbols.checked
  );
  generatePassword(
    passwordLength.value,
    upperCase.checked,
    lowerCase.checked,
    numbers.checked,
    symbols.checked
  );
});

const passwordType = (passwordTypeIndex) => {
  return passwordTypeIndex === 0
    ? upperCaseLetters.charAt(
        Math.floor(Math.random() * upperCaseLetters.length)
      )
    : passwordTypeIndex === 1
    ? lowerCaseLetters.charAt(
        Math.floor(Math.random() * lowerCaseLetters.length)
      )
    : passwordTypeIndex === 2
    ? num.charAt(Math.floor(Math.random() * num.length))
    : sym.charAt(Math.floor(Math.random() * sym.length));
};

const getTruePasswordTypes = (arr, value) => {
  let indexs = [],
    i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      indexs.push(i);
    }
  }
  return indexs;
};

const generatePassword = (length, upperCase, lowerCase, num, sym) => {
  password = "";
  const passwordTypes = [upperCase, lowerCase, num, sym];
  const indexes = getTruePasswordTypes(passwordTypes, true);
  let indexpasswordTypes = 0;

  for (let i = 0; i < length; i++) {
    if (indexpasswordTypes >= indexes.length) {
      indexpasswordTypes = 0;
    }
    if (upperCase && indexes[indexpasswordTypes] === 0) {
      password += passwordType(0);
    }
    if (lowerCase && indexes[indexpasswordTypes] === 1) {
      password += passwordType(1);
    }
    if (num && indexes[indexpasswordTypes] === 2) {
      password += passwordType(2);
    }
    if (sym && indexes[indexpasswordTypes] === 3) {
      password += passwordType(3);
    }
    indexpasswordTypes++;
  }
  passwordDom.innerHTML = `${password}`;
};

//copy to clipboard
copyButtonDom.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordDom.innerHTML);
  alert("Copied the text: " + passwordDom.innerHTML);
});
