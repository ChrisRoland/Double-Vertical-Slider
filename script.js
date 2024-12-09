const sliderContainer = document.querySelector(".slider-container")
const slideLeft = document.querySelector(".left-slide")
const slideRight = document.querySelector(".right-slide")
const downButton = document.querySelector(".down-button")
const upButton = document.querySelector(".up-button")
const slidesLenght = slideRight.querySelectorAll("div").length

let activeSlideIdx = 0

slideLeft.style.top = `-${(slidesLenght - 1) * 100}vh`

downButton.addEventListener("click", () => changeSlide("down"))
upButton.addEventListener("click", () => changeSlide("up"))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    if(direction === "up") {
        activeSlideIdx++
        if(activeSlideIdx > slidesLenght - 1) {
            activeSlideIdx = 0
        }
    } else if (direction === ("down")) {
        activeSlideIdx--
        if(activeSlideIdx < 0) {
            activeSlideIdx = slidesLenght - 1;
        }
    }

    slideLeft.style.transform = `translateY(${activeSlideIdx * sliderHeight}px)`
    slideRight.style.transform = `translateY(-${activeSlideIdx * sliderHeight}px)`
}