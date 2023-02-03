function enviado(){
    //pega o valor do input e corta o link
    var up = document.getElementById('up');
    var link = document.querySelector('input#linkv');
    var linkv = link.value;
    var cod = linkv.substring(17, 27);
    var ifr = document.createElement('iframe');
}
//link de exemplo: https://youtu.be/VNEEEOx15sY
//https://www.youtube.com/embed/VNEEEOx15sY
/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VNEEEOx15sY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/