# Explicação do Código do Site Trio Tech

Este documento explica de forma simples os códigos utilizados para criar o site da Trio Tech, para que qualquer pessoa sem conhecimento técnico possa entender.

## 1. HTML (index.html)

O HTML é como o esqueleto do site, definindo sua estrutura básica. Pense nele como a planta de uma casa.

### Principais elementos:

- **`<!DOCTYPE html>`**: Informa ao navegador que estamos usando HTML5, a versão mais recente.
- **`<html lang="pt-BR">`**: Define que o site está em português do Brasil.
- **`<head>`**: Contém informações sobre o site que não são visíveis diretamente, como título, descrição e links para outros arquivos.
- **`<body>`**: Contém todo o conteúdo visível do site.
- **`<header>`**: A parte superior do site com o logo e menu de navegação.
- **`<main>`**: O conteúdo principal do site.
- **`<section>`**: Divide o conteúdo em seções diferentes (como "Sobre Nós", "Serviços", etc.).
- **`<footer>`**: A parte inferior do site com informações de contato e links adicionais.

### Elementos de acessibilidade:

- **`<a href="#main-content" class="sr-only focus:not-sr-only">`**: Um link invisível que permite que pessoas usando teclado ou leitores de tela pulem direto para o conteúdo principal, sem precisar navegar por todo o menu.
- **`aria-label`**, **`aria-labelledby`**, **`aria-hidden`**: Atributos especiais que ajudam leitores de tela a entender melhor o conteúdo.
- **`role`**: Define a função de um elemento para tecnologias assistivas.

## 2. CSS (styles.css)

O CSS é responsável pela aparência visual do site. É como a pintura, decoração e acabamento de uma casa.

### Principais elementos:

- **`.container`**: Define uma área com largura máxima para o conteúdo.
- **`.bg-primary`**, **`.text-white`**: Classes que definem cores de fundo e texto.
- **`.flex`**, **`.grid`**: Sistemas de layout para organizar elementos na página.
- **`.rounded-lg`**, **`.shadow-lg`**: Adicionam cantos arredondados e sombras aos elementos.
- **`@media`**: Regras que mudam o layout dependendo do tamanho da tela (responsividade).

### Elementos de acessibilidade:

- **`.sr-only`**: Torna elementos visíveis apenas para leitores de tela, não para usuários visuais.
- **`a:focus, button:focus`**: Estilos que destacam elementos quando recebem foco pelo teclado.
- **`@media (prefers-reduced-motion: reduce)`**: Desativa animações para pessoas que preferem menos movimento na tela.
- **`@media (forced-colors: active)`**: Ajusta cores para o modo de alto contraste.

## 3. JavaScript (main.js)

O JavaScript adiciona interatividade ao site. É como a eletricidade e os sistemas que fazem a casa funcionar.

### Principais funcionalidades:

- **Menu mobile**: Faz o menu aparecer/desaparecer quando o botão é clicado em telas pequenas.
- **Carrossel de depoimentos**: Permite navegar entre os diferentes depoimentos de clientes.
- **Validação de formulário**: Verifica se os campos obrigatórios foram preenchidos corretamente.

### Elementos de acessibilidade:

- **Navegação por teclado**: Permite usar o teclado para interagir com todos os elementos.
- **Mensagens de erro acessíveis**: Informa erros de formulário de forma que leitores de tela possam entender.
- **ARIA live regions**: Áreas que anunciam mudanças dinâmicas para usuários de leitores de tela.

## 4. Tailwind CSS

O Tailwind é uma ferramenta que facilita a criação de estilos CSS usando classes predefinidas. Em vez de escrever CSS do zero, usamos classes como:

- **`text-3xl`**: Define o tamanho do texto como extra grande.
- **`font-bold`**: Torna o texto em negrito.
- **`py-4`**: Adiciona espaçamento vertical (padding).
- **`rounded-full`**: Faz um elemento completamente redondo.

## 5. Font Awesome

Font Awesome fornece ícones para o site, como:

- **`<i class="fas fa-tools">`**: Ícone de ferramentas
- **`<i class="fas fa-phone-alt">`**: Ícone de telefone
- **`<i class="fab fa-whatsapp">`**: Ícone do WhatsApp

## Melhorias de Acessibilidade Implementadas

1. **Estrutura semântica**: Uso correto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.
2. **Navegação por teclado**: Todos os elementos interativos podem ser acessados e operados usando apenas o teclado.
3. **Textos alternativos**: Todas as imagens têm descrições para pessoas que não podem vê-las.
4. **Contraste de cores**: Melhoramos o contraste para facilitar a leitura.
5. **Formulários acessíveis**: Campos corretamente rotulados e com instruções claras.
6. **Skip link**: Permite pular direto para o conteúdo principal.
7. **ARIA**: Atributos que melhoram a experiência para usuários de leitores de tela.
8. **Responsividade**: O site funciona bem em qualquer tamanho de tela.
9. **Redução de movimento**: Opção para desativar animações.
10. **Modo de alto contraste**: Suporte para pessoas que usam este modo.

Estas melhorias garantem que o site seja utilizável por todas as pessoas, incluindo aquelas com deficiências visuais, motoras, auditivas ou cognitivas.
