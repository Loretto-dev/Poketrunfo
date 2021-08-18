var pok1 = {
    nome:"Pikachu",
    imagem:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SM12/SM12_PT-BR_66.png",
    atributos:{
      Ataque: 71,
      Defesa: 67,
      Especial: 88
    }
  }
  var pok2 = {
    nome:"Charmander",
    imagem:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SWSH4/SWSH4_PT-BR_23.png",
    atributos:{
      Ataque: 79,
      Defesa: 48,
      Especial: 85
    }
  }
  var pok3 = {
    nome:"Bulbasaur",
    imagem:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SM35/SM35_PT-BR_1.png",
    atributos:{
      Ataque: 66,
      Defesa: 74,
      Especial: 91
    }
  }
  var pok4 = {
    nome:"Squirtle",
    imagem:"https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SM9/SM9_PT-BR_22.png",
    atributos:{
       Ataque: 59,
       Defesa: 86,
       Especial: 65
    }
  }
  
  var cartaMaquina
  var cartaJogador
  var cartas = [pok1, pok2, pok3, pok4];
                //   0                1              2               3
  var imagens
  
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 4);
    cartaMaquina = cartas[numeroCartaMaquina];
    
    var numeroCartaJogador = parseInt(Math.random() * 4);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 4);
    }
    
    cartaJogador = cartas[numeroCartaJogador];
    imagens = cartas[numeroCartaJogador].imagem
    console.log(cartaJogador)
  
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    exibirOpcoes()
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
      opcoesTexto += "<table border=1 align=center> <tr><td><img class=poke src='" + imagens + "'></td></tr>"
    for( var atributo in cartaJogador.atributos){
      opcoesTexto += "<input type= 'radio' name='atributo' value='" + atributo +"'>" + atributo
    }
    opcoesTexto += "</table>"
    opcoes.innerHTML = opcoesTexto
  }
  
  function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++){
      if (radioAtributo[i].checked){
        return radioAtributo[i].value
      }
    }
  }
  
  function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
          alert('Seu Pokémon venceu!')
    }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
          alert('Seu Pokémon perdeu!')
    }else{
      alert('Empatou')
    }
    console.log(cartaMaquina)
  }
  