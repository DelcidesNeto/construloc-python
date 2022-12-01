function redirecionar(){
    var url_site = window.location
    if (url_site == 'http://construloc.herokuapp.com/'){
        window.location.href = 'https://construloc.herokuapp.com/'
    }
}
window.sr = ScrollReveal({ reset: true })
sr.reveal('.betoneira', { duration: 1500 })
sr.reveal('.descricao_betoneira', { duration: 2000 })
sr.reveal('.alugar', { duration: 2500 })
sr.reveal('.andaime', { duration: 1500 })