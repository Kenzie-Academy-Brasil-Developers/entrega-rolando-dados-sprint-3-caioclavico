const button = document.getElementById('jogar');
button.addEventListener('click', function rolarOsDados(){
    const section = document.querySelector('section')
    section.innerHTML = "";
    let resultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let dados = []
    for (let i = 0; i < 1000; i++) {
        dados.push(Math.floor( 1 + 6*Math.random() ) + Math.floor( 1 + 6*Math.random() ))
    }
    for (let j = 0; j < dados.length; j++) {
        let count = resultados[dados[j]] + 1
        resultados.splice(dados[j], 1, count)
    } 
    for (let i = 2; i < resultados.length; i++) {
        const minhaBarra = document.createElement('div')
        const paragrafo = document.createElement('p')
        paragrafo.innerText = resultados[i]
        minhaBarra.style.width = `${resultados[i]}px`
        minhaBarra.style.backgroundColor = `${color()}`

        minhaBarra.appendChild(paragrafo)
        section.appendChild(minhaBarra)
    }
 return resultados
})

function color () {
    const colors = ["#a1e280", "#003F91", "#6D326D", "#157A6E", "#916953"];

  return colors[Math.floor(Math.random() * 5)];
}

/* function rolarOsDados () {
    let resultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let dados = []
    for (let i = 0; i < 1000; i++) {
        dados.push(Math.floor( 1 + 6*Math.random() ) + Math.floor( 1 + 6*Math.random() ))
    }
    for (let j = 0; j < dados.length; j++) {
        let count = resultados[dados[j]] + 1
        resultados.splice(dados[j], 1, count)
    } 
    return resultados
} */