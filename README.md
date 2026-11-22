# Libras Academy

Site interativo para estudar Libras com a câmera. Tudo roda no navegador, sem chave de API e sem servidor.

**Site:** https://jornalolhe.github.io/libras_academy/

## O que faz

- **Rastreio completo (543 pontos):** mãos (21×2), rosto (468) e corpo (33) com MediaPipe Holistic.
- **Frases, não só soletrar:** digite "meu nome é Ana" ou "você quer beber água?" e o site monta a sequência de sinais (MEU, NOME, A-N-A). Só nomes e palavras fora do dicionário são soletrados.
- **Sinais com movimento, local e expressão:** cada passo confere formato dos dedos, local do corpo (testa, boca, queixo, peito), movimento (círculo, balanço, vertical, frente), aceno de cabeça e expressão facial (sobrancelhas, franzir, sorriso). Perguntas exigem a expressão correta.
- **Boneco guia animado** mostra mão, local e movimento; alfabeto A–Z com mão desenhada em detalhe.
- **Calibração pessoal:** botão "Gravar meu gesto" salva o seu formato de mão no navegador (localStorage) para aumentar a precisão.
- **Modo livre:** a câmera tenta identificar a letra que você faz.

## Limites

Ferramenta de apoio ao estudo. As descrições dos sinais são aproximadas e devem ser conferidas com professores e comunidades surdas. Letras com movimento (J, Z) e semelhantes (M, N, S, T) podem exigir calibração.

## Rodar localmente

Abra `index.html` (a câmera exige HTTPS ou localhost).
