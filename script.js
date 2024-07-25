let search_form=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    search_form.classList.toggle('active');
    shopping_cart.classList.remove('active');
    login_form.classList.remove('active');
    navbar.classList.remove('active')
}

let shopping_cart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shopping_cart.classList.toggle('active');
    search_form.classList.remove('active');
    login_form.classList.remove('active');
    navbar.classList.remove('active');
}

let login_form=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    login_form.classList.toggle('active');
    search_form.classList.remove('active');
    shopping_cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    login_form.classList.remove('active');
    search_form.classList.remove('active');
    shopping_cart.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}
