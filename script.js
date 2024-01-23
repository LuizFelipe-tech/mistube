var areay = document.querySelector('div#videosy')
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
        if(linkv.startsWith('https://youtu.be') || linkv.startsWith('youtu.be') || linkv.startsWith('https://www.youtube.com/embed') || linkv.startsWith('www.youtube.com/embed') || linkv.startsWith('youtube.com/embed') || linkv.startsWith('https://www.youtube.com/watch?') || linkv.startsWith('www.youtube.com/watch?') || linkv.startsWith('youtube.com/watch?')){
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
                areay.appendChild(ifr)
                veri = 1
                veriErro = 0
            }
            switch(linkv.length){
                case 28:
                    //https://youtu.be/VNEEEOx15sY
                    createIframe(linkv.substring(17, 28))
                    break;
                case 20:
                    //youtu.be/VNEEEOx15sY
                    createIframe(linkv.substring(9, 20))
                    break;
                case 41:
                    //https://www.youtube.com/embed/VNEEEOx15sY
                    createIframe(linkv.substring(30, 41))
                    break;
                case 33:
                    //www.youtube.com/embed/VNEEEOx15sY
                    createIframe(linkv.substring(22, 33)) 
                    break;
                case 29:
                    //youtube.com/embed/VNEEEOx15sY
                    createIframe(linkv.substring(18, 29))
                    break;
                case 43:
                    //https://www.youtube.com/watch?v=VNEEEOx15sY
                    createIframe(linkv.substring(32, 43))
                    break;
                case 35:
                    //www.youtube.com/watch?v=VNEEEOx15sY
                    createIframe(linkv.substring(24, 35))
                    break;
                case 31:
                    //youtube.com/watch?v=VNEEEOx15sY
                    createIframe(linkv.substring(20, 31))
                    break;
                case 48:
                    //https://youtu.be/lQskYmoXVs8?si=GCvsvfI3iHSBYSs1
                    createIframe(linkv.substring(17, 28))
                    break;
                case 40:
                    //youtu.be/lQskYmoXVs8?si=oxcfDafyv1_mysct
                    createIframe(linkv.substring(9, 20))
                    break;
                case 61:
                    //https://www.youtube.com/embed/lQskYmoXVs8?si=4hDTZ2pichKEpRi9
                    createIframe(linkv.substring(30, 41))
                    break;
                default:
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
        else{
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
            areay.innerText = ''
            c2 = 1
            upVideo()            
        }
    }else{
        upVideo()
        if(veri == 1 && c2 == 0){
            areay.innerText = ''
            c2 = 1
            upVideo()
        }
    }
}
//https://youtu.be/VNEEEOx15sY
//https://www.youtube.com/embed/VNEEEOx15sY
//https://www.youtube.com/watch?v=VNEEEOx15sY
/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VNEEEOx15sY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/
//https://vimeo.com/76979871
/* <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="560" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/76979871">The New Vimeo Player (You Know, For Videos)</a> from <a href="https://vimeo.com/staff">Vimeo Staff</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */
