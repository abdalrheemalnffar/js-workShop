const regForm = document.querySelector("#registration-form");
const regFormBtn = document.querySelector("#registration-form [type='submit']");
const regFormInputs = document.querySelectorAll("#registration-form input");

regFormBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let userData = {};
  const formData = new FormData(regForm);

  for (const input of formData) {
    userData = { [input[0]]: input[1], ...userData };
  }
  console.log(userData);
});

// [] can use in forEach else nooo
// forEach cant make reuturn
regFormInputs.forEach((input) => {
  console.log(input);
  input.addEventListener("change", function () {
    const errerMessage = document.querySelector(`#error-${this.name}`);
    const displayPimage = document.querySelector("#display-personalImage");
    errerMessage.innerHTML = "";

    const regexEmail = /^[^\s@]+@[^\s@]+\.+[^\s@]+$/;
    // console.log(this.name , this.value);
    // if(this.name === "userEmail" && !this.value.includes("@gmail.com")){
    if (this.name === "userEmail" && !regexEmail.test(this.value)) {
      console.log("not valid");
      errerMessage.innerHTML = "Email not Valid";
    }
    if (this.name === "userPassword" && !this.value.length < 8) {
      console.log(" password not valid");
      errerMessage.innerHTML = "password not Valid";
    }
    if (this.name === "userFiles" && !this.files[0].type.includes("image")) {
      console.log(this.files[0]);
      errerMessage.innerHTML = "image  not Valid";
      displayPimage.src = "";
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(this.files[0]);
      reader.onload = (e) => {
        displayPimage.src = e.target.result;
      };
    }
  });
});
// console.log();

// regFormInputs.map((input)=>{
//     console.log(input);
//     return input *2
// })
// console.log();
