Hoje em dia é praticamente impossível desenvolver programas sem **depender** de bibliotecas ou frameworks desenvolvidos por outras pessoas e empresas. Para facilitar o processo de baixar o código necessário e manter registros sobre quais códigos externos são usados em um projeto, são utilizados os *package managers* (gerenciadores de pacotes) como o NPM no caso do Node.js.

Pacotes, módulos, dependências. Para o NPM são pacotes, porém no `package.json` são dependências. Qual a diferença entre todos esses termos, afinal?

## Módulos e pacotes
Um módulo serve para encapsular uma determinada funcionalidade, normalmente uma ou mais funções, “escondendo” sua implementação do restante da aplicação e expondo somente o necessário para seu uso - por meio de uma função que pode ser exportada para outras partes do código, por exemplo.

Falamos com mais detalhes sobre o que são módulos [neste artigo](https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript).

Pacotes é como nos referimos aos módulos que são ou estão instalados em uma aplicação.

## Dependências
Como o próprio nome diz, implica **depender** de algo. No caso, o programa que está sendo executado *depende* de outros para funcionar.

Ou seja, usamos este termo para especificar quais são os pacotes dos quais um programa **depende** para funcionar. Então, quando falamos de dependências, estamos falando especificamente dos pacotes de terceiros que são utilizados por um programa.

Agora que esclarecemos um pouco mais os termos, você pode perceber que muitas vezes eles são utilizados de forma intercambiável.