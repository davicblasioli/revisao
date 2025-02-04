let textoOriginal = 'Olá, eu me chamo Davi e tenho 16 anos, nasci em Birigui, São Paulo e atualmente estudo desenvolvimento de software no Senai, eu tenho realizado alguns projetos desde o ano passado, neles eu utilizo as linguagens de Python, Html, CSS e JavaScript. Meu maior sonho atualmente é ser contratado e ganhar dinheiro aqui no Senai, mas ta difícil ein.'; // Variável para armazenar o texto original

function texto() {
    const elemento = document.getElementById('mim');
    const imagensContainer = document.getElementById('imagensContainer');

    if (imagensContainer.style.display === 'block') {
        imagensContainer.style.display = 'none';
        elemento.innerText = textoOriginal; // Volta para o texto original
    } else {
        imagensContainer.style.display = 'block';
        elemento.innerText = ''; // Limpa o texto original
    }
}

document.getElementById('btn').addEventListener('click', texto);



var foto1 = document.getElementById('foto1')
foto1.addEventListener('click', abreFoto1)

function abreFoto1() {
    var foto = document.getElementById('imgzoom')
    var zoom = document.getElementById('zoom')

    foto.setAttribute('src', "assets/img/dogdodoi.jpg" )
    zoom.style.display = "flex"
}




var foto1 = document.getElementById('fechar')
foto1.addEventListener('click', fechaFoto1)

function fechaFoto1() {
    var foto = document.getElementById('imgzoom')
    var zoom = document.getElementById('zoom')

    foto.setAttribute('src', "assets/img/dogdodoi.jpg" )
    zoom.style.display = "none"
}


var foto2 = document.getElementById('foto2')
foto2.addEventListener('click', abreFoto2)

function abreFoto2() {
    var foto = document.getElementById('imgzoom')
    var zoom = document.getElementById('zoom')

    foto.setAttribute('src', "assets/img/financeiro.jpg" )
    zoom.style.display = "flex"
}


var foto2 = document.getElementById('fechar')
foto2.addEventListener('click', fechaFoto2)

function fechaFoto2() {
    var foto = document.getElementById('imgzoom')
    var zoom = document.getElementById('zoom')

    foto.setAttribute('src', "assets/img/financeiro.jpg" )
    zoom.style.display = "none"
}



var foto3 = document.getElementById('foto3')
foto3.addEventListener('click', abreFoto3)

function abreFoto3() {
    var foto = document.getElementById('imgzoom')
    var zoom = document.getElementById('zoom')

    foto.setAttribute('src', "assets/img/fotografo.jpg" )
    zoom.style.display = "flex"
}


var foto3 = document.getElementById('fechar')
foto3.addEventListener('click', fechaFoto3)

function fechaFoto3() {
    var foto = document.getElementById('imgzoom')
    var zoom = document.getElementById('zoom')

    foto.setAttribute('src', "assets/img/fotografo.jpg" )
    zoom.style.display = "none"
}




function mudarCorAleatoria() {
    const numeroAleatorio = Math.floor(Math.random() * 8); // Gera um número de 0 a 6

    var cliques = 0

    const cores = [
        ['#FF5733', '#FFC300'], // Laranja vibrante e Amarelo claro
        ['#33FF57', '#28B463'], // Verde claro e Verde escuro
        ['#3357FF', '#1F618D'], // Azul intenso e Azul escuro
        ['#F1C40F', '#D68910'], // Amarelo ouro e Laranja dourado
        ['#8E44AD', '#5B2C6F'], // Roxo escuro e Roxo mais escuro
        ['#FF1493', '#FF69B4'], // Rosa escuro e Rosa  
        ['#B0E0E6', '#E0FFFF'], // PowderBlue e PaleTurquoise
        ['#1abc9c', '#3498db']  // Cores originais
    ];

    const coresSelecionadas = cores[numeroAleatorio];

    document.getElementById('mudcor').style.background = `${coresSelecionadas[0]}`;
    document.getElementById('mudecor').style.background = `${coresSelecionadas[0]}`;
    document.getElementById('btn').style.background = `${coresSelecionadas[1]}`;

    if (numeroAleatorio == '6') {
        document.getElementById('btn').style.color = '#000000';
        document.getElementById('partxt').style.color = '#000000';
        document.getElementById('titu').style.color = '#000000';
    } else {
        document.getElementById('btn').style.color = '#ffffff'
        document.getElementById('partxt').style.color = '#ffffff'
        document.getElementById('titu').style.color = '#ffffff'
    }

    const botao = document.getElementById('botao');
    botao.style.background = `${coresSelecionadas[0]}`;
    botao.style.cursor = 'pointer';
}

document.getElementById('botao').addEventListener('click', mudarCorAleatoria);


const clickButton = document.getElementById('botao');
const clickCount = document.getElementById('clics');

clickButton.addEventListener('click', () => {
    count++;
    clickCount.textContent = count;
});