let sidebar=document.querySelector(".sidebar");
let navlink=document.querySelector(".nav-link");

sidebar.onclick=function()
{
    sidebar.classList.toggle("active");
}

navlink.onclick=function()
{
    sidebar.classList.toggle("active");
}