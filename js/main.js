/*Shopping */
let shoppingbtn = document.getElementById("cart-btn")
let shopping = document.getElementById("shopping")

/*Search Box */

let searchbtn = document.getElementById("search-btn");
let searchbox = document.getElementById("searchbox");

/*Navbar */
let menubtn = document.getElementById("menu-btn");
let navbar = document.getElementById("navbar");


shoppingbtn.addEventListener("click",function(){
    shopping.classList.toggle("active");
    searchbox.classList.remove("active");
    navbar.classList.remove("active");
});

searchbtn.addEventListener("click",function(){
    searchbox.classList.toggle("active");
    shopping.classList.remove("active");
    navbar.classList.remove("active");
})

menubtn.addEventListener("click",function (){
    navbar.classList.toggle("active");
    shopping.classList.remove("active");
    searchbox.classList.remove("active");
});


window.onscroll = () =>{
    navbar.classList.remove('active');
    shopping.classList.remove('active');
    searchbox.classList.remove('active');
}