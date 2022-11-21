# NodeJS - Criando sua Primeira Biblioteca

Curso da Alura sobre como utilizar o NodeJS e sua sintaxe básica

## Objetivo Final &#x1F3AF;

Utilizar as bibliotecas nativas do NodeJS e realizar a verificação de links ativos em artigos do site da Alura

URL do curso -> [NodeJS - Criando sua Primeira Biblioteca](https://cursos.alura.com.br/course/nodejs-criando-primeira-biblioteca)

![NodeJS - Criando sua Primeira Biblioteca](https://www.alura.com.br/assets/api/share/curso-nodejs-criando-primeira-biblioteca.png)

## Links Úteis &#x1F517;
* [NodeJS](https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript) - Site oficial do NodeJS.
* [ESM vs CJS](https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript) - Diferenças entre os 2 importadores de pacotes no Node.
* [Regex 101](https://regex101.com/) - Site para montar expressões regulares e testar as expressões feitas.
* [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions) - Site da MDN sobre expressões regulares.

***

## 01 - Criando um Projeto em NodeJS &#x1F516;
* Que o arquivo `package.json` é utilizado pelo Node.js para listar as dependências instaladas, além de informações sobre versão do programa, autoria e scripts.
* Que as dependências (também chamadas de *libs* ou bibliotecas) são pacotes de código pronto que outras pessoas da comunidade disponibilizam, e nós as utilizamos para executar tarefas específicas no código sem termos que reescrever do zero.
* Que para deixar o código mais organizado podemos usar ferramentas de *linting*, além da importância delas para reforçar estilo e também para prever possíveis bugs.

### 01 - Instalando Dependências
* Instalando um pacote com `npm`.
* Importar bibliotecas com `import` e as diferenças com `require`.
* Diferença entre **ESM** e **CJS**.

***

## 02 - Carregamento de Arquivos &#x1F516;
* Que podemos utilizar a lib `fs` (*File System*, ou sistema de arquivos) nativa do JavaScript para que o programa consiga acessar e ler arquivos do computador.
* Que conseguimos capturar mensagens de erro enviadas pelo Node.js quando algo no programa não sai como o esperado utilizando a palavra-chave `throw`, ou *lançar*.
* Que as “promessas” são a forma que o JavaScript utiliza para trabalhar com **código assíncrono** e que podemos resolvê-las utilizando em conjunto as palavras-chave `async` e `await` ou o método `.then()`.

### 01 - A lib fs
* Usar a biblioteca `fs` para mexer com arquivos.
    * Usar a função `readFile` para ler um arquivo.

### 02 - Tratamento de Erros
* Utilizar o objeto `Error` para criar um erro caso o arquivo não seja achado.

### 03 - Promessas
* Usar a função `fs.promises.readFile` para ler um arquivo utilizando o `promises` do **JavaScript**.
* Utilizar a função de callback `.then()` para executar algum código logo após a execução de uma função assíncrona.
* Usar a função `.catch()` para executar alguma função caso ocorra um erro.

### 04 - async e await
* Trabalhar com as palavras chave `async` e `await`.

***

## 03 - Capturando Links &#x1F516;
* Como utilizar expressões regulares, uma sintaxe feita para reconhecer padrões de texto, para capturar links e URLs.
* Como utilizamos classes e grupos de expressões regulares para refinar a busca por estes padrões, além dos métodos que o JavaScript tem (por exemplo `match` e `exec`) para trazer os resultados e trabalhar com eles.
* Manipular os resultados extraídos do texto através de expressões regulares e montar um objeto de retorno utilizando a sintaxe do JavaScript e desestruturação de objetos com o *spread operator* `...`.

### 01 - Expressões Regulares
* Usar o site do **Regex 101** para testar as expressões regulares.
* Utilizar expressões regulares para identificar links dentro de um arquivo.
    * Digitar algum caractere para identificar uma letra específica dentro de um texto, como: `a`, `b`, `c`...
    * Digitar os caracteres dentro de `[]` para verificar se existe algum caractere daqueles no texto: `[abc]`, `[abcde]`...
    * Usar o `^` para indicar negação de caracteres: `[^a] = Não contem a letra 'a'`, `[^abc] = Não contem nem 'a', 'b' ou 'c'`.
    * Usar intervalo de caracteres: `[a-z]`, `[A-z]`.
    * Pegar ocorrências de espaços em branco com: `\s`.
    * Usar `\` para escapar um caractere e identificar o *meta caractere* como uma ocorrência de texto.
    * Pegar todas as ocorrências de caractere com `\w`.
    * Pegar todas as ocorrências acima de 0 de determinada expressão com `*?`.

### 02 - Classes e Grupos
* Usar o `?` para dizer que o caractere pode ou não ocorrer.
* Usar express'ao regular para achar links de URL.

### 03 - Capturando Grupos
* Capturar as ocorrências do regex em um texto passado como parâmetro e retornar informações sobre as ocorrências.

### 04 - Retornando os Links
* Usar a função `matchAll()` para verificar as ocorrências de **regex** em uma string.
* Retornar um objeto através da função `map()`.
* Ler um arquivo e utilizar o regex para extrair os links dentro do arquivo.
* Usar bibliotecas JS para validação de formulários.

***

## 04 - Usando a Linha de Comando &#x1F516;
* A utilizar a interface de linha de comando e como aplicamos a lib `process` do Node.js para capturar e utilizar os dados informados no terminal em nosso código.
* A organizar o código separando em arquivos as funções que lidam com entrada e saída de dados das funções que processam os links.
* Como fazer estes diversos arquivos conversarem entre si através da exportação e importação de módulos com `import` e `export`.
* Que scripts são instruções que usamos para automatizar tarefas e como escrever nossos próprios scripts, incluí-los no arquivo de configuração `package.json` e utilizá-los para executar comandos no terminal.

### 01 - Executando Comandos
* Passar lista de argumentos pelo terminal CLI quando o comando `node` for digitado com `process.argv`.
* Usar o conceito de **import** e **export** para importar a função de ler arquivo para dentro da função que lê a lista de argumentos quando o comando `node` é executado.
* Diferenças entre **caminho absoluto** e **caminho relativo**.
    * OBS.: Quando o comando `node` for executado, o caminho que deve ser passado como parâmetro pela linha de comando deve ser **relativo** ao arquivo de texto `texto.md` de onde o comando `node` foi executado para o programa funcionar corretamente.

### 02 - Organizando Entradas e Saídas
* Delegar para o arquivo *`cli.js`* a função de listar os links encontrados no arquivo de texto.

### 03 - Processando Diretórios
* Usar a função `isFile()` do objeto `fs` para verificar se é um arquivo.
* Usar a função `isDirectory()` do objeto `fs` para verificar se é um diretório.
* Usar a função `fs.promises.readdir()` do objeto `fs` para listar todos os arquivos do diretório.
* Usar a palavra chave `async` e `await` dentro da função `forEach()`.

### 04 - Tratando Novos Erros
* Exibir uma mensagem de erro para o usuário caso o diretório não seja encontrado.

### 05 - Scripts
* Usar o comando `npm run SCRIPT` para executar um script que foi configurado na chave `scripts` no arquivo *`package.json`*.

***

## 05 - Validando Links &#x1F516;
* Como utilizar acessar URLs com a API `fetch` e manipular os dados devolvidos, como o código de status HTTP.
* Utilizar o método `Promise.all` para acessar de forma assíncrona um array de URLs e receber o resultado.
* Que a API `fetch` é baseada no conceito de **promessas** em JavaScript, e nessa aula vimos como utiliza o `async/await` para resolver as promessas e garantir que o código seja executado de forma assíncrona, retornando os resultados.

### 01 - Adicionando Opções
* Verificar se o parâmetro `--validate` foi passado como parâmetro e validar os links.

### 02 - Gerando uma Lista de URL's
* Usar um validador para extrair os links dos objetos através da função `Object.values()`.
* Converter os valores de um array para uma `string` com a função `join()`.

### 03 - Validando Links
* Usar o recurso novo do Node versão 18 que é o objeto `fetch`, que lida com requisições HTTP.
* Receber uma lista de promessas com a função `Promise.all()`.
* Retornar o status code de cada url nos arquivos de texto.

### 04 - Montando o Objeto
* Retornando um objeto com a url e o status da requisição da mesma url.
* Tratar o erro de uma url que não foi encontrada.
* Como publicar uma biblioteca no **NPM**.