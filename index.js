let int = document.querySelector(".parent .inpBox .inpurl")
let btnSubmit = document.querySelector(".parent .inputSpace .inpBox .btnsubmit")
let imgSrc = document.querySelector(".card .imgBox img")
let intTitle = document.querySelector(".inpBox .nameinp")
let pix = 174
let control = document.querySelector(".parent")
let controlBox = document.querySelector(".parent .icon")
let color="ffffff"
let bgColor= '2c7dfa'

let redValue = document.querySelector(".parent .controlColor .red .value")
let greenValue = document.querySelector(".parent .controlColor .green .value")
let blueValue = document.querySelector(".parent .controlColor .blue .value")
let redInput = document.querySelector(".parent .controlColor .red input")
let greenInput = document.querySelector(".parent .controlColor .green input")
let blueInput = document.querySelector(".parent .controlColor .blue input")
let result = document.querySelector(".parent .controlColor .reusult")
let inputs = document.querySelectorAll(".parent .controlColor section input")
let btnSetColor = document.querySelector(".parent .controlColor .btns .setColor")
int.oninput= ()=>{
    console.log(int.value)
    if(int.value.length != 0){
        intTitle.innerHTML ="Enter your Url"
        intTitle.style.color= "#2c7dfa"
    }

}

btnSubmit.addEventListener("click", ()=>{
    if(int.value.length != 0){
        console.log(int.value)
        fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${int.value}&size=${pix}x${pix}&charset-source=UTF-8&color=${color}&bgcolor=${bgColor}`)
        .then(data=> imgSrc.src = data.url)
    }else{
        intTitle.innerHTML ="Please Enter Url"
        intTitle.style.color= "red"
    }
})

controlBox.addEventListener("click",()=>{
    control.classList.toggle("toggle")
    if(control.classList.contains("toggle")){
        controlBox.classList.add("fa-chevron-up")
        controlBox.classList.remove("fa-chevron-down")
    }else{
        controlBox.classList.remove("fa-chevron-up")
        controlBox.classList.add("fa-chevron-down")
    }

})

let setValueColor = (inp,val) =>{
    inp.oninput = ()=>{
        val.innerHTML = inp.value
        let colorPick = `rgb(${redInput.value},${greenInput.value},${blueInput.value})`
        result.style.backgroundColor = `${colorPick}`
        localStorage.setItem("color-pick", `${redInput.value}-${greenInput.value}-${blueInput.value}`)
    }
}
setValueColor(redInput,redValue)
setValueColor(greenInput,greenValue)
setValueColor(blueInput,blueValue)


btnSetColor.addEventListener("click",()=>{
    let getColor = localStorage.getItem("color-pick")
    color = getColor
    console.log(color)
})