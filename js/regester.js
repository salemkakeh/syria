

let checkbox = document.getElementById("check");
let h2 = document.querySelector("section .move h2");
let loginButton = document.getElementById("login-button");
let regesterButton = document.getElementById("c-link-creat-acount");
let x = 0;

function change() {
  let fullName       = document.getElementById("c-full-name");
  let phone          = document.getElementById("c-phone");
  let link           = document.getElementById("c-link");
  let regesterButton = document.getElementById("c-link-creat-acount");
  let submit         = document.querySelectorAll("section form .sub");



  if(checkbox.checked && x == 1) {
    h2.innerText = "انشاء حساب كـ";
    x = 0;
  } else {
    x = 1;
    h2.innerText = "تسجيل كـ";
  }

  for(let i = 0; i < submit.length ; i++ )
    submit[i].classList.toggle("active");

  fullName.classList.toggle("active");
  phone.classList.toggle("active");
  link.classList.toggle("active");
  regesterButton.classList.toggle("active");
}



loginButton.addEventListener("click" , change);
regesterButton.addEventListener("click" , change);




function switch_forms() {
  let checkbox = document.getElementById("check");
  let forms = document.querySelectorAll("section form");

  for(let i = 0; i < forms.length ; i++ ) {
    forms[i].classList.toggle("active");
  }

  if(!checkbox.checked) {
    h2.innerText = "تسجيل كـ";
  } else {
    if(x != 1) {
      h2.innerText = "انشاء حساب كـ";
    } 
  }

  // h2.classList.toggle("active");
}

checkbox.addEventListener("click", switch_forms);
