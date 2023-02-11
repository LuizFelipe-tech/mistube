function enviado(){
    //pega o valor do input e corta o link
    var up = document.getElementById('up')
    var link = document.querySelector('input#linkv')
    var linkv = link.value
    if(linkv.length == 28){
        var cod1 = linkv.substring(17, 28)
        alert(cod1)
        //var ifr = document.createElement('iframe');
    }else if(linkv.length == 41){
        var cod2 = linkv.substring(30, 41)
        alert(cod2)
    }else if(linkv.length == 43){
        var cod3 = linkv.substring(32, 43)
        alert(cod3)
    }else if(linkv.length == 35){
        var cod4 = linkv.substring(24, 38)
        alert(cod4)
    }else if(linkv.length == 31){
        var cod5 = linkv.substring(20, 34)
        alert(cod5)
    }else{
        alert(linkv.length)
    }
}
//link de exemplo: https://youtu.be/VNEEEOx15sY
//https://www.youtube.com/embed/VNEEEOx15sY
//https://www.youtube.com/watch?v=VNEEEOx15sY
/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VNEEEOx15sY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/