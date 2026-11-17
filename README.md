
# Roleta-do-DEV

**Aprenda praticando. Desafie-se. Evolua como desenvolvedor!**

O **Roleta-do-DEV** é uma aplicação Full Stack desenvolvida para incentivar a prática de programação por meio de desafios aleatórios personalizados de acordo com a linguagem de programação e o nível de dificuldade selecionados pelo usuário.

A aplicação disponibiliza um catálogo com **3.600 exercícios**, distribuídos entre seis linguagens de programação e seis níveis de dificuldade.

Ao girar a roleta, o usuário recebe um desafio compatível com as opções selecionadas, contendo título, categoria, enunciado, dica e tempo estimado para resolução, acompanhado de um cronômetro regressivo.

O projeto começou como uma aplicação desenvolvida com HTML5, CSS3 e JavaScript e evoluiu para uma arquitetura baseada em **React, TypeScript, Node.js, Express, Prisma ORM e PostgreSQL**, consolidando conhecimentos em desenvolvimento Full Stack.

## Demonstração online

https://roleta-do-dev.netlify.app/

## Preview

![Roleta-do-DEV - Interface da aplicação](./frontend/src/assets/images.png)

## Funcionalidades

### Implementadas

**Front-End**

- Interface com tema escuro e detalhes em verde-limão.
- Seleção de linguagem de programação:
  - JavaScript.
  - Python.
  - Java.
  - C#.
  - C++.
  - PHP.
- Seleção do nível de dificuldade:
  - Iniciante.
  - Estagiário.
  - Júnior.
  - Pleno.
  - Sênior.
  - Mas que P@#...
- Exibição dinâmica do desafio sorteado.
- Apresentação do título, categoria, enunciado e dica do exercício.
- Temporizador regressivo baseado no tempo estimado de cada desafio.
- Atualização do cronômetro a cada segundo utilizando `setInterval()`.
- Gerenciamento de estados com `useState`.
- Utilização de `useEffect` para controlar o ciclo de execução do temporizador.
- Limpeza de intervalos com `clearInterval()`.
- Organização da interface em componentes reutilizáveis com React.
- Tipagem dos dados e propriedades utilizando TypeScript.
- Estilização com Tailwind CSS.
- Configuração de variáveis de ambiente para comunicação com a API.

**Back-End**

- Servidor desenvolvido com Node.js e Express.
- API REST para consulta e sorteio de desafios.
- Integração com banco de dados PostgreSQL.
- Utilização do Prisma ORM para consultas ao banco de dados.
- Modelagem dos desafios por linguagem e dificuldade.
- Consulta de desafios utilizando `findMany()`.
- Sorteio aleatório de exercícios diretamente no banco de dados.
- Utilização de consultas SQL com Prisma por meio de `$queryRaw`.
- Utilização de `ORDER BY RANDOM()` e `LIMIT 1` para selecionar um desafio aleatório.
- Tratamento de situações em que não existem desafios disponíveis.
- Retorno de dados no formato JSON.
- Utilização de códigos de status HTTP.
- Configuração de CORS para permitir a comunicação entre Front-End e Back-End.

**Integração e publicação**

- Comunicação entre React e Express utilizando `fetch()`.
- Utilização de `async/await` para trabalhar com requisições assíncronas.
- Tratamento de erros com `try/catch`.
- Verificação de respostas HTTP com `response.ok`.
- Conversão das respostas da API utilizando `response.json()`.
- Atualização do desafio exibido e do cronômetro com os dados recebidos do Back-End.
- Configuração de variáveis de ambiente para definir a URL da API.
- Publicação do Front-End no Netlify.
- Integração do repositório GitHub com o processo de deploy.
- Configuração de CORS para permitir requisições da aplicação publicada e do ambiente local.

### Planejadas

- Implementar um sistema de cadastro e login de usuários.
- Desenvolver um sistema de pontuação para incentivar a resolução dos desafios.
- Permitir o acompanhamento da evolução e do desempenho dos usuários.

**Status do projeto:** aplicação funcional e publicada. O Front-End está hospedado no Netlify e integrado à API REST, que utiliza PostgreSQL e Prisma ORM para consultar e sortear os exercícios.

As próximas evoluções serão voltadas à implementação de um sistema de usuários e de pontuação.

## Tecnologias utilizadas

### Front-End

- **React:** construção da interface e organização dos componentes reutilizáveis.
- **TypeScript:** tipagem estática dos dados, propriedades e estados da aplicação.
- **Tailwind CSS:** estilização dos elementos por meio de classes utilitárias.
- **Vite:** ambiente de desenvolvimento e construção da aplicação.
- **Fetch API:** comunicação com o Back-End por meio de requisições HTTP.

### Back-End

- **Node.js:** ambiente de execução JavaScript no servidor.
- **Express:** criação do servidor e gerenciamento das rotas da API REST.
- **JavaScript:** implementação da lógica de consulta e sorteio dos desafios.
- **Prisma ORM:** comunicação com o banco de dados e execução de consultas.
- **PostgreSQL:** banco de dados relacional utilizado para armazenar os desafios.
- **CORS:** configuração da comunicação entre diferentes origens.
- **SQL:** utilização de consultas para realizar o sorteio aleatório dos exercícios.

