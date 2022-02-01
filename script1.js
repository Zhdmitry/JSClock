let again = document.querySelector('.again')
let taimer = document.querySelector('.taimer')
let just_relax = document.querySelector('.just-relax')
let congratulate = document.querySelector('.congratulate')
let timeMinut = 2*60
let timer = setInterval(function () {
let seconds = timeMinut%60 // Получаем секунды
let minutes = timeMinut/60%60 // Получаем минуты
let hour = timeMinut/60/60%60 // Получаем часы
// Условие если время закончилось то...
if (timeMinut <= 0) {
// Таймер удаляется
clearInterval(timer);
// Выводит сообщение что время закончилось
again.style.display = 'none'
taimer.style.display = 'none'
just_relax.style.display = 'none'
congratulate.style.display = 'flex'

} else { // Иначе
// Создаём строку с выводом времени
let strTimer = `0${Math.trunc(minutes)}:${seconds}`;
if(seconds < 10){
    strTimer = `0${Math.trunc(minutes)}:0${seconds}`;
}

// Выводим строку в блок для показа таймера
taimer.innerHTML = strTimer;
}
--timeMinut; // Уменьшаем таймер
}, 1000)


let relax = document.querySelector('.ddd')
relax.addEventListener('mousemove', (e) => {
    timeMinut = 2*60
    again.classList.add('again1')
    again.classList.remove('again')
    setTimeout( function() {again.classList.remove('again1')
    again.classList.add('again')}, 3000)
    taimer.classList.add('taimer1')
    taimer.classList.remove('taimer')
    setTimeout( function() {taimer.classList.remove('taimer1')
    taimer.classList.add('taimer')}, 3000)   
})
relax.addEventListener('keydown', (e) => {
    timeMinut = 2*60
    again.classList.add('again1')
    again.classList.remove('again')
    setTimeout( function() {again.classList.remove('again1')
    again.classList.add('again')}, 3000)
    taimer.classList.add('taimer1')
    taimer.classList.remove('taimer')
    setTimeout( function() {taimer.classList.remove('taimer1')
    taimer.classList.add('taimer')}, 3000)   
})