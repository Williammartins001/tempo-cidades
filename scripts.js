

const key = "9af18ea1695e82c4e1a06127d508a027"

function colocardadosnatela(dados){
    document.querySelector(".cidade").innerHTML= "Tempo em "+ dados.name
    document.querySelector(".temp").innerHTML= Math.floor(dados.main.temp) + "Cº"
    document.querySelector(".tex-previsao").innerHTML= dados.weather[0].description
    document.querySelector(".umidade").innerHTML= dados.main.humidity + "%"
    document.querySelector('img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`



}

 async function buscarcidade (cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta=> resposta.json())
    
  colocardadosnatela(dados)

}

function cliqueinobotao() {
    const cidade = document.querySelector(".input-cidade").value
   
    buscarcidade(cidade)
}