class Character {
    constructor(nome, velocidade, manobrabilidade, poder){
        this.nome = nome
        this.velocidade = velocidade
        this.manobrabilidade = manobrabilidade
        this.poder = poder
        this.pontos = 0
    }

}



const characters = [
    new Character("Mario",4,3,3),
    new Character("Luigi",3,4,4),
    new Character("Peach",3,5,2),
    new Character("Bowser",5,2,5),
    new Character("Yoshi",4,4,3),
    new Character("Toad",3,5,2)

];

export default characters