const day = document.querySelector(".day")
const time = document.querySelector(".time")
const year = document.querySelector(".year")

function changeTime(){
    let date = new Date
    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    let timeFormat = `${hour} ${minute} ${seconds}`
    console.log(timeFormat);
    time.innerHTML = timeFormat

    let currentDay = date.getDay()
}
    if( currentDay === 0 ){
        day.innerHTML = "Sunday"
    }else if(currentDay === 1){
        day.innerHTML = "Monday"
    }else if(currentDay === 2){
        day.innerHTML = "Tuesday"
    }else if( currentDay === 3 ){
        day.innerHTML = "Wedneday"
    }else if( currentDay === 4 ){
        day.innerHTML = "Thusday"
    }else if( currentDay === 5 ){
        day.innerHTML = "Friday"
    }else if( currentDay === 6 ){
        day.innerHTML = "Saturday"


    let kun = date.getDate()
    let oy = date.getMonth()
    let yil = date.getFullYear()
}
changeTime()


setInterval(function(){
    changeTime()
},1000)

