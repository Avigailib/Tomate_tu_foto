var api=window.webkitSpeechRecognition
var reconocimiento=new api()
var Textbox=document.getElementById("pronunciacion")
function iniciar(){
    Textbox.innerHTML=""
    reconocimiento.start()
}
reconocimiento.onresult=function(event){
    console.log(event)
    contenido=event.results[0][0].transcript
    Textbox.innerHTML=contenido
    if(contenido=="foto time"){
       hablar()
    }
}
function hablar(){
    var voz=window.speechSynthesis
    var vozpc="5, 4, 3, 2, 1, 0"
    var usarvoz=new SpeechSynthesisUtterance(vozpc)
    Webcam.attach(camara)
    voz.speak(usarvoz)
    setTimeout(function(){
        tomalafoto()
        guardar()
    },5000)
}
camara=document.getElementById("camara")
Webcam.set({
    width:200, height:200, image_format:'png', png_quality:90
})
function tomalafoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("foto").innerHTML='<img id="selfie" src=" '+data_uri+' ">'
    })
}
function guardar(){
    link=document.getElementById("link")
    image=document.getElementById("selfie").src 
    link.href=image
    link.click()
}