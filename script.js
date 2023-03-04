var area = document.querySelector('div#videos')
var c = 0
var c2 = 0
var veri = undefined
var coner = undefined
var veriErro = 0
function enviado(){
    c++
    //pega o valor do input e corta o link
    function upVideo(){
        var link = document.querySelector('input#linkv')
        var linkv = link.value
        var ifr = undefined
        var errodiv = document.getElementById('erro')
        //verifica se é um link do YouTube;
        if(linkv.substring(8, 16) == 'youtu.be' || linkv.substring(0, 8) == 'youtu.be' || linkv.substring(12, 23) == 'youtube.com' || linkv.substring(4, 15) == 'youtube.com' || linkv.substring(0, 11) == 'youtube.com'){
            //verifica o estilo do link e cria o iframe
            function createIframe(cod){
                if(coner == 0){
                var errorm = document.getElementById('errormen')
                errorm.parentNode.removeChild(errorm)
                coner = 1               
            }
                ifr = document.createElement('iframe')
                ifr.setAttribute('width', '560')
                ifr.setAttribute('height', '315')
                ifr.setAttribute('src', `https://www.youtube.com/embed/${cod}`)
                ifr.setAttribute('title', 'YouTube video player')
                ifr.setAttribute('frameborder', '0')
                ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
                ifr.setAttribute('allowfullscreen', '')
                area.appendChild(ifr)
                veri = 1
                veriErro = 0
            }
            if(linkv.length == 28){
                //https://youtu.be/VNEEEOx15sY
                createIframe(linkv.substring(17, 28))
            }else if(linkv.length == 20){
                //youtu.be/VNEEEOx15sY
                createIframe(linkv.substring(9, 20))
            }else if(linkv.length == 41){
                //https://www.youtube.com/embed/VNEEEOx15sY
                createIframe(linkv.substring(30, 41))
            }else if(linkv.length == 33){
                //www.youtube.com/embed/VNEEEOx15sY
                createIframe(linkv.substring(22, 33)) 
            }else if(linkv.length == 29){
                //youtube.com/embed/VNEEEOx15sY
                createIframe(linkv.substring(18, 29))
            }else if(linkv.length == 43){
                //https://www.youtube.com/watch?v=VNEEEOx15sY
                createIframe(linkv.substring(32, 43))
            }else if(linkv.length == 35){
                //www.youtube.com/watch?v=VNEEEOx15sY
                createIframe(linkv.substring(24, 35))
            }else if(linkv.length == 31){
                //youtube.com/watch?v=VNEEEOx15sY
                createIframe(linkv.substring(20, 31))
            }else{
                if(veriErro == 0){
                    var erro = document.createElement('p')
                    erro.id = 'errormen'
                    erro.textContent = 'Esse não é um link do YouTube'
                    errodiv.appendChild(erro)
                    coner = 0
                    veriErro--
                    c--
            }
            }
        }else{
            if(veriErro == 0){
                var erro = document.createElement('p')
                erro.id = 'errormen'
                erro.textContent = 'Esse não é um link do YouTube'
                erro.style.fontWeight = 'bold'
                erro.style.color = 'red'
                errodiv.appendChild(erro)
                coner = 0
                veriErro--
                c--
        }
        }
    }
    if(c == 1){
        upVideo()
        if(veri == 1 && c2 == 0){
            area.innerText = ''
            c2 = 1
            upVideo()            
        }
    }else{
        upVideo()
        if(veri == 1 && c2 == 0){
            area.innerText = ''
            c2 = 1
            upVideo()
        }
    }
}
//https://youtu.be/VNEEEOx15sY
//https://www.youtube.com/embed/VNEEEOx15sY
//https://www.youtube.com/watch?v=VNEEEOx15sY
/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VNEEEOx15sY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/