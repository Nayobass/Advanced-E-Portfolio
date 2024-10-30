
function contact(event) {
    event.preventDefault();
    // emailjs
    //   .sendForm(
    //     'service_3bjs5fs',
    //     'template_kv62w9c',
    //     event.target,
    //     'enHWFdsVJYjP3hNox'
    //   ).then(() => {
    //     console.log('this worked1')
    //   })
    const loading = document.querySelector('.modal__overalay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible")
        console.log('it worked 1')
    }, 500)
}