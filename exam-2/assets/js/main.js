$(function(){
    $("#my-slider").lightSlider({
        item: 1,
        loop:true,
        slideMargin:0,
        controls: false,
        auto:true,
        vertical:true,
        verticalHeight: 800,
    })

    $.getJSON('assets/JSON/news.json', function(el){
        const ul = $('<ul></ul>').attr('id', 'sliderNews');
        const divSlid = $('<div></div>').addClass('wrap-slick-news')
        const btnPrev = $('<button></button>').attr('id', 'prev').attr('type','button').addClass('btn btn-prev');
        const btnNext = $('<button></button>').attr('id', 'next').attr('type','button').addClass('btn btn-next')
        btnNext.append(`<svg width="6" height="16" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.64844 4.5C4.64844 4.4375 4.61719 4.36719 4.57031 4.32031L0.929688 0.679687C0.882813 0.632812 0.8125 0.601562 0.75 0.601562C0.6875 0.601562 0.617188 0.632812 0.570313 0.679687L0.179688 1.07031C0.132813 1.11719 0.101563 1.1875 0.101563 1.25C0.101563 1.3125 0.132813 1.38281 0.179688 1.42969L3.25 4.5L0.179688 7.57031C0.132813 7.61719 0.101563 7.6875 0.101563 7.75C0.101563 7.82031 0.132813 7.88281 0.179688 7.92969L0.570313 8.32031C0.617188 8.36719 0.6875 8.39844 0.75 8.39844C0.8125 8.39844 0.882813 8.36719 0.929688 8.32031L4.57031 4.67969C4.61719 4.63281 4.64844 4.5625 4.64844 4.5Z" /></svg>`)
        btnPrev.append(`<svg width="6" height="16" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.89844 1.25C4.89844 1.17969 4.86719 1.11719 4.82031 1.07031L4.42969 0.679687C4.38281 0.632812 4.3125 0.601562 4.25 0.601562C4.1875 0.601562 4.11719 0.632812 4.07031 0.679687L0.429688 4.32031C0.382813 4.36719 0.351563 4.4375 0.351563 4.5C0.351563 4.5625 0.382813 4.63281 0.429688 4.67969L4.07031 8.32031C4.11719 8.36719 4.1875 8.39844 4.25 8.39844C4.3125 8.39844 4.38281 8.36719 4.42969 8.32031L4.82031 7.92969C4.86719 7.88281 4.89844 7.8125 4.89844 7.75C4.89844 7.6875 4.86719 7.61719 4.82031 7.57031L1.75 4.5L4.82031 1.42969C4.86719 1.38281 4.89844 1.3125 4.89844 1.25Z"/></svg>`)
        let list = ``;
        el.forEach(function(item){
            list += `
            <li class="list-item">
                <a href="https://www.pravda.com.ua/news/" class="link-new" target="_blank">
                    <div class="img-new">
                        <img src="${item.img}" alt="foto class="imgNews lazy">
                    </div>
                    <div class="content">
                        <h4 class="title">${item.title}</h4>
                        <p class="text">${item.description}</p>
                    </div>
                    <div class="autor-news">
                            <div class="photo">
                            <img src="${item.autor}" alt="autor" class="photoAutor lazy">
                        </div>
                        <div class="name-date">
                            <span class="name">${item.name}</span>
                            <span class="date">${item.date}</span>
                        </div>
                    </div>
                </a>
            </li>
            `
        });
        ul.append(list);
        divSlid.append(ul);
        $("#slider").append(divSlid);
        $("#slider").append(btnPrev);
        $("#slider").append(btnNext)
        const mySlider = $("#sliderNews").lightSlider({
            item:3,
            loop:true,
            slideMargin: 30,
            controls: false,
            responsive : [
                {
                    breakpoint:1300,
                    settings: {
                        item:2,
                        slideMargin: 15,
                    }
                },
                {
                    breakpoint:770,
                    settings: {
                        item:1,
                        slideMargin: 15,
                    }
                },
            ]
        })
        $("#prev").on('click', function(){
            mySlider.goToPrevSlide()
        })
        $("#next").on('click', function(){
            mySlider.goToNextSlide()
        })
    })


    lightGallery(document.getElementById('animated-thumbnails'), {
        plugins: [lgZoom],
        licenseKey: '0000-0000-000-0000',
        speed: 500,
        preload:1,
    });

    var lazyLoadInstance = new LazyLoad()
    
})


$("#btn_scrol, #btn_scrol1, #btn_scrol2, #btn_scrol3, #btn_scrol4").on('click', function(){
    const top = $("#what_we_do").offset().top
    window.scrollTo({
        top: top,
        behavior: 'smooth',
    })
})

window.addEventListener('scroll', function(){
    const header = document.getElementById("header");
    if(window.scrollY >= 200){
        if(!header.classList.contains('scroll')){
            header.classList.add('scroll')
        }
    }else{
        if(header.classList.contains('scroll')){
            header.classList.remove('scroll')
        }
    }
    if(window.scrollY >= 150){
        if(!header.classList.contains('bacgraund')){
            header.classList.add('bacgraund')
        }
    }else{
        if(header.classList.contains('bacgraund')){
            header.classList.remove('bacgraund')
        }
    }
})

const linkMap = document.getElementById('mapLink')
linkMap.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event);
    event.target.remove()
    const map = L.map('map').setView([48.55689552813388, 24.616187796094618], 12);
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const icon = L.icon({
        iconUrl: 'assets/img/Pin.svg',
        iconSize:[106, 106],
    });

    L.marker([48.5694381370961, 24.60894190889608], {icon: icon}).addTo(map);
})

const form = $('#form')

function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$('.input-form').focus(function() {
    if ($(this).hasClass('is-invalid')) {
        $(this).removeClass('is-invalid');
    }
});

form.submit(function(e) {
    e.preventDefault();
    const errors = [];

const nameFld = $('#name')
const emailFld = $('#email')

const name = nameFld.val().trim()
const email = emailFld.val().trim()

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


$.post(url, function(resp){
    if(resp.ok){
        nameFld.val('')
        emailFld.val('')
        toast.success('Your message successfully sent.')
    }else{
        toast.error('Some error occured.')
    }
})

return false
})

function toggleMobileNav(){
    document.body.classList.toggle('open-mb-menu')
    window.hamb_btn.classList.toggle('is-active')
}
window.hamb_btn.addEventListener('click', toggleMobileNav)

window.hamb_btn_mb.addEventListener('click', toggleMobileNav)