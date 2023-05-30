const contactForm = document.getElementById('myForm'),
    contactName = document.getElementById('name'),
    contactEmail = document.getElementById('email'),
    contactSubject = document.getElementById('subject'),
    contactMessage = document.getElementById('body')

const sendEmail = (e) => {
    e.preventDefault();
        if (contactName.value ==='' || contactEmail.value ==='' || contactSubject.value ==='' || contactMessage.value === ''){
            contactMessage.classList.remove('color-blue');
            contactMessage.classList.add('color-red');
            contactMessage.textContent = 'Tous les champs doivent être remplie pour envoyer un message';
        }else{
            emailjs.sendForm('service_lo4p6ui', 'template_0bgdo7v', '#myForm', 'nBj5472yTsfE5AdYK')
                .then(() =>{
                    contactMessage.classList.add('color-blue')
                    contactMessage.textContent = 'Message envoyé ✔'
                    setTimeout(() =>{
                        contactMessage.textContent = ''
                    },6000)
                }, (error) =>{
                    alert('Echec ..', error)
                })

            contactName.value = ''
            contactEmail.value = ''
            contactSubject.value = ''
            contactMessage.value = ''
        }
}
contactForm.addEventListener('submit', sendEmail)

