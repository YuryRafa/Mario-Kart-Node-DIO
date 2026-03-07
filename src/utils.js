
export async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;


}

export async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }
    
    return result
    
}

export async function logRollResult(characterName, block, diceResult, attribute){
        console.log(`${characterName} 🎲 rolou um dado de ${block} 
        ${diceResult} + ${attribute} = ${diceResult + attribute}\n`)     
}

export async function waitWithSpinner(ms){
    const frames = ["|", "/", "-", "\\"]
    let i = 0;

    const spinner = setInterval(() => {
        process.stdout.write(`\r ${frames[i++]}`);
        i %= frames.length;
    }, 100);

    await new Promise(resolve => setTimeout(resolve, ms));

    clearInterval(spinner);
    process.stdout.write("\rpronto!\n")
}




