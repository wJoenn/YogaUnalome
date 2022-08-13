const banner = document.querySelector(".banner");

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