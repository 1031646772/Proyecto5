let esqueleto="off";
let essqueleto=document.getElementById('esqueletoId');
const img="<img src='./Img/esqueleto.gif'>";
let boton_Sonido=new  Audio("./Music/botonbailar.mp3");
let sonido=new  Audio("./Music/audio.mp3");
function bailar() {
    if (esqueleto=="off"){
        esqueleto="on";
        console.log("On");
        essqueleto.classList.add("esqueletoOn");
        essqueleto.addEventListener("click",()=>{
            boton_Sonido.play();
            essqueleto.addEventListener("click",()=>{
            boton_Sonido.play();
            sonido.play(); 
        })
        })
    }
    else{
        esqueleto="off";
        console.log("Off");
        essqueleto.classList.remove("esqueletoOn");
        essqueleto.addEventListener("click",()=>{
            boton_Sonido.play();
            sonido.pause();
        })
    }
}
