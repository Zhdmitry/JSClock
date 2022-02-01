let secondHands = document.querySelector('.second-hand')
let minutesHands = document.querySelector('.min-hand')
let hoursHands = document.querySelector('.hour-hand')
let time = document.querySelector('.time')
let days = document.querySelector('.days')
let mode = document.querySelector('.mode')
let clock = document.querySelector('.clock')
let relax = document.querySelector('.relax')
let relax_link = document.querySelector('.relax-link')
let monthCollection = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
let dayCollection = ['воскресенье', 'понедельник','вторник','среда','четверг','пятница','суббота',]






function SetDate(){
    let now = new Date()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = now.getHours()
    let day = now.getDay()
    let date = now.getDate()
    let month = now.getMonth()
    let years = now.getFullYear()
    let secondsdeg = ((seconds / 60) * 360)+90
    let minutesdeg = ((minutes / 60) * 360)+90
    let hoursdeg = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    
    secondHands.style.transform = `rotate(${secondsdeg}deg)`
    minutesHands.style.transform = `rotate(${minutesdeg}deg)`
    hoursHands.style.transform = `rotate(${hoursdeg}deg)`
    if(minutes < 10){
        time.innerHTML = `${hours}:0${minutes}:${seconds}`   
    }else{
        if(seconds < 10){
            time.innerHTML = `${hours}:${minutes}:0${seconds}`   
        }else{
            if(hours < 10){
                time.innerHTML = `0${hours}:${minutes}:${seconds}` 
            }else{
                time.innerHTML = `${hours}:${minutes}:${seconds}`  
            }
        }

    }
    
    
    days.innerHTML = `${dayCollection[day]}, ${date} ${monthCollection[month]} ${years}`
    
}


setInterval(SetDate, 1000);


mode.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }

    if(clock.classList.contains('clock-dark')) {
        clock.classList.remove('clock-dark')        
    } else {
        clock.classList.add('clock-dark')        
    }

    

    if(minutesHands.classList.contains('min-hand-dark')) {
        minutesHands.classList.remove('min-hand-dark')        
    } else {
        minutesHands.classList.add('min-hand-dark')        
    }

    if(hoursHands.classList.contains('hour-hand-dark')) {
        hoursHands.classList.remove('hour-hand-dark')        
    } else {
        hoursHands.classList.add('hour-hand-dark')        
    }

    if(mode.classList.contains('mode-dark')) {
        mode.classList.remove('mode-dark')        
    } else {
        mode.classList.add('mode-dark')        
    }
    
    if(relax.classList.contains('relax-dark')) {
        relax.classList.remove('relax-dark')        
    } else {
        relax.classList.add('relax-dark')        
    }

    if(relax_link.classList.contains('relax-link-dark')) {
        relax_link.classList.remove('relax-link-dark')        
    } else {
        relax_link.classList.add('relax-link-dark')        
    }
})

console.log('Ваша оценка - 30 баллов  \n Отзыв по пунктам ТЗ:  \nВыполненные пункты: \n 1 Разобраться в коде чужого проекта, понять его, воспроизвести исходное приложение. Правки и изменения допускаются и приветствуются, если они не ухудшают внешний вид и функционал исходного проекта. За недостатки, которые присутствуют в исходном проекте, баллы не снимаются.\n 2 Для каждого проекта указан обязательный дополнительный функционал, который необходимо реализовать. В каждом задании обязательный дополнительный функционал свой, он указан в описании задания.\n 3 Дополнительный фукционал на выбор это одно или несколько улучшений, которые вы можете добавить в свой проект. Для каждого проекта предлагаются несколько возможных вариантов его улучшения. Вы можете реализовать одно или несколько из них, или добавить в проект свои собственные улучшения. Каждое качественно выполненное улучшение из предложенных в задании или своё собственное, аналогичное им по сложности, оценивается в 10 баллов. Количество улучшений не ограничено. При этом максимальный балл за таск - 30. Даже если от исходного проекта ничего не осталось и обязательный дополнительный функционал не выполнен, автор работы может получить максимальный балл за таск только за счёт дополнительного функционала на выбор, если по качеству выполнения и/или сложности он не уступает исходному проекту и обязательному дополнительному фукционалу. \n темная тема и приложение для релаксации')
