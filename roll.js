let intervalLoading = setInterval(()=> checkBodyLoad(),1000)

function checkBodyLoad(){
    let content = document.querySelector('#main_content');
    if(content){
        
         chrome.storage.sync.get("turnedOn", ({turnedOn})=>{

            if(turnedOn){
                playRoll();
            }else{
                alert('Auto clique está desativado')
            }
        })
        //Parar de executar a função checkBodyLoad
        clearInterval(intervalLoading)
    }
}


function playRoll(){

    let playButton = document.querySelector('#free_play_form_button')
    playButton.click();
}
console.log('script carregado')