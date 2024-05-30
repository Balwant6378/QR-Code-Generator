const BASE_URL = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

const btn = document.querySelector("button")
const input = document.querySelector("input")

const img = document.querySelector(".qrcode img");

const qrCodeGenerator = ()=> {
    if(input.value != ""){
        let loder = document.createElement("div");
        loder.classList.add("loder-container");
        console.log(loder)
        btn.append(loder);
        let  URL = BASE_URL + input.value;
        img.src = URL;
        img.onload = ()=>{
            loder.remove();
        }
    }else{
    alert("please enter a valid data! ")
}
loder.disabled;
}

btn.addEventListener("click", () => {
    qrCodeGenerator();  
})
