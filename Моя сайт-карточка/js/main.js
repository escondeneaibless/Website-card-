var $page = $('html, body');            //скролбар
$('a[href*="#title"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

var modal = document.getElementById('myModal');
var pushModal = document.getElementById('pushModal');
var pushMod = document.getElementById('push-mod');
//Анимация уведомления
function openModal() { modal.style.display = "block"; }
let names = document.getElementById('name');
let Email = document.getElementById('Email');
let numb = document.getElementById('numb');
let city = document.getElementById('city');
let mas = [];

function closeModal() {                                            // в кнопке
    if (names.value !== '' && Email.value !=='' && numb.value !=='' && city.value !=='') {  //условие на пустые строки
        modal.style.display = "none";
        pushModal.style.display = "block";
        pushMod.style.display = "block";

        setTimeout(() => {   //анимация закрытия уведомления
            pushModal.style.cssText = `
        width: 0px;
        display: block;
        `;
            setTimeout(() => {
                pushModal.style.display = "none"
                return pushModal.style.cssText = `
            width: 350px;
            `
            }, 600);

            pushMod.style.display = "none"
        }, 1400);
        let arr = {
                "name": names.value,
                "email": Email.value,
                "numb": numb.value,
                "city": city.value         
        };
        mas.push(arr);
        localStorage.mas = JSON.stringify(mas);
    } else {
        alert('Вы не заполнили анкету');
    }
}
function sendingData() { modal.style.display = "none"; };

let title = document.querySelector('.who-i');           //анимация для курсора
for (let i = 0; i < title.length; i++) {
    setTimeout(title[i].style.color = "black", 1000);
}
let colors = [
    'transparent',
    '#d206fb',
]
let indexOffset = 1000000000000
setInterval(() => {
    document.querySelectorAll('h3 span').forEach((letter, index) => {
        letter.style.color = colors[(index + indexOffset) % 12]
        letter.style.textShadow = "0px 0px 15px ";
        letter.style.border = "1px solid colors[(index + indexOffset) % 12] "
    })
    indexOffset--
}, 200);
(function () {
    "use strict";

    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;
        event = event || window.event; // IE-ism
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;
            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0);
        }
        // Add a dot to follow the cursor
        dot = document.createElement('div');
        dot.className = "dot demo rainbow-bg";
        dot.style.left = event.pageX - 2 + "px";
        dot.style.top = event.pageY -2 + "px";
        setTimeout(() => {
            dot.remove();
            dot.remove();
        }, 100);
        document.body.appendChild(dot);
    }
})();


