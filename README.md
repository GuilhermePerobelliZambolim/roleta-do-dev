# Roleta-do-DEV

**Aprenda praticando. Desafie-se. Evolua como desenvolvedor!**

O **Roleta-do-DEV** é uma aplicação web desenvolvida para incentivar a prática de programação por meio de desafios personalizados de acordo com a linguagem de programação e o nível de dificuldade selecionados pelo usuário.

A aplicação permite escolher uma linguagem e um nível de dificuldade e, ao girar a roleta, recebe aleatoriamente um exercício compatível com as opções selecionadas. Cada desafio apresenta um enunciado, uma dica e um tempo estimado para resolução, acompanhado de um temporizador regressivo.

O projeto surgiu como uma aplicação desenvolvida inicialmente com HTML5, CSS3 e JavaScript e está passando por uma migração para uma arquitetura baseada em **React e TypeScript**, com o objetivo de aprofundar os conhecimentos em desenvolvimento Front-End e, futuramente, evoluir para uma aplicação Full Stack.

## Demonstração online

Em desenvolvimento.

## Preview

![Roleta-do-DEV - Interface da aplicação](../roleta-do-dev/frontend/public/images.png)

## Funcionalidades

**Implementadas**

- Interface com tema escuro e detalhes em verde-limão.
- Identidade visual preservada durante a migração para React.
- Seleção da linguagem de programação:
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
- Filtragem dos desafios de acordo com a linguagem e a dificuldade selecionadas.
- Sorteio aleatório de exercícios utilizando Math.random() e Math.floor().
- Verificação da disponibilidade de desafios para a combinação selecionada.
- Exibição dinâmica do enunciado e da dica do exercício sorteado.
- Temporizador regressivo baseado no tempo estimado de cada desafio.
- Atualização do temporizador a cada segundo utilizando setInterval().
- Gerenciamento de estados com useState.
- Utilização de useEffect para controlar o ciclo de execução do temporizador.
- Limpeza de intervalos com clearInterval() para evitar a execução simultânea de temporizadores.
- Organização da interface em componentes reutilizáveis com React.
- Tipagem dos dados e propriedades utilizando TypeScript.
- Estilização com Tailwind CSS.

**Planejadas**

- Expandir o banco de desafios, com a meta de aproximadamente 3.600 exercícios distribuídos entre as 36 combinações de linguagem e dificuldade.
- Implementar controles para iniciar, pausar e reiniciar o temporizador.
- Melhorar o tratamento de combinações sem desafios disponíveis.
- Aprimorar a responsividade para dispositivos móveis.
- Implementar histórico de exercícios sorteados.
- Evitar a repetição de desafios já realizados.
- Permitir marcar desafios como concluídos.
- Desenvolver uma API REST com Node.js.
- Implementar persistência dos exercícios em um banco de dados SQL utilizando Prisma ORM.
- Integrar o Front-End com o Back-End.
- Explorar funcionalidades de pontuação e acompanhamento de progresso.

**Status do projeto:** em desenvolvimento. A migração da interface original para React e TypeScript já foi iniciada. A seleção de linguagem e dificuldade, o sorteio aleatório de desafios e o temporizador regressivo estão implementados. As próximas etapas estão concentradas na evolução da interface, organização da aplicação e desenvolvimento da estrutura Back-End.

## Tecnologias utilizadas

- **React:** construção da interface e organização dos componentes reutilizáveis.
- **TypeScript:** tipagem estática dos dados, propriedades e estados da aplicação.
- **Tailwind CSS:** estilização dos elementos diretamente no JSX por meio de classes utilitárias.
- **Vite:** ambiente de desenvolvimento, inicialização da aplicação e integração das ferramentas do projeto.
- **JavaScript:** utilização dos recursos da linguagem para manipulação de arrays, sorteio aleatório e controle do temporizador.

## Funcionamento do sorteio

O sorteio dos desafios acontece a partir de uma sequência de operações:

1. O usuário seleciona uma linguagem de programação.
2. Seleciona o nível de dificuldade desejado.
3. Ao clicar no botão para girar a roleta, a aplicação utiliza filter() para localizar os exercícios compatíveis com as opções selecionadas.
4. A aplicação verifica se existem desafios disponíveis para aquela combinação.
5. Math.random() e Math.floor() são utilizados para gerar um índice aleatório.
6. O índice permite recuperar um desafio do array filtrado.
7. O desafio sorteado é armazenado no estado da aplicação por meio de setDesafio().
8. A interface é atualizada dinamicamente para apresentar o enunciado, a dica e o temporizador.

## Temporizador

O temporizador regressivo utiliza o tempo estimado de cada exercício, armazenado em minutos no banco de desafios.

Para realizar a contagem, o valor é convertido para segundos e armazenado no estado tempoRestante.

A implementação utiliza:

