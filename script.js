function observe(entries) {
    for(entry of entries){
        if(entry.isIntersecting) {
            entry.target.style.transform = "none"
            entry.target.style.opacity = "1"
        } else {
            entry.target.style.opacity = "0"
            let direction = entry.target.getAttribute("data-direction")
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


const intersectionObserver = new IntersectionObserver(observe, {
    threshold: 0.3
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