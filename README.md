# João Victor Santos — Portfólio

Portfólio pessoal em HTML5, CSS3 e JavaScript puro. Sem build: abra o `index.html` no navegador.

## Como trocar o link do jogo

Abra o `script.js` e altere `gameUrl` no começo do arquivo:

```js
const CONFIG = {
    gameUrl: "https://playvictor15.github.io/game-geometrico/",
    email: "playv290@gmail.com"
};
```

Se ficar vazio, o botão do jogo aparece como "Link em breve" (sem link quebrado).

## O que tem

- Seções: Início, Sobre, Habilidades, Projetos e Contato
- Menu que destaca a seção visível e menu mobile com fechamento por clique fora ou `Esc`
- Formulário que abre o app de e-mail já preenchido, e botão para copiar o e-mail
- Acessibilidade: link "pular para o conteúdo", foco visível, `aria-*`, respeito a `prefers-reduced-motion`
- SEO: título, descrição, Open Graph e dados estruturados (JSON-LD)

## Estrutura

```
index.html   style.css   script.js   README.md
```

GitHub: [playvictor15](https://github.com/playvictor15)
