var area = document.querySelector('div#videos')
area.innerText = ''
function enviado(){
    //pega o valor do input e corta o link
    var up = document.getElementById('up')
    var link = document.querySelector('input#linkv')
    var linkv = link.value
    var cod = undefined
    var ifr = undefined    
    //verifica se é um link do YouTube;
    if(linkv.substring(8, 16) == 'youtu.be' || linkv.substring(0, 8) == 'youtu.be' || linkv.substring(12, 23) == 'youtube.com' || linkv.substring(4, 15) == 'youtube.com' || linkv.substring(0, 11) == 'youtube.com'){
        
        //verifica o estilo do link e cria o iframe
        if(linkv.length == 28){
            //https://youtu.be/VNEEEOx15sY
            cod = linkv.substring(17, 28)
            ifr = document.createElement('iframe')
            ifr.setAttribute('width', '560')
            ifr.setAttribute('height', '315')
            ifr.setAttribute('src', `https://www.youtube.com/embed/${cod}`)
            ifr.setAttribute('title', 'YouTube video player')
            ifr.setAttribute('frameborder', '0')
            ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
            ifr.setAttribute('allowfullscreen', '')
            area.appendChild(ifr)
        }else if(linkv.length == 20){
            //youtu.be/VNEEEOx15sY
            cod = linkv.substring(9, 20)
            ifr = document.createElement('iframe')
            ifr.setAttribute('width', '560')
            ifr.setAttribute('height', '315')
            ifr.setAttribute('src', `https://www.youtube.com/embed/${cod}`)
            ifr.setAttribute('title', 'YouTube video player')
            ifr.setAttribute('frameborder', '0')
            ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
            ifr.setAttribute('allowfullscreen', '')
            area.appendChild(ifr)
        }else if(linkv.length == 41){
            //https://www.youtube.com/embed/VNEEEOx15sY
            cod = linkv.substring(30, 41)
            ifr = document.createElement('iframe')
            ifr.setAttribute('width', '560')
            ifr.setAttribute('height', '315')
            ifr.setAttribute('src', `https://www.youtube.com/embed/${cod}`)
            ifr.setAttribute('title', 'YouTube video player')
            ifr.setAttribute('frameborder', '0')
            ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
            ifr.setAttribute('allowfullscreen', '')
            area.appendChild(ifr)
        }else if(linkv.length == 33){
            //www.youtube.com/embed/VNEEEOx15sY
            cod = linkv.substring(22, 33)
            ifr = document.createElement('iframe')
            ifr.setAttribute('width', '560')
            ifr.setAttribute('height', '315')
            ifr.setAttribute('src', `https://www.youtube.com/embed/${cod}`)
            ifr.setAttribute('title', 'YouTube video player')
            ifr.setAttribute('frameborder', '0')
            ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
            ifr.setAttribute('allowfullscreen', '')
            area.appendChild(ifr)
        }else if(linkv.length == 29){
            //youtube.com/embed/VNEEEOx15sY
            cod = linkv.substring(18, 29)
            ifr = document.createElement('iframe')
            ifr.setAttribute('width', '560')
            ifr.setAttribute('height', '315')
            ifr.setAttribute('src', `https://www.youtube.com/embed/${cod}`)
            ifr.setAttribute('title', 'YouTube video player')
            ifr.setAttribute('frameborder', '0')
            ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
            ifr.setAttribute('allowfullscreen', '')
            area.appendChild(ifr)
        }else if(linkv.length == 43){
            //https://www.youtube.com/watch?v=VNEEEOx15sY
            cod = linkv.substring(32, 43)
            ifr = document.createElement('iframe')
            ifr.setAttribute('width', '560')
            ifr.setAttribute('height', '315')
            ifr.setAttribute('src', `https://www.youtube.com/embed/${cod}`)
            ifr.setAttribute('title', 'YouTube video player')
            ifr.setAttribute('frameborder', '0')
            ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
            ifr.setAttribute('allowfullscreen', '')
            area.appendChild(ifr)
        }else if(linkv.length == 35){
            //www.youtube.com/watch?v=VNEEEOx15sY
            cod = linkv.substring(24, 35)
            ifr = document.createElement('iframe')
            ifr.setAttribute('width', '560')
            ifr.setAttribute('height', '315')
            ifr.setAttribute('src', `https://www.youtube.com/embed/${cod}`)
            ifr.setAttribute('title', 'YouTube video player')
            ifr.setAttribute('frameborder', '0')
            ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
            ifr.setAttribute('allowfullscreen', '')
            area.appendChild(ifr)
        }else if(linkv.length == 31){
            //youtube.com/watch?v=VNEEEOx15sY
            cod = linkv.substring(20, 31)
            ifr = document.createElement('iframe')
            ifr.setAttribute('width', '560')
            ifr.setAttribute('height', '315')
            ifr.setAttribute('src', `https://www.youtube.com/embed/${cod}`)
            ifr.setAttribute('title', 'YouTube video player')
            ifr.setAttribute('frameborder', '0')
            ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
            ifr.setAttribute('allowfullscreen', '')
            area.appendChild(ifr)
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