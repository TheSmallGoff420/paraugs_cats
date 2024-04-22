//console.log(2)
let zina = document.querySelector('.zina');
let zinas = document.querySelector('.cataZina');
function sutitZinu()

{ 
    console.log ('function sutitZinu()darbojas');
    zinas.innterHTML = zinas.innerHTML+ '<br>'+zina.value;
    
}
function ieladetChataZinas()
{
    let datiNoServera=await fetch('chatazinas.txt');
    let dati =await datiNoServera.text;
    console.log(dati);
}