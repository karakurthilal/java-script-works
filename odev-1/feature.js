function days(params) {
    if (params==1){
        return "Monday"
    }else if (params==2){
        return "Tuesday"
    }else if (params==3){
        return "Wednesday"
    }else if (params==4){
        return "Thursday"
    }else if (params==5){
        return "Friday"
    }else if (params==6){
        return "Saturday"
    }else if (params==7){
        return "Sunday"
    }
}
function pics(params){
    if(params==1){
        return " https://i2.milimaj.com/i/milliyet/75/0x0/6023a30a55427f0890484c78.jpg ";
    }else if(params==2){
        return " https://i2.milimaj.com/i/milliyet/75/0x0/6023a30b55427f0890484c7e.jpg"
    }else if(params==3){
        return " https://i2.milimaj.com/i/milliyet/75/0x0/6023a30b55427f0890484c80.jpg"
    }else if(params==4){
        return "https://i2.milimaj.com/i/milliyet/75/0x0/6023a30b55427f0890484c7c.jpg "
    }else if(params==5){
        return "https://i2.milimaj.com/i/milliyet/75/0x0/6023a30b55427f0890484c82.jpg "
    }else if(params==6){
        return "https://i2.milimaj.com/i/milliyet/75/0x0/6023a30b55427f0890484c88.jpg "
    }else if(params==7){
        return " https://i2.milimaj.com/i/milliyet/75/0x0/6023a30b55427f0890484c7a.jpg"
    }

}
let names = prompt("İsminiz:");
let pDOM= document.querySelector("#hello");

pDOM.innerHTML= `Merhaba ${names} Hoşgeldin <br>
${new Date().getHours()}:${new Date().getMinutes()}  ${days(new Date().getDay())}
 <br> İşte Tam da Burdasın <br> <img src="${pics(new Date().getDay())}" alt=""> 
`  
