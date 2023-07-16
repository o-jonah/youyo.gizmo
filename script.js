let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
};

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
};


loginBtn.onclick = () => {
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};


let accountForm = document.querySelector('.account-form')

document.querySelector('#account-btn').onclick = () =>{
    accountForm.classList.toggle('active');
}

document.querySelector('#close-form').onclick = () =>{
    accountForm.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,
    grabCursor:true,
  });


  var swiper = new Swiper(".home-courses-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,
    grabCursor:true,
  });


  var swiper = new Swiper(".teachers-slider", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".icon-container", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
