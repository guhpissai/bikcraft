const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
 const url = location.href
 const href = link.href

 if(url.includes(href)) {
  link.classList.add('ativo')
 }
}

links.forEach(ativarLink)

// Ativar Items do Orçamento

function ativarProduto(produto) {
 const element = document.getElementById(produto)
 if(element) element.checked = 'true'
}

const parametros = new URLSearchParams(location.search)

parametros.forEach(ativarProduto)

// Ativa pergunta

function ativarPergunta(event) {
 const pergunta = event.currentTarget;
 const controls = pergunta.getAttribute('aria-controls')
 const resposta = document.getElementById(controls)

 resposta.classList.toggle('ativa')
 const ativa = resposta.classList.contains('ativa')
 pergunta.setAttribute('aria-expanded', ativa)
}

function eventoPerguntas(pergunta) {
 pergunta.addEventListener('click', ativarPergunta)
 const resposta = document.querySelectorAll('.perguntas dd')
}

 const pergunta = document.querySelectorAll('.perguntas button')
pergunta.forEach(eventoPerguntas)
