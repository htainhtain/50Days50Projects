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
  if (passwordTypeIndex === 0) {
    return upperCaseLetters.charAt(
      Math.floor(Math.random() * upperCaseLetters.length)
    );
  } else if (passwordTypeIndex === 1) {
    return lowerCaseLetters.charAt(
      Math.floor(Math.random() * lowerCaseLetters.length)
    );
  } else if (passwordTypeIndex === 2) {
    return num.charAt(Math.floor(Math.random() * num.length));
  } else {
    return sym.charAt(Math.floor(Math.random() * sym.length));
  }
};

const generatePassword = (length, upperCase, lowerCase, num, sym) => {
  passwordIndex = 0;
  password = "";
  for (let i = 0; i < length; i++) {
    if (passwordIndex === 4) {
      passwordIndex = 0;
    }
    if (upperCase && passwordIndex === 0) {
      password += passwordType(passwordIndex);
    }
    if (lowerCase && passwordIndex === 1) {
      password += passwordType(passwordIndex);
    }
    if (num && passwordIndex === 2) {
      password += passwordType(passwordIndex);
    }
    if (sym && passwordIndex === 3) {
      password += passwordType(passwordIndex);
    }
    passwordIndex++;
  }
  console.log(password);
  passwordDom.innerHTML = `${password}`;
};

//copy to clipboard
copyButtonDom.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordDom.innerHTML);
  alert("Copied the text: " + passwordDom.innerHTML);
});
