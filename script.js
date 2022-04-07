function observe(entries) {
    for(entry of entries){
        if(entry.isIntersecting) {
            const name = entry.target.className
            if(name !== "project") {
                entry.target.style.transform = "none"
                entry.target.style.opacity = "1"
            }
        } else {
            const name = entry.target.className
            let direction = entry.target.getAttribute("data-direction")
            if(name !== "project") {
                entry.target.style.opacity = "0"
            }
            if(direction==="right") {
                entry.target.style.transform = "translateX(30px)"
            } else if(direction === "top") {
                entry.target.style.transform = "translateY(-30px)"
            } else if(direction === "bottom") {
                entry.target.style.transform = "translateY(30px)"
            } else if(direction === "left") {
                entry.target.style.transform = "translateX(-30px)"
            }
        }
    }
}


let windowWidth = window.innerWidth;

const intersectionObserver = new IntersectionObserver(observe, {
    threshold: windowWidth >= 1280 ? 0.3 : 0.1
})



const elements = [
    ...document.querySelectorAll("section"),
    ...document.querySelectorAll("div"),
    document.querySelector("footer"),
    document.querySelector("header")
]



for(obj of elements) {
    let direction = obj.getAttribute("data-direction")
    if(direction) {
        obj.classList.add(`fade-${direction}`)
    } 
    intersectionObserver.observe(obj)
}