class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        console.log(this.carousel);
        this.leftBtn = this.carousel.querySelector(".left-button");
        console.log(this.leftBtn);
        this.rightBtn = this.carousel.querySelector(".right-button");
        this.carouselImages = this.carousel.querySelectorAll("img");
        this.currentIndex = 1;

        this.leftBtn.addEventListener("click", () => this.imageLeft());
    }

    imageLeft() {
        if (this.currentIndex == 1) {
            this.currentIndex = 4;
        } else {
            this.currentIndex--;
        }

        this.carouselImages.forEach(img => {img.style.display = "none"});
        this.carouselImages.forEach(img => {
            if (img.dataset.index == this.currentIndex) {
                img.style.display = "flex";
            }
        });

    }

}

let carousel = document.querySelector(".carousel");

new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although 
we will give you some hints:
    1. You will need to grab a reference to the carousel, 
    and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. 
    Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/