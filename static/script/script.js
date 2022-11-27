function redirecionar(){
    window.location.href = 'https://construloc.herokuapp.com/'
}


function mudar_tamanho(){
    if (innerWidth >= 607){
        var opcoes = window.document.querySelector('#opcoes')
        opcoes.style.display = 'none'
    }
}


function mostrar_menu(){
    var opcoes = window.document.querySelector('#opcoes')
    if (opcoes.style.display == 'block'){
        opcoes.style.display = 'none'
    }else{
        opcoes.style.display = 'block'
    }
}


function mostrar_botao(n){
    var botao = window.document.querySelector(`#botao${n}`)
    botao.style.display = 'block'
}


function esconder_botao(n){
    var botao = window.document.querySelector(`#botao${n}`)
    botao.style.display = 'none'
}


function mostrar_imagem(n){
    var img = window.document.querySelector(`#img${n}`)
    img.style.opacity = '100%'
}


function escurecer_imagem(n){
    var img = window.document.querySelector(`#img${n}`)
    img.style.opacity = '75%'
}
