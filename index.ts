

const inputChoice:any = document.querySelector('#choice')
const form:any = document.querySelector('#form')
const containerCounter:any = document.querySelector('#countdownDisplay');
let totalSeconds:any;
let intervale:any;

function countDown(){
//    on détermine les minutes en fonction des seconde donc quand les seconde vont diminuer les minutes aussi
    let minutes = Math.floor(totalSeconds /60);
    // les secondes se feront 60 par 60
    let seconde = totalSeconds % 60;
    // si les seconde sont inférieur a 10 alors on rajoute un 0
    let sec = seconde < 10 ? "0" + seconde : seconde;

    containerCounter.innerHTML = `<span>${minutes}</span> :<span>${sec}</span> `

    if(totalSeconds > 0){
        totalSeconds--
    }else{
        containerCounter.innerHTML = `C'est terminé`;
        // on stop le set interval 
        clearInterval(intervale)
    }

}


form.addEventListener('submit',(e:any)=>{
e.preventDefault();

// verifier que l'utilisateur a bien inscrit un chiffre 
if(isNaN(inputChoice.value)){
    alert('Entrez un chiffre' )
}else{
totalSeconds = inputChoice.value * 60;
inputChoice.value ="";
// pour éviter l'accumulation des chronos on clear ensuite on lance le chrono
clearInterval(intervale)
 intervale = setInterval(countDown,100)
}
 


})



