
    const gridButtons = document.querySelectorAll('.dialog-grid-button')
    const dialogs = document.querySelectorAll('dialog');
    const body = document.querySelector('html')
    console.log()

    gridButtons.forEach(button => {
        console.log(button,button.nextElementSibling)
        button.addEventListener('click', ()=> {
        console.log(button,button.nextElementSibling)
            body.classList.add('lockScroll')
            button.nextElementSibling.showModal()

        })
    })

    dialogs.forEach( dialog => {
        dialog.addEventListener('click', (event) => {
         if (event.target === dialog) {
             // This code will execute when the backdrop is clicked
             console.log('Backdrop clicked!');
             // Example: Close the dialog
             dialog.close();
            body.classList.remove('lockScroll')
         }
     });

     let questions = dialog.querySelectorAll('.question')

     questions.forEach(question => {
        let answer =  question.querySelector('.answer')

        question.addEventListener('click', ()=>{
            question.classList.toggle('active')
            console.log(answer.scrollHeight)
            if (question.classList.contains('active')) {
                answer.style.height = `${answer.scrollHeight}px`
            } else {
                answer.style.height = `0px`
                
            }
        })
     })


    

    })


    let galleries = document.querySelectorAll('.gallery-image-holder')
    console.log(galleries)

    galleries.forEach(gal => {
    let images = gal.querySelectorAll('img')
    let activeImage = 0
    let next = gal.querySelector('.next')
    let prev = gal.querySelector('.prev')

     console.log(next,prev,images.length - 1)

     function changeImage(n) {
        console.log(n)
        activeImage = (activeImage + n) % images.length
        images.forEach(img => {
            if (images[activeImage] == img) {
            img.classList.add('active')
            } else {
                img.classList.remove('active')
            }
        })
     }

     console.log(changeImage)

     if (next) {
         next.addEventListener('click', () => {
             changeImage(1)
            })
    
         prev.addEventListener('click', () => { changeImage(images.length - 1) })

     } else {
        console.log(gal, 'no gallery')
     }


     console.log(changeImage)


  console.log(next,prev)
    })

