Como vimos nesta aula, **expressões regulares** são objetos que mapeiam padrões de texto por meio de uma linguagem própria, com sintaxe e regras específicas. Elas são uma ferramenta eficiente para resolver problemas de código que envolvem padrões e buscas textuais.

Pode ser que você já conheça alguns dos **meta-chars** usados em expressões regulares sem saber. Por exemplo, quando procuramos no campo de busca do computador por qualquer arquivo de extensão `jpg` com `*.jpg`. É claro que as expressões regulares podem ir de muito simples até extremamente complexas, então você não precisa se preocupar em decorar todos os meta-chars ou como eles se comportam; sempre é possível consultar sites como [regex101](https://regex101.com/) ou o guia do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions).

Cada linguagem de programação desenvolve seu próprio interpretador de expressões regulares; no caso do JavaScript podemos usar `//` e salvar o padrão em uma variável, ou utilizar o construtor `new RegExp()`:

```javascript
const regex = /[a-zA-z\s]/;
```

ou

```javascript
let regex = new RegExp("[a-zA-z\s]");
```

Para trabalhar com as regex em nosso código, podemos utilizar alguns métodos próprios de string, como `matchAll()`, `search()`, `replace()`, `match()` e `split()`. Você pode consultar mais sobre estes métodos no [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#). Além disso, o JavaScript também tem alguns métodos próprios do objeto `RegExp`: `test()` e `exec()`. Você também pode ler a respeito deles [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp).