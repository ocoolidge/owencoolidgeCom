let slideShow = document.getElementById("show")
let slides = slideShow.children
let left = document.getElementById("left")
let right = document.getElementById("right")
let currentSlide = Math.floor(Math.random()*slides.length)

console.log(currentSlide)
slides[currentSlide].style.display = "block"
slides[currentSlide].style.zIndex = 50

function slide(evt){
	slides[currentSlide].style.display = "none"
	slides[currentSlide].style.position = "absolute"
	if(evt.currentTarget.id == "right"){
		if(currentSlide == slides.length-1)
			currentSlide = 0
		else
			currentSlide++
	}if(evt.currentTarget.id == "left"){
		if(currentSlide == 0)
			currentSlide = slides.length-1
		else
			currentSlide--
	}
	slides[currentSlide].style.display = "block"
	console.log(currentSlide)
}

function slideV3(evt){
	console.log(currentSlide)
	let nextSlide = -1
	if(evt.currentTarget.id == "right"){

		if(currentSlide == slides.length-1){
			nextSlide = 0
		}else{
			nextSlide = currentSlide + 1
		}
		let lastSlide = currentSlide
		currentSlide = nextSlide
		let tempSlide = slides[lastSlide].cloneNode(true)
		slides[lastSlide].style.display = "none"
		let newFrame = document.createElement("div")

		tempSlide.style.zIndex = 50
		newFrame.appendChild(tempSlide)
		document.getElementById("upperSlideShowWrapper").appendChild(newFrame)
		tempSlide.animate([
			{ transform: 'translate(0px)'},
			{ transform: 'translate(30%)'},
			{ transform: 'translate(100%)'},
			{ transform: 'translate(300%)'}
		], {duration: 2000})
		
		slides[nextSlide].style.display = "block"
		var rect = slides[lastSlide].getBoundingClientRect()
		let offSet = (slides[nextSlide].offsetHeight*2-slides[lastSlide].offsetHeight*2)
		let newTop = rect.top - offSet

		console.log(nextSlide)
		console.log(rect.top, rect.right, rect.bottom, rect.left)
		console.log("newtop: " + newTop)
		console.log("offset: " + offSet)

		slides[nextSlide].animate([
			{ height: '0px'},
			{ height: slides[nextSlide].offsetHeight + 'px'}
		], {duration: 2000})

		setTimeout( function(){
			document.getElementById("upperSlideShowWrapper").removeChild(newFrame)
		}, 2000)
	}
}

function slideV2(evt){
	console.log(currentSlide)
	let nextSlide = currentSlide

	if(evt.currentTarget.id == "right"){
		if(currentSlide == slides.length-1){
			nextSlide = 0
		}else{
			nextSlide = currentSlide + 1
		}
		slides[nextSlide].style.display = "block"
		slides[currentSlide].style.zIndex = 50
		slides[nextSlide].style.zIndex = -20
		let lastSlide = currentSlide
		currentSlide = nextSlide
		slides[lastSlide].classList.add("slideRight")
		slides[nextSlide].classList.add("fadeIn")
		setTimeout( function(){
			slides[lastSlide].style.zIndex = -20
			slides[lastSlide].style.display = "none"
			slides[lastSlide].classList.remove("slideRight")
		}, 1000)
	}
	
	if(evt.currentTarget.id == "left"){
		if(currentSlide == 0){
			nextSlide = slides.length-1
		}else{
			nextSlide = currentSlide - 1
		}
		slides[nextSlide].style.display = "block"
		slides[currentSlide].style.zIndex = 50
		slides[nextSlide].style.zIndex = -20
		let lastSlide = currentSlide
		currentSlide = nextSlide
		slides[lastSlide].classList.add("slideLeft")
		slides[nextSlide].classList.add("fadeIn")
		setTimeout( function(){
			slides[lastSlide].style.zIndex = -20
			slides[lastSlide].style.display = "none"
			slides[lastSlide].classList.remove("slideLeft")
		}, 1000)
	}

}


left.addEventListener("click", slideV2)
right.addEventListener("click", slideV3)

