const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImg;
const showNextImg = () =>{
    if (currentImg === THUMBNAILS.length - 1) {
        currentImg = 0;
    } else {
        currentImg++;
    }
    POPUP_IMG.src = THUMBNAILS[currentImg].src;
};

const showPreviousImg = () =>{
    if (currentImg === 0) {
        currentImg = THUMBNAILS.length - 1;
    } else {
        currentImg--;
    }
    POPUP_IMG.src = THUMBNAILS[currentImg].src;
};

const closePopup = () => {
    POPUP.classList.add("fadeout");
    setTimeout(() => {
        POPUP.classList.add("hidden");
        POPUP.classList.remove("fadeout");
    }, 300);
};


THUMBNAILS.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (e)=> {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        currentImg = index;
    });
});

POPUP_CLOSE.addEventListener("click", closePopup);

ARROW_RIGHT.addEventListener("click", showNextImg);
ARROW_LEFT.addEventListener("click", showPreviousImg);


document.addEventListener("keydown", (e) => {
    if (!POPUP.classList.contains("hidden")){
        if (e.code === "ArrowRight" || e.keyCode === 39) {
            showNextImg();
        }
        if (e.code ==="ArrowLeft" || e.keyCode === 37) {
            showPreviousImg();
        }
        if (e.code ==="Escape" || e.keyCode == 27) {
            closePopup(); 
        }
    }
});
