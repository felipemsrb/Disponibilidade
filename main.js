let quartoSingle= 3;
let quartoTwin= 3;
let quartoTriplo= 3;



function reserva () {
    let formulario = document.getElementById("formulario");
   let quartoSelecionado = formulario.tipoquarto.value;
   let numeroDePessoas = formulario.pessoas.value;
   
   

   switch (quartoSelecionado) {
       case 'single': 
        quartoSingle--;
        break;

       case 'twin': 
        quartoTwin--;
        break;

       case 'triplo': 
        quartoTriplo--;
        break;

        default: alert('Selecione o tipo de quarto');
        return;
   }

   alert(`Sua reserva para ${numeroDePessoas} pessoas foi concluída. Agora temos ${quartoSingle} quartos singles, ${quartoTwin} quartos twins e ${quartoTriplo} quartos triplos`);
}


