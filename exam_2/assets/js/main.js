$(function(){
    $('#lightSlider').lightSlider({
        item: 1,
        vertical: true,
        verticalHeight: 800,
        slideMargin: 0,
        controls: false,
        auto: true,
        loop: true,

    }); 
})

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
        // responsiveClass:true,
        // responsive : {
        //     0:{
        //         items: 2,
        //         dots: true,
        //         dotsEach: 3
        //     },
        //     425: {
        //         items: 2,
        //         dots: true,
        //         dotsEach: 3
        //     },
        //     768: {
        //         items: 3
        //     },
        //     1024: {margin: 10,
        //         items: 3
        //     }
        // }
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

$(document).ready(function() {
    const form = $('#contacts-form');

    function isValidEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $(document).on('focus', function(e) {
        if ($(e.target).hasClass('input')) {
            if ($(e.target).hasClass('is-active')) {
                $(e.target).removeClass('is-active');
            }
        }
    });

    form.on('submit', function(e) {
        e.preventDefault();
        const errors = [];

        const nameField = $('#name');
        const emailField = $('#email');

        const name = nameField.val().trim();
        const email = emailField.val().trim();

        if (name === '') {
            errors.push('Enter your name');
            nameField.addClass('is-invalid');
        } else {
            if (name.length < 2) {
                errors.push('Your name is too short');
                nameField.addClass('is-invalid');
            }
        }
        if (email === '') {
            errors.push('Enter your email');
            emailField.addClass('is-invalid');
        } else {
            if (!isValidEmail(email)) {
                errors.push('Incorrect email address');
                emailField.addClass('is-invalid');
            }
        }
        if (errors.length) {
            toast.error(errors.join(', '));
        }

        // const message = `<b>Name: </b>${name}\r\n<b>Email: </b>${email}`
        // const CHAT_ID = '305610668';
        // const BOT_TOKEN = '6599006475:AAFuqFX3zqhxYY3hWzMD0PP9PpHhSW6K5Q4';

        // var url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURI(message)}&parse_mode=HTML`;

        // fetch(url, {
        //     method: 'post'
        // })
        //     .then(resp => resp.json())
        //     .then(resp => {
        //         if (resp.ok){
        //             nameField.value = '';
        //             emailField.value = '';
        //             toast.success('Your message succefulle sent')
        //         } else {
        //             toast.error('Some error occured')
        //         }
        //     })

        const message = `<b>Name: </b>${name}\r\n<b>Email: </b>${email}`;
        const CHAT_ID = '-4164940018';
        const BOT_TOKEN = '6599006475:AAFuqFX3zqhxYY3hWzMD0PP9PpHhSW6K5Q4';

        var url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        $.ajax({
            url: url,
            method: 'POST',
            data: {
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            },
            success: function(resp) {
                if (resp.ok) {
                    nameField.val('');
                    emailField.val('');
                    toast.success('Your message successfully sent');
                } else {
                    toast.error('Some error occurred');
                }
            },
            error: function() {
                toast.error('Failed to send message');
            }
        });


        return false;
    });
});





    

    


