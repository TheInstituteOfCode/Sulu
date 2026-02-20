
    const gridButtons = document.querySelectorAll('.dialog-grid-button')
    const dialogs = document.querySelectorAll('dialog');
    const body = document.querySelector('html')
    // console.log()

    gridButtons.forEach(button => {
        // console.log(button,button.nextElementSibling)
        button.addEventListener('click', ()=> {
        // console.log(button,button.nextElementSibling)
            body.classList.add('lockScroll')
            button.nextElementSibling.showModal()

        })
    })

    dialogs.forEach( dialog => {
        dialog.addEventListener('click', (event) => {
         if (event.target === dialog) {
             // This code will execute when the backdrop is clicked
            //  console.log('Backdrop clicked!');
             // Example: Close the dialog
             dialog.close();
            body.classList.remove('lockScroll')
         }
     });




    

    })

    // outside of the gal so that it works for all faq and not just those in a dialog
    // for mutual exclusivity, need to move back in the dialog code before tweekes or will effect all faqs on the page

    let questions = document.querySelectorAll('.question')
    console.log(questions, 'questions')
     questions.forEach(question => {
        let answer =  question.querySelector('.answer')

        question.addEventListener('click', ()=>{
            question.classList.toggle('active')
            // console.log(answer.scrollHeight)
            if (question.classList.contains('active')) {
                answer.style.height = `${answer.scrollHeight}px`
            } else {
                answer.style.height = `0px`
                
            }
        })
     })


    let galleries = document.querySelectorAll('.gallery-image-holder')

    galleries.forEach(gal => {
    let images = gal.querySelectorAll('img')
    let activeImage = 0
    let next = gal.querySelector('.next')
    let prev = gal.querySelector('.prev')
    let verticalText = gal.querySelector('.vertical-text')
    

     function changeImage(n) {
        // console.log(n)
        activeImage = (activeImage + n) % images.length
        images.forEach(img => {
            if (images[activeImage] == img) {
            img.classList.add('active')
            if(verticalText && img.dataset.textColor) {

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
    
         prev.addEventListener('click', () => { changeImage(1) })

     } else {
        // console.log(gal, 'no gallery')
     }


    })

