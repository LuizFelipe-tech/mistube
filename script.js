function enviado(){
    //pega o valor do input e corta o link
    var up = document.getElementById('up')
    var link = document.querySelector('input#linkv')
    var linkv = link.value
    var cod = undefined
    var ifr = undefined
    //verifica se é um link do YouTube
    if(linkv.substring(8, 16) == 'youtu.be' || linkv.substring(0, 8) == 'youtu.be' || linkv.substring(12, 23) == 'youtube.com' || linkv.substring(4, 15) == 'youtube.com' || linkv.substring(0, 11) == 'youtube.com'){
        
        if(linkv.length == 28){
            cod = linkv.substring(17, 28)
            ifr = document.createElement('iframe')

        }else if(linkv.length == 20){
            cod = linkv.substring(9, 20)
            
        }else if(linkv.length == 41){
            cod = linkv.substring(30, 41)
            
        }else if(linkv.length == 33){
            cod = linkv.substring(22, 33)
            
        }else if(linkv.length == 29){
            cod = linkv.substring(18, 29)
            
        }else if(linkv.length == 43){
            cod = linkv.substring(32, 43)
            
        }else if(linkv.length == 35){
            cod = linkv.substring(24, 35)
            
        }else if(linkv.length == 31){
            cod = linkv.substring(20, 31)
            
        }else{
            alert('Esse não é um link do YouTube')
        }
    }else{
        alert('Esse não é um link do YouTube')
    }
}
//https://youtu.be/VNEEEOx15sY
//https://www.youtube.com/embed/VNEEEOx15sY
//https://www.youtube.com/watch?v=VNEEEOx15sY
/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VNEEEOx15sY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/