const navBtn = document.querySelector(".nav_button")
const navList =  document.querySelector(".nav_list")

navBtn.addEventListener('click',()=>{
    navBtn.classList.toggle("active");
    navList.classList.toggle("active");
})