### Ferramentas e serviços

- **Git:** controle de versão.
- **GitHub:** armazenamento e versionamento do código-fonte.
- **Netlify:** hospedagem e publicação do Front-End.
- **npm:** gerenciamento de dependências.
- **Visual Studio Code:** ambiente de desenvolvimento.

## Funcionamento da aplicação

O funcionamento da Roleta do DEV envolve a comunicação entre o Front-End, o Back-End e o banco de dados PostgreSQL.

1. O usuário seleciona uma linguagem de programação.
2. Seleciona o nível de dificuldade desejado.
3. Ao clicar no botão para girar a roleta, o React executa uma função assíncrona.
4. A aplicação realiza uma requisição HTTP utilizando `fetch()`.
5. A requisição é direcionada à API Express, informando a linguagem e a dificuldade selecionadas.
6. O Back-End recebe os parâmetros da rota.
7. O Prisma ORM realiza a consulta ao banco de dados PostgreSQL.
8. Uma consulta SQL realiza o sorteio aleatório de um exercício correspondente aos filtros selecionados.
9. O desafio selecionado é retornado pela API no formato JSON.
10. O Front-End recebe a resposta e atualiza o estado da aplicação.
11. O exercício, a dica e o cronômetro são apresentados dinamicamente na interface.

### Rotas da API

**Consultar todos os desafios**

```http
GET /desafios
```

Retorna todos os desafios cadastrados no banco de dados.

**Consultar desafios por linguagem e dificuldade**

```http
GET /desafios/:linguagem/:dificuldade
```

Retorna os desafios correspondentes aos parâmetros informados.

**Sortear um desafio**

```http
GET /desafios/:linguagem/:dificuldade/sortear
```

Realiza o sorteio de um desafio aleatório de acordo com a linguagem e a dificuldade selecionadas.

## Organização do Back-End

O Back-End utiliza Node.js e Express para disponibilizar os endpoints da API REST, enquanto o Prisma ORM realiza a comunicação com o PostgreSQL.

### Funções e responsabilidades principais

**Prisma Client**

Utilizado para executar consultas ao banco de dados por meio do modelo `Challenge`.

**findMany()**

Realiza consultas aos desafios cadastrados, permitindo recuperar todos os registros ou filtrar os resultados de acordo com a linguagem e a dificuldade.

**$queryRaw**

Executa uma consulta SQL parametrizada para realizar o sorteio aleatório de um desafio.

A consulta utiliza:

- `SELECT *`: seleciona os dados do desafio.
- `WHERE`: filtra pela linguagem e dificuldade.
- `ORDER BY RANDOM()`: organiza os resultados aleatoriamente.
- `LIMIT 1`: retorna apenas um desafio.

**server.js**

Responsável por:

- Inicializar o servidor Express.
- Configurar os middlewares.
- Configurar o CORS.
- Disponibilizar as rotas da API.
- Realizar consultas ao banco de dados.
- Tratar erros e retornar respostas HTTP.

## Organização do Front-End

A interface foi desenvolvida com React e organizada em componentes reutilizáveis.

- **Header:** apresentação da identidade visual, nome e versão da aplicação.
- **SeletorDesafio:** disponibiliza os campos de seleção de linguagem e dificuldade e o botão para iniciar o sorteio. Recebe os valores atuais e comunica as alterações ao componente principal por meio de callbacks.
- **ResultadoDesafio:** apresenta o desafio sorteado, a dica e o temporizador. Recebe o desafio e o tempo restante por meio de Props.
- **Footer:** apresentação das informações de identificação e dos créditos do projeto.
- **App:** componente principal responsável por organizar os componentes, gerenciar os estados, realizar a requisição à API e controlar o temporizador.

Os componentes se comunicam por meio de Props e callbacks, enquanto o componente principal mantém os estados compartilhados da aplicação.

## Temporizador

O temporizador regressivo utiliza o tempo estimado de cada exercício, armazenado em minutos no banco de dados.

Ao receber um desafio da API, o Front-End converte o tempo estimado para segundos e atualiza o estado `tempoRestante`.

A implementação utiliza:

- **useState:** armazenamento e atualização do tempo restante.
- **useEffect:** execução do efeito quando o valor de `tempoRestante` é alterado.
- **setInterval():** decremento do contador a cada segundo.
- **clearInterval():** limpeza do intervalo anterior.
- **Math.floor() e operador módulo (%):** conversão dos segundos restantes para minutos e segundos.
- **padStart():** formatação dos valores para apresentar o temporizador no formato MM:SS.

## Estrutura dos dados

Os exercícios estão armazenados no banco de dados PostgreSQL e são acessados por meio do Prisma ORM.

Cada desafio possui informações como:

- Identificador.
- Título.
- Categoria.
- Descrição.
- Dica.
- Tempo estimado.
- Linguagem de programação.
- Nível de dificuldade.

