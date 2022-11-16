var sec=0
var min=0
var hr=0 
var interval

function start(){
    interval = setInterval(watch,1000)
}

function pause(){
    console.log('pausou')
    clearInterval(interval)
}

function stop(){
    console.log('parou')
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('watch').innerText='00:00:00'
}

function twodigts(digit){
   if(digit<10){
    return('0'+digit)
   }
   else{
    return(digit)
   };
}

function watch(){
    sec++
    if(sec==60){
        min++
        sec=00
        if(min==60){
            min=0
            hr++
        }    
    }
    document.getElementById('watch').innerText=twodigts(hr)+':'+twodigts(min)+':'+twodigts(sec)
    console.log('FOI')
}