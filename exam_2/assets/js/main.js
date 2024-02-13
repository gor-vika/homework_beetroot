var lazyLoadInstance = new LazyLoad({
});
$(function(){
    $('#lightSlider').lightSlider({
        item: 1,
        vertical: true,
        verticalHeight: 800,
        slideMargin: 0,
        controls: false,
        auto: true,
        loop: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    pager: false 
                }
            }
        ]
    }); 
})


document.getElementById('hamb-btn').addEventListener('click', function(){
document.body.classList.toggle('open-mobile-menu')
document.getElementById('hamb-btn').classList.toggle('is-active')})

document.getElementById('hamb-btn-mobile').addEventListener('click', function(){
document.body.classList.toggle('open-mobile-menu')
document.getElementById('hamb-btn').classList.toggle('is-active')})


$(window).on("scroll", function(){
    if ($(this).scrollTop() >= 200){
        if (!$("#header").hasClass("scrolled")){
            $("#header").addClass("scrolled")
        } 
    } else {
        if ($("#header").hasClass("scrolled")){
            $("#header").removeClass("scrolled")
        }
    }
})

$("#scroll_arrow").on("click", function(){
    window.scrollTo({
        top: $("#projects").offset().top,
        behavior: 'smooth'
    })
})
$(async function(){
    const response = await fetch ('assets/js/news.json')
    const json = await response.json();

    if (json.length > 0){
        let list = ``;
        json.forEach(item => {
            list += addNewsHTML(item);
        })
        document.getElementById('news-slider').innerHTML = list;

    } else {
        toast.error(`No news found`)
    }

    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        dotsEach: 3,
        center:true,
        nav: true,
        margin: 30,
        navText: [`<button type="button" class="owl-arrow owl-prev"></button>`, `<button type="button" class=" owl-arrow owl-next">
        </button>`],
        responsiveClass:true,
        responsive : {
            0:{
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            800: {
                items: 2,
                
            },
            1120: {
                margin: 20,
                items: 3
            }
        }
    });
})

function addNewsHTML(item){
    return `<div class="news-slider">
                <div class="news-card">
                    <div class="news-img">
                        <img src="${item.image}" alt="news_image" title="${item.title}">
                    </div>
                    <h5 class="news-title">${item.title}</h5>
                    <p class="news-anons">${item.anons}</p>
                    <div class="news-author">
                        <div class="news-author-photo">
                            <img src="${item.author.avatar}">
                        </div>
                        <div class="news-author-info">
                            <span class="author-name">${item.author.name}</span>
                            <span class="news-date">${item.date}</span>
                        </div>
                    </div>
                </div>
            </div>`
}

$(function(){
    if ($(".news-slider").length > 0){
        $(".news-slider").addClass("owl-carousel owl-theme"); 
    } 
    if ($(".news-card").length > 0){ 
        $(".news-card").addClass("item");
    } 
});

lightGallery(document.getElementById('gallery_container'), {
    selector: '.gallery_item',
    mode: 'lg-slide',
    cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    thumbnail: true,
    subHtmlSelectorRelative: true
});

function initMap(link){
    link.remove();
    const map = L.map('map').setView([40.66763414583054, -73.92223675289303], 13);

    const customMarker = L.icon({
        iconUrl: 'assets/img/pin.svg',
        shadowUrl: 'assets/img/pin-shadow.svg',

        iconSize:     [16, 16], 
        shadowSize:   [70, 70], 
        iconAnchor:   [0, 0], 
        shadowAnchor: [27, 27],  
        popupAnchor:  [0, 0] 
    });

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([40.66763414583054, -73.92223675289303], {icon: customMarker}).addTo(map)
        .bindPopup('MONTICELLO<br>INTERNATIONAL GROUP')
}

const form = document.getElementById('contacts-form')

function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
document.addEventListener('focus', function(e){
    if (e.target.classList.contains('input')){
        if (e.target.classList.contains('is-active')){
            e.target.classList.remove('is-active')
        }
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    const errors = [];

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');

    const name = nameField.value.trim();
    const email = emailField.value.trim();

    if (name === ''){
        errors.push('Enter your name')
        nameField.classList.add('is-invalid')
    } else {
        if (name.length < 2){
            errors.push('Your name is to short')
            nameField.classList.add('is-invalid')
        }
    }
    if (email === ''){
        errors.push('Enter your email')
        emailField.classList.add('is-invalid')
    } else {
        if (!isValidEmail(email)){
            errors.push('Incorrect email adress')
            emailField.classList.add('is-invalid')
        }
    }
    if (errors.length){
        toast.error(errors.join(', '))
        return
    }

    const message = `<b>Name: </b>${name}\r\n<b>Email: </b>${email}`
        const CHAT_ID = '-4164940018';
        const BOT_TOKEN = '6599006475:AAFuqFX3zqhxYY3hWzMD0PP9PpHhSW6K5Q4';

        var url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURI(message)}&parse_mode=HTML`;

        fetch(url, {
            method: 'post'
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.ok){
                    nameField.value = '';
                    emailField.value = '';
                    toast.success('Your message succefulle sent')
                } else {
                    toast.error('Some error occured')
                }
            })

    return false
})

    

    


