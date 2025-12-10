document.addEventListener('DOMContentLoaded', ()=>{
    const navbar = document.getElementById('navbar')
    const menuToggle = document.querySelector('.toggle')
    if(navbar && menuToggle){
        menuToggle.addEventListener('click', ()=>{
            navbar.classList.toggle('navbar-position')
        })
    }

    const header = document.querySelector('header')
    if(header){
        document.addEventListener('scroll',()=>{
            if(scrollY > 10){
                header.classList.add('dark')
            }else{
                header.classList.remove('dark')
            }
        })
    }

    // const backColor = document.querySelector('.back_color')
    // if(backColor){
    //     document.addEventListener('scroll',()=>{
    //     if(scrollY > 20){
    //         backColor.classList.add('expand-transition')
    //     }else{
    //         backColor.classList.remove('expand-transition')
    //     }
    //     })
    // }

    if(document.querySelector('.verticalSwiper')){
      const verticalSwiper = new Swiper(".verticalSwiper", {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      })
    }

  if(document.querySelector('.serviceSwiper')){
    const serviceSwiper = new Swiper(".serviceSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
        breakpoints: {

        500: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  }

if(document.querySelector('.vision-container')){
    window.addEventListener('scroll', () => {
    const section = document.querySelector('.vision-container')
    const rect = section.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    let progress = 1 - rect.top / viewportHeight
    progress = Math.min(Math.max(progress, 0), 1)

    const sectionWidth = section.offsetWidth
    const sectionHeight = section.offsetHeight
    const maxSize = Math.sqrt(sectionWidth ** 2 + sectionHeight ** 2)

    const minSize = 100
    const size = minSize + progress * (maxSize - minSize)
    section.style.setProperty('--circle-size', `${size}px`)
    })
}

const faqs = document.querySelectorAll('.faq_container')
    if(faqs){
        faqs.forEach((faq) => {
        const answer = faq.querySelector('.answercont')
        const closeIcon = faq.querySelector('.close-faq')
        const openIcon = faq.querySelector('.open-faq')
        function faqIcon(){
        if (answer.classList.contains('open-answer')) {
            closeIcon.style.opacity = 1
            closeIcon.style.top = "50%"
            openIcon.style.opacity = 0
            openIcon.style.top = '50px'
        } else {
            closeIcon.style.opacity = 0
            closeIcon.style.top = "50px"
            openIcon.style.opacity = 1
            openIcon.style.top = '50%'
        }
        }
        faqIcon()
        faq.addEventListener('click', () => {
            faqs.forEach((otherFaq)=>{
                if (otherFaq !== faq) {
                const otherAnswer = otherFaq.querySelector('.answercont')
                const otherCloseIcon = otherFaq.querySelector('.close-faq')
                const otherOpenIcon = otherFaq.querySelector('.open-faq')
                otherAnswer.classList.remove('open-answer')
                otherCloseIcon.style.opacity = 0
                otherCloseIcon.style.top = "50px"
                otherOpenIcon.style.opacity = 1
                otherOpenIcon.style.top = "50%"
            }
            })

            answer.classList.toggle('open-answer')
            faqIcon()
        })
        })
    }

  const container = document.querySelector('.pattern-banner')
  const icons = document.querySelectorAll('.digital-marketing-banner-icon')
if(container && icons){
  container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const moveX = (x - centerX) / 10
      const moveY = (y - centerY) / 40

      icons.forEach((icon, index) => {
        const depth = (index + 1) * 2
        icon.style.transform = `translate(${moveX / depth}px, ${moveY / depth}px)`
      })
  })
}

const roboVdo = document.querySelector('.robo-vdo') 
const vdoBox = document.querySelector('.video-container') 
const vdoClose = document.querySelector('.vdo-close') 
const vdoPlay = document.querySelector('.play-button') 
const bannerContainer = document.querySelector('.hero-banner') 

if(roboVdo && vdoBox && vdoClose && vdoPlay && bannerContainer){
  vdoPlay.addEventListener('click', ()=>{
    vdoBox.classList.add('full-vdo-screen')
    vdoClose.classList.remove('hidden')
    bannerContainer.classList.add('z-11')
    vdoPlay.classList.add('no-vissible')
    roboVdo.muted = false
    roboVdo.currentTime = 0
    document.body.style.overflow = "hidden"
  })
  vdoClose.addEventListener('click',()=>{
    vdoBox.classList.remove('full-vdo-screen')
    bannerContainer.classList.remove('z-11')
    vdoClose.classList.add('hidden')
    vdoPlay.classList.remove('no-vissible')
    roboVdo.muted = true
    document.body.style.overflow = ""
  })
}


// SCROLL ANIMATIONS

function scrollingElements(showClass,elementClass){
if(elementClass.length != 0){
    const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
    if(entry.isIntersecting){
    entry.target.classList.add(showClass)
    }else{
    // entry.target.classList.remove(showClass)
    null
    }
})
}, {
    threshold: 0.2
})

const elements = document.querySelectorAll(elementClass)
elements.forEach((el)=>observer.observe(el))
}
}

function scrollingElementsQuick(showClass,elementClass){
if(elementClass.length != 0){
    const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
    if(entry.isIntersecting){
    entry.target.classList.add(showClass)
    }else{
    // entry.target.classList.remove(showClass)
    null
    }
})
}, {
    threshold: 0.4
})

const elements = document.querySelectorAll(elementClass)
elements.forEach((el)=>observer.observe(el))
}
}

scrollingElements('left-show','.from-left')
scrollingElements('top-show','.from-top')
scrollingElements('right-show','.from-right')
scrollingElementsQuick('bottom-show','.from-bottom')

function overLayText(outline, fill) {
  const headline = document.querySelector(outline);
  const section = document.querySelector(fill);

  if (!section || !headline) return;

  // Setup once – base fixed positioning
  headline.style.position = "fixed";
  headline.style.left = "0";
  headline.style.right = "0";
  headline.style.top = "0";
  headline.style.willChange = "transform, opacity";
  headline.style.pointerEvents = "none"; // so it doesn't block clicks

  function updateHeadline() {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    if (rect.bottom <= 0 || rect.top >= vh) {
      // section is off screen
      headline.style.opacity = "0";
    } else {
      headline.style.opacity = "1";

      // Match the fill's vertical position exactly
      const y = Math.round(rect.top); // rounding avoids sub-pixel jitter
      headline.style.transform = `translate3d(0, ${y}px, 0)`; // GPU-friendly
    }

    // keep syncing every frame
    requestAnimationFrame(updateHeadline);
  }

  // start the loop
  requestAnimationFrame(updateHeadline);
}

// example usage
overLayText(".brand-head-1", ".brand-head-2");
overLayText(".soft-head-1", ".soft-head-2");


})