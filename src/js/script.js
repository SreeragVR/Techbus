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

    const dropDown = document.querySelector('.drop-down')
    const dropButton = document.querySelector('.drop-button')
    const dropListBox = document.querySelector('.drop-down-list')

    if(dropDown && dropButton && dropListBox){
      const dropIcon = dropButton.querySelector('svg')
      const links = dropDown.querySelectorAll('.drop-link')
      dropButton.addEventListener('click',(e)=>{
        e.stopPropagation()
        dropListBox.classList.toggle('drop-active')
        dropIcon.classList.toggle('rotate-icon')
      })
      links.forEach((link)=>{
        link.addEventListener('click',(e)=>{
          e.stopPropagation()
        })
      })
      document.addEventListener('click', () => {
      dropListBox.classList.remove('drop-active')
      dropIcon.classList.remove('rotate-icon')
      })
    }

    const closeForm = document.querySelector('.close-popup')
    const popContainer = document.querySelector('.popup-back')
    const contactForm = document.querySelectorAll('.form-view')
    if(popContainer && closeForm && contactForm){
      const sendMessage = popContainer.querySelector('#sendOtp')
      const formBox = popContainer.querySelector('#popForm')
      const otpForm = popContainer.querySelector('#otpForm')
      const otpButton = popContainer.querySelector('#otpConfirm')
      const editButton = popContainer.querySelector('#editNumber')
      const resendOtp = popContainer.querySelector('#resendOtp')
      const resendTime = popContainer.querySelector('.resend-time')

      contactForm.forEach((form)=>{
        form.addEventListener('click', ()=>{
          popContainer.classList.toggle('hidden')
        })
      })
      closeForm.addEventListener('click', ()=>{
        popContainer.classList.toggle('hidden')
      })
      sendMessage.addEventListener('click', ()=>{
        otpForm.classList.remove('no-vissible')
        formBox.classList.add('no-vissible')
      })
      editButton.addEventListener('click',()=>{
        otpForm.classList.add('no-vissible')
        formBox.classList.remove('no-vissible')
      })

      const otpInputs = document.querySelectorAll("#otpForm input")
      otpInputs.forEach((input, index) => {
        otpInputs[0].focus();
        input.addEventListener("input", (e) => { 
          e.target.value = e.target.value.replace(/\D/g, "")
          if (e.target.value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus()
          }
        })
        input.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" && !input.value && index > 0) {
            otpInputs[index - 1].focus()
          }
        })
      })
    }

    const megaMenu = document.querySelector('.mega-menu')
    const megaButton = document.querySelector('.mega-button')
    const megaListBox = document.querySelector('.mega-menu-list')

    if(megaButton && megaMenu && megaListBox){
      const dropIcon = megaButton.querySelector('svg')
      const linkBoxes = megaMenu.querySelectorAll('.mega-link-box')
      megaButton.addEventListener('click',(e)=>{
        e.stopPropagation()
        megaListBox.classList.toggle('mega-active')
        dropIcon.classList.toggle('rotate-icon')
      })
      linkBoxes.forEach((link)=>{
        link.addEventListener('click',(e)=>{
          e.stopPropagation()
        })
      })
      document.addEventListener('click', () => {
      megaListBox.classList.remove('mega-active')
      dropIcon.classList.remove('rotate-icon')
      })
    }

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
const roboContainer = document.querySelector('.robo-container') 

if(roboVdo && vdoBox && vdoClose && vdoPlay && bannerContainer && roboContainer){
  vdoBox.addEventListener('click', ()=>{
    vdoBox.classList.add('full-vdo-screen')
    vdoClose.classList.remove('hidden')
    bannerContainer.classList.add('z-11')
    roboContainer.classList.remove('z-4')
    vdoPlay.classList.add('no-vissible')
    roboVdo.muted = false
    roboVdo.currentTime = 0
    document.body.style.overflow = "hidden"
  })
  vdoClose.addEventListener('click',(e)=>{
    e.stopPropagation()
    vdoBox.classList.remove('full-vdo-screen')
    bannerContainer.classList.remove('z-11')
    roboContainer.classList.add('z-4')
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

// SERVICE ANIMATION

function serviceCardScrolling(showClass, elementClass, thresholdNumber = 0.5) {
  const elements = document.querySelectorAll(elementClass)
  if (!elements.length) return

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(showClass)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: thresholdNumber })

  elements.forEach(el => observer.observe(el))
}

serviceCardScrolling('software-ani-end-1', '.software-ani-1', 0.5)
serviceCardScrolling('software-ani-end-2', '.software-ani-2', 0.5)
serviceCardScrolling('software-ani-end-3', '.software-ani-3', 0.5)
serviceCardScrolling('software-ani-end-4', '.software-ani-4', 0.5)
serviceCardScrolling('branding-ani-end-2', '.branding-ani-2', 0.5)
serviceCardScrolling('branding-ani-end-3', '.branding-ani-3', 0.5)
serviceCardScrolling('branding-ani-end-4', '.branding-ani-4', 0.5)
serviceCardScrolling('branding-ani-end-5', '.branding-ani-5', 0.5)
serviceCardScrolling('seo-ani-end-1', '.seo-ani-1', 0.5)
serviceCardScrolling('seo-ani-end-2', '.seo-ani-2', 0.5)
serviceCardScrolling('seo-ani-end-3', '.seo-ani-3', 0.5)
serviceCardScrolling('seo-ani-end-4', '.seo-ani-4', 0.5)
serviceCardScrolling('seo-ani-end-5', '.seo-ani-5', 0.5)
serviceCardScrolling('seo-ani-end-6', '.seo-ani-6', 0.5)
serviceCardScrolling('seo-ani-end-7', '.seo-ani-7', 0.5)

})