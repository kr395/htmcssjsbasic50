const hrs = document.querySelector("#hrs")
const min = document.querySelector("#mins")
const sec = document.querySelector("#sec")
const amPm = document.querySelector("#amPm")


setInterval(() => {
    const currentTime = new Date()
    let str
    if (currentTime.getHours()==12) {
         amPm.innerHTML = "PM"
    } else if(currentTime.getHours() >12){
        str = currentTime.getHours() - 12
        amPm.innerHTML = "PM"
    } else{
        str = currentTime.getHours()
        amPm.innerHTML = "AM"
    }

    hrs.innerHTML = (str <10?"0":"") + String(str)
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
    
}, 1000);

//  Background changing
// 86400  Factor
const back = document.querySelector(".hero")
let red = -1
if (red <255) {
    setInterval(() => {
        //  red = Math.floor(Math.random()* 255)
        //  green = Math.floor(Math.random()* 255)
        //  blue = Math.floor(Math.random()* 255)
         let bgColor = "rgb(" + red + "," + red + "," + red + ")"
         back.style.backgroundColor = bgColor;
         red++
         console.log(red)
        
        }, 10000);
} else {
      red = 0     

}
