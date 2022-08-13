const banner = document.querySelector(".banner");
const navbarMobile = document.querySelector(".navbarMobile");
const body = document.querySelector("body");
const bars = document.querySelector(".fa-bars")
const xMark = document.querySelector(".fa-xmark")

let winWidth = window.innerWidth;
window.addEventListener("resize", () =>
    {
        if(window.innerWidth !== winWidth)
            {
                winWidth = window.innerWidth;
                banner.style.height = window.innerHeight;
            }
    })

banner.style.height = window.innerHeight;

const displayNone = () =>
    {
        if(navbarMobile.style.display !== "none")
            {
                navbarMobile.style.display = "none";
                body.classList.remove("stopScrolling");
                bars.style.display = "inline-block";
            }
        else
            {
                navbarMobile.style.display = "block";
                body.classList.add("stopScrolling");
                bars.style.display = "none";
            }
    };

bars.addEventListener("click", () =>
    {
        displayNone();
    });
xMark.addEventListener("click", () =>
    {
        displayNone();
    });