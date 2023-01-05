//Landing Page Animations
gsap.registerPlugin(SplitText)

const splitAnim = () => {
	const split = new SplitText('.landing-info h1, .landing-info h2, .landing-info h3',  {type: "chars, words", position: "absolute"})

	gsap.from(split.chars, {autoAlpha: 0, opacity: 0, x: 100, stagger: 0.02, delay: 1.2 })
	gsap.from('.logo img', {y: -200, duration: 1})
	gsap.from('.cart-items', {y: -200, duration: 1}, '< 0.5')
}


window.onload = () => {
	splitAnim()
}


//On The Go Animations
const air = gsap.timeline()
.from('.in-flight-info h2', {autoAlpha: 0, x: -1000, duration: 1})
.from('.in-flight-info h3', {autoAlpha: 0, x: 1000, duration: 1})

ScrollTrigger.create({
    animation: air,
    trigger: '.in-flight',
    start: 'top 50%',
    end: '100%',
})


//Image Slider Animations
let images = gsap.utils.toArray(".image-sliders img")
let tl = gsap.timeline({repeat: -1}) 

function init() {
	gsap.set(".image-sliders", {autoAlpha:1}) 
    gsap.set(images, {opacity: 0})
	
	images.forEach(function(image, index) {
		tl.set(image, {opacity: 1})
        .fromTo(image, {filter: "contrast(0.5) brightness(6)"}, {filter: "contrast(1) brightness(1)", duration: 3})
        .to(image, {filter:"contrast(0.5) brightness(6)", duration:0.2, ease:"power2.in"}, "+=0.8")
	})}

init();

const sliders = gsap.from('.image-slider h1', {autoAlpha: 0, scale: 10, opacity: 0,stagger: 0.8})

ScrollTrigger.create({
	animation: sliders,
	trigger: '.image-slider',
	start: 'top 60%',
	end: '100%',
})

//Showcase Section Animations
const showcase1 = gsap.timeline()
showcase1
.from('.showcase-img1', {x: -1000, y: -1000, duration: 1})
.from('.info1', {x: 1000, y: 1000, duration: 1}, '<')

ScrollTrigger.create({
	animation: showcase1,
	trigger: '.showcase h1',
	start: 'top 35%',
	end: '100%',
})

const showcase2 = gsap.timeline()
showcase2
.from('.showcase-img2', {autoAlpha: 0, x: 1000, y: 1000, duration: 1})
.from('.info2', {autoAlpha: 0, x: -1000, y: -1000, duration: 1}, '<')

ScrollTrigger.create({
	animation: showcase2,
	trigger: '.showcase-img1',
	start: 'bottom',
	end: '100%',
})

const showcase3 = gsap.timeline()
showcase3
.from('.showcase-img3', {autoAlpha: 0, x: 1000, y: 1000, duration: 1})
.from('.info3', {autoAlpha: 0, x: -1000, y: -1000, duration: 1}, '<')

ScrollTrigger.create({
	animation: showcase3,
	trigger: '.showcase-img2',
	start: 'middle 60%',
	end: '100%',
})


// Gallery Section Animations
const gallery = gsap.timeline()

gallery
.from('.top', {x: -1000, y: -1000, autoAlpha: 0, duration: 1, stagger: 0.3})
.from('.side', {y: -1000, y: -1000, autoAlpha: 0, duration: 1, stagger: 0.3}, '<')
.from('.normal', {x: 1000, y: 1000, autoAlpha: 0, duration: 1, stagger: 0.3}, '<')

ScrollTrigger.create({
    animation: gallery,
    trigger: '.images-heading',
    start: 'top 50%',
    end: '100%',
})

//Gallery Section Popup Animations
const galleryImages = document.querySelectorAll('.gallery img')
const popupImages = document.querySelector('.popup-image')
const popup = document.querySelector('.popup-image img')
const close = document.querySelector('.popup-image span')
const popupButtons = document.querySelectorAll('.cart-button')

galleryImages.forEach((image) => {
	image.addEventListener('click', () => {
		popupImages.style.display = 'block';
		document.querySelector('.popup-image img').src = image.getAttribute('src')
		gsap.from(popup, {y: -1000, duration: 0.7})
		gsap.from('.popup-info', {y: 100, duration: 0.7})
	})
})

close.addEventListener('click', () => {
	popupImages.style.display = 'none';
})

//Checkout Question Popup Animation
popupButtons.forEach((button) => {
	button.addEventListener('click', () => {
		popupImages.style.display = 'none';
	})
})

//Cart 
const cartCount = document.querySelector('.cart-count')
const cart1 = document.querySelector('.yes')
const values = document.querySelectorAll('.value')

let cartNumber = 0

cart1.addEventListener('click', () => {
	cartNumber += 1
	cartCount.innerHTML = cartNumber
})