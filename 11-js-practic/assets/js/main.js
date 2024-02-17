// const form = document.getElementById('feedback_form')
const form = $('#feedback_form')

function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

// document.querySelectorAll('.form-control').forEach(elem=>{
//     elem.onfocus = function(){
//         if(this.classList.contains('is-invalid')){
//             this.classList.remove('is-invalid')
//         }
//     }
// })

$('.form-control').focus(function() {
    if ($(this).hasClass('is-invalid')) {
        $(this).removeClass('is-invalid');
    }
});

// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     const errors = [];

form.submit(function(e) {
        e.preventDefault();
        const errors = [];

    // const nameFld = document.getElementById('exampleInputName')
    // const emailFld = document.getElementById('exampleInputEmail1')

    const nameFld = $('#exampleInputName')
    const emailFld = $('#exampleInputEmail1')


    // const name = nameFld.value.trim()
    // const email = emailFld.value.trim()

    const name = nameFld.val().trim()
    const email = emailFld.val().trim()

    // if(name === ''){
    //     errors.push('Enter your name, please')
    //     nameFld.classList.add('is-invalid')
    // } else{
    //     if(name.length < 2){
    //         errors.push('Your name is too short')
    //         nameFld.classList.add('is-invalid')
    //     }
    // }

    // if(email === ''){
    //     errors.push('Enter your email, please')
    //     emailFld.classList.add('is-invalid')
    // }else{
    //     if(!isValidEmail(email)){
    //         errors.push('Incorrect email address')
    //         emailFld.classList.add('is-invalid')
    //     }
    // }

    // if(errors.length){
    //     toast.error(errors.join('. '))
    //     return
    // }

    if(name === ''){
        errors.push('Enter your name, please')
        nameFld.addClass('is-invalid')
    } else{
        if(name.length < 2){
            errors.push('Your name is too short')
            nameFld.addClass('is-invalid')
        }
    }

    if(email === ''){
        errors.push('Enter your email, please')
        emailFld.addClass('is-invalid')
    }else{
        if(!isValidEmail(email)){
            errors.push('Incorrect email address')
            emailFld.addClass('is-invalid')
        }
    }

    if(errors.length){
        toast.error(errors.join('. '))
        return
    }

    const CHAT_ID = '-1002101957749';
    const BOT_TOKEN = '6953258209:AAFp0zCEAo5JGZ4ziBYEIyinpexLbWuFew0';

    const message = `<b>Name: </b>${name}\r\n<b>Email: </b>${email}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURI(message)}&parse_mode=HTML`;

    // fetch(url,{
    //     method: 'post'
    // })
    //     .then(resp => resp.json())
    //     .then(resp => {
    //         
    //     })

    // $.ajax({
    //     url: url,
    //     type: 'post',
    //     dataType: 'json',
    //     success: function(resp){
    //         if(resp.ok){
    //             nameFld.value = ''
    //             emailFld.value = ''
    //             toast.success('Your message successfully sent.')
    //         }else{
    //             toast.error('Some error occured.')
    //         }
    //     },
    //     error: function(err){
    //         toast.error(err)
    //     }
    // })

    $.post(url, function(resp){
        if(resp.ok){
            nameFld.value = ''
            emailFld.value = ''
            toast.success('Your message successfully sent.')
        }else{
            toast.error('Some error occured.')
        }
    })

    return false
})