A estrutura dos dados é definida por meio do modelo `Challenge`, utilizado pelo Prisma para representar os registros armazenados no banco de dados.

Atualmente, os exercícios são consultados diretamente no PostgreSQL, sem necessidade de carregar arquivos JSON durante a execução da aplicação.

## Configuração do ambiente

O projeto utiliza variáveis de ambiente para configurar a comunicação entre os serviços.

### Front-End

Na pasta `frontend/`, configure o arquivo `.env.local`:

```env
VITE_API_URL=http://localhost:3000
```

Na aplicação publicada, a variável `VITE_API_URL` deve apontar para a URL pública do Back-End.

### Back-End

O Back-End utiliza a variável `DATABASE_URL` para configurar a conexão com o PostgreSQL.

O arquivo `.env` deve conter a URL de conexão do banco de dados.

**Importante:** os arquivos `.env`, `.env.local` e demais arquivos com credenciais não devem ser enviados ao GitHub.

## Como executar o projeto

É necessário ter o Node.js, o npm e um banco de dados PostgreSQL configurados.

### 1. Clonar o repositório

```bash
git clone https://github.com/GuilhermePerobelliZambolim/roleta-do-dev.git
```

### 2. Instalar as dependências do Back-End

```bash
cd roleta-do-dev/backend
npm install
```

### 3. Configurar o banco de dados

Configure a variável `DATABASE_URL` no arquivo `.env` do Back-End, utilizando as credenciais do seu PostgreSQL.

Verifique também se o Prisma está configurado corretamente para acessar o banco de dados.

### 4. Iniciar o servidor Back-End

```bash
node server.js
```

O servidor será iniciado na porta 3000, caso nenhuma outra porta seja definida pela variável `PORT`.

### 5. Instalar as dependências do Front-End

Abra outro terminal:

```bash
cd roleta-do-dev/frontend
npm install
```

### 6. Configurar a URL da API

Crie o arquivo `.env.local` dentro da pasta `frontend/`:

```env
VITE_API_URL=http://localhost:3000
```

### 7. Iniciar o Front-End

```bash
npm run dev
```

Acesse o endereço disponibilizado pelo Vite no terminal, normalmente:

```text
http://localhost:5173
```

Com os dois serviços em execução e o banco de dados configurado, o Front-End poderá realizar requisições à API local.

## Estrutura do projeto

```text
roleta-do-dev/
├── backend/
│   ├── database/
│   │   └── prisma.js
│   ├── prisma/
│   │   └── schema.prisma
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── ResultadoDesafio.tsx
│   │   │   └── SeletorDesafio.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── types.ts
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.ts
├── versao-antiga/
│   ├── index.html
│   └── index.css
└── README.md
```

**Observação:** a estrutura apresentada destaca os principais arquivos do projeto. Outros arquivos de configuração e dependências podem existir nas respectivas pastas.

A pasta `versao-antiga/` preserva os arquivos da versão original do projeto, desenvolvida antes da migração para React.

## Publicação

O Front-End da aplicação está publicado no Netlify e integrado ao repositório GitHub.

A publicação permite que os usuários acessem a interface diretamente pelo navegador.

**Site:** https://roleta-do-dev.netlify.app/

A comunicação entre o Front-End publicado e o Back-End depende da configuração correta da variável `VITE_API_URL` e das origens permitidas pelo CORS.

## Objetivo do projeto

O objetivo do Roleta-do-DEV é incentivar a prática constante de programação, oferecendo desafios que estimulem o raciocínio lógico, a resolução de problemas e o desenvolvimento da autonomia como programador.

O projeto faz parte da minha jornada de aprendizado em desenvolvimento Web e surgiu da vontade de construir uma aplicação própria, que pudesse evoluir junto com meus conhecimentos, desde a construção da interface até a implementação de um Back-End e a integração com um banco de dados.

Durante o desenvolvimento, procuro aplicar e consolidar os conhecimentos adquiridos nos estudos, especialmente durante minha formação na **OneBitCode**.

Entre os principais conhecimentos trabalhados estão:

- Desenvolvimento de interfaces com React.
- Utilização de TypeScript e tipagem de dados.
- Criação e reutilização de componentes.
- Gerenciamento de estados com `useState`.
- Comunicação entre componentes por meio de Props e callbacks.
- Manipulação de arrays e objetos.
- Criação de funções e separação de responsabilidades.
- Manipulação de estados e efeitos com `useEffect`.
- Controle de intervalos utilizando `setInterval()` e `clearInterval()`.
- Criação de APIs REST com Node.js e Express.
- Comunicação entre Front-End e Back-End utilizando `fetch()`.
- Programação assíncrona com `async/await`.
- Tratamento de erros com `try/catch`.
- Integração com banco de dados PostgreSQL.
- Utilização do Prisma ORM.
- Execução de consultas SQL.
- Configuração de CORS.
- Gerenciamento de variáveis de ambiente.
- Publicação de aplicações com Netlify.
- Organização e versionamento do projeto utilizando Git e GitHub.

## Autor

**Guilherme Perobelli Zambolim**

- [GitHub](https://github.com/GuilhermePerobelliZambolim)
