# Libras Academy

Site para aprender Libras praticando com a câmera: o navegador lê as mãos (MediaPipe Hands) e compara com o sinal escolhido. A IA Gemini gera os passos de qualquer palavra.

## Como usar
Abra `index.html` no Chrome (ou publique no GitHub Pages) e permita a câmera.

## Chave Gemini
Reconhecimento: ângulo das articulações, suavização por 5 quadros, orientação da mão e modo livre (sem palavra escolhida, mostra a letra mais provável). O botão "Verificar com IA" envia 4 quadros ao Gemini para avaliar sinais com movimento.

A chave **não** fica no código (o repositório é público). Cole-a na seção "Chave da API Gemini" da página; ela é guardada só no `localStorage` do seu navegador. Sem chave, o site soletra as palavras offline.
