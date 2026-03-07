import { rollDice, getRandomBlock, logRollResult, waitWithSpinner } from "./utils.js"

export async function playRaceEngine(character1, character2){

    for(let round = 1; round <= 5; round++){

        console.log(`🏁 Rodada ${round}`)

        // sortear bloco
        const block = await getRandomBlock()

        console.log(`Bloco sorteado: ${block}\n`)

        // rolar dados
        const diceResult1 = await rollDice()
        const diceResult2 = await rollDice()

        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

       
        if(block === "RETA"){

            totalTestSkill1 = diceResult1 + character1.velocidade
            totalTestSkill2 = diceResult2 + character2.velocidade

            await logRollResult(
                character1.nome,
                "velocidade",
                diceResult1,
                character1.velocidade
            )

            await logRollResult(
                character2.nome,
                "velocidade",
                diceResult2,
                character2.velocidade
            )

        }

       
        if(block === "CURVA"){

            totalTestSkill1 = diceResult1 + character1.manobrabilidade
            totalTestSkill2 = diceResult2 + character2.manobrabilidade

            await logRollResult(
                character1.nome,
                "manobrabilidade",
                diceResult1,
                character1.manobrabilidade
            )

            await logRollResult(
                character2.nome,
                "manobrabilidade",
                diceResult2,
                character2.manobrabilidade
            )

        }

        
        if(block === "CONFRONTO"){

            const powerResult1 = diceResult1 + character1.poder
            const powerResult2 = diceResult2 + character2.poder

            console.log(`${character1.nome} confrontou com ${character2.nome} 🥊\n`)

            await logRollResult(
                character1.nome,
                "poder",
                diceResult1,
                character1.poder
            )

            await logRollResult(
                character2.nome,
                "poder",
                diceResult2,
                character2.poder
            )

            if(powerResult1 > powerResult2 && character2.pontos > 0){

                console.log(`${character1.nome} VENCEU O CONFRONTO! ${character2.nome} perdeu um ponto 🐢\n`)
                character2.pontos--

            } else if(powerResult2 > powerResult1 && character1.pontos > 0){

                console.log(`${character2.nome} VENCEU O CONFRONTO! ${character1.nome} perdeu um ponto 🐢\n`)
                character1.pontos--

            } else {

                console.log("Confronto empatado! Nenhum ponto perdido.\n")

            }

        }

        
        if(block !== "CONFRONTO"){

            if(totalTestSkill1 > totalTestSkill2){

                console.log(`${character1.nome} MARCOU UM PONTO ✅\n`)
                character1.pontos++

            } else if(totalTestSkill2 > totalTestSkill1){

                console.log(`${character2.nome} MARCOU UM PONTO ✅\n`)
                character2.pontos++

            } else {

                console.log("Empate! Nenhum ponto foi marcado.\n")

            }

        }

        // pausa entre rodadas
        if(round < 5){

            console.log("Indo para a próxima rodada...")
            await waitWithSpinner(10000)

        }

    }

}

export async function declareWinner(character1, character2){

    console.log("\n🏁 Resultado Final:")
    console.log(`${character1.nome}: ${character1.pontos} ponto(s)`)
    console.log(`${character2.nome}: ${character2.pontos} ponto(s)\n`)

    if(character1.pontos > character2.pontos){
        console.log(`🏆 ${character1.nome} venceu a corrida!`)

    } else if(character2.pontos > character1.pontos){
        console.log(`🏆 ${character2.nome} venceu a corrida!`)

    } else{
        console.log(" A corrida terminou em empate!")
    }

}
