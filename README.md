# 🏁  Simulador de Corridas do Mario Kart com Node.js DIO

Um pequeno programa inspirado no universo de Mario Kart, desenvolvido em **Node.js** para praticar conceitos de **JavaScript assíncrono, lógica de programação e manipulação de terminal**.

Dois personagens competem em uma corrida de 5 rodadas. A cada rodada, um tipo de bloco da pista é sorteado e os jogadores disputam utilizando atributos diferentes.

## 🎮 Como funciona

A corrida acontece em 5 rodadas.

Em cada rodada:

1. Um tipo de bloco da pista é sorteado aleatoriamente:
   - **RETA** → usa o atributo **velocidade**
   - **CURVA** → usa o atributo **manobrabilidade**
   - **CONFRONTO** → usa o atributo **poder**

2. Cada personagem rola um **dado de 6 lados**.

3. O valor do dado é somado ao atributo correspondente.

4. O jogador com maior resultado:
   - marca **1 ponto** (em RETA ou CURVA)
   - ou faz o adversário **perder 1 ponto** (em CONFRONTO)

5. Se os valores forem iguais, ocorre **empate na rodada**.

Ao final das rodadas, o jogador com mais pontos vence a corrida. 

