let int = document.querySelector(".parent .inpBox .inpurl")
let btn = document.querySelector(".parent .inputSpace .inpBox .btnsubmit")
let imgSrc = document.querySelector(".card .imgBox img")
let intTitle = document.querySelector(".inpBox .nameinp")
let pix = 174
intValue = int.value
int.oninput= ()=>{
    console.log(int.value)
    if(int.value.length != 0){
        intTitle.innerHTML ="Enter your Url"
        intTitle.style.color= "#2c7dfa"
    }

}

btn.addEventListener("click", ()=>{
    if(int.value.length != 0){
        console.log(int.value)
        fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${int.value}&size=${pix}x${pix}&charset-source=UTF-8&color=ffffff&bgcolor=2c7dfa`)
        .then(data=> imgSrc.src = data.url)
    }else{
        intTitle.innerHTML ="Please Enter Url"
        intTitle.style.color= "red"
    }
})