- **useState:** armazenamento e atualização do tempo restante.
- **useEffect:** execução do efeito quando o valor de tempoRestante é alterado.
- **setInterval():** decremento do contador a cada segundo.
- **clearInterval():** limpeza do intervalo anterior para evitar a manutenção de múltiplos intervalos ativos.
- **Math.floor() e operador módulo (%):** conversão dos segundos restantes para minutos e segundos.
- **padStart():** formatação dos valores para apresentar o temporizador no formato MM:SS.

## Organização dos componentes

- **Header:** apresentação da identidade visual, nome e versão da aplicação.
- **SeletorDesafio:** disponibiliza os campos de seleção de linguagem e dificuldade e o botão para iniciar o sorteio. Recebe os valores atuais e comunica as alterações ao componente principal por meio de callbacks.
- **ResultadoDesafio:** apresenta o enunciado, a dica e o temporizador do exercício sorteado. Recebe o desafio e o tempo restante por meio de Props.
- **Footer:** apresentação das informações de identificação e dos créditos do projeto.
- **App:** componente principal responsável por organizar os demais componentes, gerenciar os estados da aplicação, realizar o sorteio e controlar o temporizador.

Os componentes se comunicam por meio de Props e callbacks, enquanto o componente principal mantém os estados compartilhados da aplicação.

## Organização dos dados

O projeto utiliza arquivos auxiliares para organizar os tipos e os dados dos exercícios:

- **types.ts:** definição dos tipos Linguagem, Dificuldade e Desafio, utilizados para padronizar as informações e garantir a tipagem estática da aplicação.
- **desafios.ts:** armazenamento inicial dos exercícios em um array de objetos. Cada desafio possui identificador, linguagem, dificuldade, enunciado, dica e tempo estimado para resolução.

A estrutura atual utiliza dados estáticos para facilitar o desenvolvimento e os testes da lógica de sorteio. Futuramente, esses dados serão armazenados em um banco de dados e disponibilizados por meio de uma API REST.

## Como executar o projeto

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto no editor de código.
3. Abra o terminal dentro da pasta frontend.
4. Instale as dependências:

```bash
npm install
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

6. Acesse o endereço disponibilizado pelo Vite no terminal.

## Estrutura do projeto

```text
roleta-do-dev/
├── frontend/
│   ├── public/
│   │   └── images.png
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── ResultadoDesafio.tsx
│   │   │   └── SeletorDesafio.tsx
│   │   ├── data/
│   │   │   └── desafios.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── types.ts
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── versao-antiga/
│   ├── index.html
│   └── index.css
└── README.md
```

**Observação:** a pasta versao-antiga/ preserva os arquivos HTML e CSS da versão original do projeto, desenvolvida antes da migração para React.

## Objetivo do projeto

O objetivo do Roleta-do-DEV é incentivar a prática constante de programação, oferecendo desafios que estimulem o raciocínio lógico, a resolução de problemas e o desenvolvimento da autonomia como programador.

O projeto faz parte da minha jornada de aprendizado em desenvolvimento Web e surgiu da vontade de construir uma aplicação que pudesse evoluir junto com meus conhecimentos, desde a construção da interface até a implementação de um Back-End e a integração com um banco de dados.

Durante o desenvolvimento, procuro aplicar e consolidar os conhecimentos adquiridos nos estudos, especialmente:

- Desenvolvimento de interfaces com React.
- Utilização de TypeScript e tipagem de dados.
- Criação e reutilização de componentes.
- Gerenciamento de estados com useState.
- Comunicação entre componentes por meio de Props e callbacks.
- Manipulação de arrays e objetos.
- Utilização de filter() para filtrar informações.
- Geração de índices aleatórios com Math.random() e Math.floor().
- Manipulação de estados e efeitos com useEffect.
- Controle de intervalos utilizando setInterval() e clearInterval().
- Organização de dados em arquivos auxiliares.
- Estilização de interfaces com Tailwind CSS.
- Organização e versionamento do projeto utilizando Git e GitHub.

O Roleta-do-DEV também representa uma oportunidade de aprofundar meus conhecimentos em desenvolvimento Full Stack, especialmente na construção de APIs REST com Node.js, utilização de SQL, Prisma ORM e integração entre Front-End e Back-End.
O projeto faz parte da minha jornada de aprendizado em desenvolvimento Web e surgiu da vontade de colocar em prática os conhecimentos que venho adquirindo por meio dos meus estudos, especialmente durante minha formação na **OneBitCode**, onde venho estudando os fundamentos de desenvolvimento Web, JavaScript, React, TypeScript e outras tecnologias.
A partir desses estudos, busquei desenvolver uma aplicação própria, construindo gradualmente sua interface, seus componentes e sua lógica, em vez de simplesmente reproduzir códigos de outros projetos.
Durante o desenvolvimento, procuro aplicar e consolidar os conhecimentos adquiridos nos estudos, especialmente:

## Autor

- Guilherme Perobelli Zambolim
- [GitHub](https://github.com/GuilhermePerobelliZambolim)