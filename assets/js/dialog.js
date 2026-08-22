// --------------------------------------------------
// GENERIC DIALOG OPEN / CLOSE
// --------------------------------------------------

const gridButtons = document.querySelectorAll('.dialog-grid-button')
const dialogs = document.querySelectorAll('dialog')
const body = document.querySelector('html')

gridButtons.forEach(button => {

    button.addEventListener('click', () => {

        body.classList.add('lockScroll')
        button.nextElementSibling.showModal()

    })

})


dialogs.forEach(dialog => {

    dialog.addEventListener('click', event => {

        if (event.target === dialog) {

            dialog.close()
            body.classList.remove('lockScroll')

        }

    })

})


// --------------------------------------------------
// FAQ ACCORDION
// --------------------------------------------------

let questions = document.querySelectorAll('.question')

questions.forEach(question => {

    let answer = question.querySelector('.answer')

    question.addEventListener('click', () => {

        question.classList.toggle('active')

        if (question.classList.contains('active')) {

            answer.style.height = `${answer.scrollHeight}px`

        } else {

            answer.style.height = '0px'

        }

    })

})


// --------------------------------------------------
// EXISTING POPUP GALLERY
// --------------------------------------------------

let galleries = document.querySelectorAll('.gallery-image-holder')

galleries.forEach(gal => {

    let images = gal.querySelectorAll('img')
    let activeImage = 0
    let next = gal.querySelector('.next')
    let prev = gal.querySelector('.prev')
    let verticalText = gal.querySelector('.vertical-text')


    function changeImage(n) {

        activeImage = (activeImage + n) % images.length

        images.forEach(img => {

            if (images[activeImage] == img) {

                img.classList.add('active')

                if (verticalText && img.dataset.textColor) {

                    if (img.dataset.textColor == 'light') {

                        verticalText.style.color = '#fff'

                    } else {

                        verticalText.style.color = '#000'

                    }

                }

            } else {

                img.classList.remove('active')

            }

        })

    }


    if (next) {

        next.addEventListener('click', () => {
            changeImage(images.length - 1)
        })

    }


    if (prev) {

        prev.addEventListener('click', () => {
            changeImage(1)
        })

    }

})


// --------------------------------------------------
// SIMPLE POPUP CARDS
// --------------------------------------------------

let simpleGalleries = document.querySelectorAll(
    '.popup-cards-simple .simple-popup-gallery'
)

simpleGalleries.forEach(gal => {

    let images = gal.querySelectorAll('img')
    let activeImage = 0
    let imageSubTitle = gal.querySelector('.image-text')
    let next = gal.querySelector('.next')
    let prev = gal.querySelector('.prev')

    let subGalleryButtons = gal
        .parentElement
        .querySelectorAll('.sub-gallery-buttons')


    function changeSimpleImage(n) {

        activeImage = (activeImage + n) % images.length

        images.forEach(img => {

            if (images[activeImage] == img) {

                img.classList.add('active')

                if (imageSubTitle) {
                    imageSubTitle.innerHTML = img.alt
                }

            } else {

                img.classList.remove('active')

            }

        })

    }


    if (next) {

        next.addEventListener('click', () => {
            changeSimpleImage(images.length - 1)
        })

    }


    if (prev) {

        prev.addEventListener('click', () => {
            changeSimpleImage(1)
        })

    }


    subGalleryButtons.forEach(button => {

        button.addEventListener('click', () => {

            activeImage = button.dataset.number - 1

            images.forEach(img => {

                if (images[activeImage] == img) {

                    img.classList.add('active')

                    if (imageSubTitle) {
                        imageSubTitle.innerHTML = img.alt
                    }

                } else {

                    img.classList.remove('active')

                }

            })

        })

    })

})


// --------------------------------------------------
// VISUAL TABS / REASONS
// --------------------------------------------------

const reasonButtons = document.querySelectorAll('.reasonButtons')
const reasonGrid = document.querySelector('.reasonGrid')

if (reasonButtons.length && reasonGrid) {

    function reasonScroll(n) {

        reasonGrid.scrollTo({
            left: n * reasonGrid.clientWidth,
            behavior: "smooth",
        })

    }


    reasonButtons.forEach(button => {

        button.addEventListener('click', () => {

            let target = button.dataset.scrollNumber

            reasonButtons.forEach(b => {

                if (b == reasonButtons[target]) {

                    b.classList.add("active")

                } else {

                    b.classList.remove('active')

                }

            })

            reasonScroll(target)

        })

    })


    reasonScroll(0)


    setInterval(() => {

        let newTarget = Math.floor(
            reasonGrid.scrollLeft / (reasonGrid.clientWidth - 100)
        )

        reasonButtons.forEach(b => {

            if (b == reasonButtons[newTarget]) {

                b.classList.add("active")

            } else {

                b.classList.remove('active')

            }

        })

    }, 500)

}