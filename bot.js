document.addEventListener('DOMContentLoaded',function(){

    //Componente é carregado, por padrão, com o auto clique desativado
    chrome.storage.sync.get("turnedOn", ({turnedOn})=>{

        if(turnedOn){
            
            turnOn();
        }
    })

    let turnOnButton = document.querySelector("#turnon")
    turnOnButton.addEventListener("click", function(){

        turnOn()
    })

    let turnOffButton = document.querySelector("#turnoff")
    turnOffButton.addEventListener("click", function(){

        turnOff()
    })


})

function turnOn(){

    let button = document.querySelector("#turnon")
    let title = document.querySelector('#msg_title');
    title.innerHTML = '<h1> O Bot está ligado </h1>';
    button.style.display='none'
    let turnOffButton = document.querySelector('#turnoff')
    turnOffButton.style.display='block'
    chrome.storage.sync.set({"turnedOn":true})
}

function turnOff(){

    let button = document.querySelector("#turnoff")
    let title = document.querySelector('#msg_title');
    title.innerHTML = '<h1> O Bot está desligado </h1>';
    button.style.display='none'

    let turnOnButton = document.querySelector('#turnon')
    turnOnButton.style.display='block'
    chrome.storage.sync.set({"turnedOn":false})

}