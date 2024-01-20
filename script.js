time= document.getElementById("time")
timeformat= document.getElementById("timeformat")

document.addEventListener("DOMContentLoaded",()=>{
    setInterval(todo,1000)
})

function todo(){
    let x= new Date()

    let sec= x.getSeconds()
    let min= x.getMinutes()
    let hour= x.getHours()

    let secString= sec<10 ? `0${sec}` : sec
    let minString= sec<10 ? `0${min}` : min
    let hourString= sec<10 ? `0${hour}` : hour

    time.innerHTML= `${hourString}:${minString}:${secString}`

    timeformat.innerHTML= hourString>12 ? "PM" :"AM"
}