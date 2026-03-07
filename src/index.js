import Characters from "./characters.js"
import { playRaceEngine, declareWinner} from "./playRace.js"
import readline from "readline"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function askQuestion(question){
    return new Promise((resolve) => {
        rl.question(question, resolve)
    })
};





(async function(){

    console.log("Escolha seu personagem\n")

    Characters.forEach((character, index) => {
        console.log(`${index} - ${character.nome}`);

    })

    const choosenCharacter1 = await askQuestion("Digite o número do personagem: ");

    const player1 = Characters[Number(choosenCharacter1)]

    if(!player1){
        console.log("Personagem inválido");
        rl.close();
        return
    }

    let player2

    do{
        player2 = Characters[Math.floor(Math.random()*Characters.length)]
    }while(player2 === player1)

    
    console.log(`🏁 Corrida entre ${player1.nome} e ${player2.nome}\n`)

   
    await playRaceEngine(player1,player2)
    await declareWinner(player1,player2)

    rl.close();

})()