<div align="center">
  <img src="/.github/assets/LOGO-RDS-API.png" />
</div>

<div align="center">
  <h1>Futebol GRAPHQL API</h1>
</div>
<div align="center">
  [:e-mail:]
  <img src="https://img.shields.io/static/v1?label=TypeScript&message=100%&color=green&labelColor=blue" alt="TypeScript" />

  <img src="https://img.shields.io/static/v1?label=GRAPHQL&message=V&color=green&labelColor=D70D95" alt="Graphql" />
</div>

## :star: Tecnologias - Ferramentas

- <img width="20px" src="https://graphql.org/img/logo.svg" alt="Graphql" />

- <img width="20px" src="https://rafaelsantos-dev.netlify.app/static/media/file_type_typescript_official_icon.a4675187b2d19ba3409b859297dff9da.svg" alt="TypeScript" />

- <img width="20px" src="https://typegraphql.com/img/logo.png" alt="Typegraphql" />

- <img width="20px" src="/.github/assets/apollo-server.png" alt="Apollo Server" />

- <img width="20px" src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" />

# Iniciar

Clonar Projeto

```
git clone https://github.com/Rafael-Santos-DV/graphql-football-api.git
```

Acessar pasta

```bash
cd graphql-football-api
```

Instalar Depedências

```bash
yarn install
# or
npm install
```

Iniciar Aplicação

```bash
yarn dev
# or
npm run dev
```

Acessar: [localhost:4000](http://locahost:4000)

## Listar os jogos de hoje do campeonato **Brasileiro Série A**

```gql
query {
  todayMatches(championship: "serie-a", country: "brasil") {
    championship
    eventTime
    status
    homeTeam {
      name
      goals
      imageUrl
    }
    visitantTeam {
      name
      goals
      imageUrl
    }
  }
}
```

## Listar tabela do campeonato **Brasileiro Série A**

```gql
query {
  championshipTable(championship: "serie-a", country: "brasil") {
    name
    draws
    position
    goalsDifference
    goalsScored
    goalsTaken
    imageUrl
    loss
    matches
    points
    winners
  }
}
```

### :star: Você pode fazer muitas coisas :star:

## **Queries** :ballot_box_with_check:

- **todayMatches** \
   Essa consulta procura os jogos de hoje de determinado campeonato

  Parâmetros aceitos:
  | **params** | **IsRequired** | **Type** |
  | ---------- | ----------- | ---- |
  | championship | required :exclamation: | String |
  | country | required :exclamation: | String |
  | limit | opcional :question: | Number |

Exemplo:

```gql
query {
  todayMatches(championship: "serie-a", country: "brasil", limit: 1) {
    ...
  }
}
```

Possível retorno:

```json

"data": {
  "todayMatches": [
    {
      "championship": "<nome do campeonato>",
      "eventTime": "<horário>",
      "status": "<não iniciado | number | encerrado | adiado>",
      "visitantTeam": {
        "goals": "<number | ''>",
        "name": "<nome equipe visitante>",
        "imageUrl": "<logo da equipe visitante>"
      },
      "homeTeam": {
        "goals": "<number | ''>",
        "imageUrl": "<logo equipe da casa>",
        "name": "<nome da equipe da casa>"
      }
    }
  ]
}

```

- **lastMatches** \
   Essa consulta procura pelos últimos jogos de determinado time

  Parâmetros aceitos:
  | **Params** | **IsRequired**| **Type** |
  |--------|-----------|--------|
  | id | required :exclamation: | String |
  | limit | opcional :question: | Number |

  Exemplo:

  ```gql
  query {
    lastMatches(id: "<id da equipe>", limit: 1) {
      championship
      eventTime
      homeTeam {
        goals
        imageUrl
        name
      }
      visitantTeam {
        goals
        imageUrl
        name
      }
    }
  }
  ```

  Retorno:

  ```json
  {
    "data": {
      "lastMatches": [
        {
          "championship": "<campeonato>",
          "eventTime": "data e horário",
          "homeTeam": {
            "goals": "<number>",
            "imageUrl": "<logo url>",
            "name": "<nome da equipe da casa>"
          },
          "visitantTeam": {
            "goals": "<number>",
            "imageUrl": "<logo url>",
            "name": "<nome da equipe visitante>"
          }
        }
      ]
    }
  }
  ```

## Queries

- :white_check_mark: championshipTable
- :white_check_mark: lastMatches
- :white_check_mark: todayMatches

### :fire: **Next features** :fire:

Queries

- :white_large_square: allTeams

Cache

- <img width="60px" src="https://redis.com/wp-content/themes/wpx/assets/images/logo-redis-white.svg?auto=webp&quality=85,75&width=100">

## API

Lembrando que são serviços **gratuitos**, pode haver lentidão. <br>
Heroku - 1: [https://football-api-graphql.herokuapp.com/](https://football-api-graphql.herokuapp.com/) <br>
Heroku - 2: [https://api-graphql-2.herokuapp.com/](https://api-graphql-2.herokuapp.com/) <br>
Render: [https://api-graphql.onrender.com/](https://api-graphql.onrender.com/)

## Como subir sua aplicação no heroku?

1. Faça o clone do repositório. <br>

   ```bash
   git clone https://github.com/Rafael-Santos-DV/graphql-football-api.git
   ```

   ```bash
   cd graphql-football-api
   ```

2. Crie uma conta no heroku [aqui](https://signup.heroku.com/) ou clique [aqui](https://id.heroku.com/login) caso já tenha uma conta criada.
   Com sua conta criada, siga para o próximo passo:

3. Crie seu app. <br>
   Em seu dashboard do heroku, procute por _create new app_ e crie seu app.

4. Fazer login no CLI do HEROKU.

```bash
heroku login
```

Caso não tenha o CLI do Heroku instalado, acesse [aqui](https://devcenter.heroku.com/articles/heroku-cli) para instalar.

5. Adicionar seu repositório remoto

```bash
heroku git:remote -a <nome do seu app do heroku>
```

6. Adicionar suas mudanças

```bash
git add .
git commit -m "seu commit"
```

7. Procute em seu DASHBOARD do heroku por **ADD buildpack** e adione o seguinte pacote. <br>
   <img width="600px" src="/.github/assets/heroku-buildpack.png" alt="heroku" > <br>

   ```
   https://github.com/jontewks/puppeteer-heroku-buildpack
   ```

8. Por fim, subir sua API

```bash
git push heroku master
```

<br>
<br>

## Cosumindo a API com React/Ts e Apollo Client.

Vamos criar uma tabela básica do campeonato brasileiro;

### 1. Crie sua aplicação em React com sua ferramenta de construção favorita, nesse tutorial vamos utilizar o **vite.js**.

```
yarn create vite championship-table --template react-ts
```

### 2. Instale o Apollo Client

```bash
npm install @apollo/client graphql
# or
yarn add @apollo/client graphql
```

### 3. inicializar ApolloClient e Configurar

Em seu arquivo principal, vamos importar os símbolos que precisamos de @apollo/client

```typescript
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
```

Em seguida, inicializaremos ApolloClient, passando para seu construtor um objeto de configuração com os campos uri e cache

```typescript
const client = new ApolloClient({
  uri: 'https://football-api-graphql.herokuapp.com/',
  cache: new InMemoryCache(),
});
```

**uri**: Especifica a URL do nosso servidor GraphQL. <br>
**cache**: É uma instância de InMemoryCache, que o Apollo Client usa para armazenar em cache os resultados da consulta após buscá-los. <br>

É isso! Nosso client está pronto para começar a buscar dados.

### 4. Conecte seu cliente ao React

Você conecta o Apollo Client ao React com o ApolloProvider componente. Semelhante ao React Context.Provider, ApolloProvider envolve seu aplicativo React e coloca o Apollo Client no contexto, permitindo que você o acesse de qualquer lugar em sua árvore de componentes. <br>

Vamos envolver nosso aplicativo React com um arquivo ApolloProvider. Sugerimos colocar ApolloProvider em algum lugar alto em seu aplicativo, acima de qualquer componente que possa precisar acessar dados do GraphQL.

```tsx
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'https://football-api-graphql.herokuapp.com/',
  cache: new InMemoryCache(),
});

// Supported in React 18+
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
```

### 5. Buscar dados com **useQuery**

Depois que o seu ApolloProvider estiver conectado, você poderá começar a solicitar dados com useQuery. O useQuery hook é um hook do React que compartilha dados do GraphQL com sua interface do usuário. <br>

Mudando para o nosso App.tsx arquivo, começaremos substituindo o conteúdo do arquivo para o código abaixo.

```typescript
import { gql, useQuery } from '@apollo/client';

const GET_CHAMPIONSHIP_TABLE = gql`
  query {
    championshipTable(championship: "serie-a", country: "brasil") {
      name
      draws
      position
      goalsDifference
      goalsScored
      goalsTaken
      imageUrl
      loss
      matches
      points
      winners
    }
  }
`;
```

- Podemos definir a consulta que queremos executar envolvendo-a no **gql** literal do modelo:

Em seguida, vamos definir um componente chamado ShowChampionshipTable que executa nossa GET_CHAMPIONSHIP_TABLE consulta com o useQuery hook. <br>

Antes de criarmos o componente, vamos criar uma tipagem para o response da API

```typescript
type Team = {
  name: string;
  draws: number;
  position: number;
  goalsDifference: number;
  goalsScored: number;
  goalsTaken: number;
  imageUrl: string;
  loss: number;
  matches: number;
  points: number;
  winners: number;
};

type ChampionshipTable = {
  championshipTable: Team[];
};
```

Agora vamos criar o componente :)<br>

```tsx
function ShowChampionshipTable() {
  const { loading, error, data } = useQuery<ChampionshipTable>(GET_CHAMPIONSHIP_TABLE);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <table>
        <tr>
          <th>Posição</th>
          <th>Equipe</th>
          <th>Pontos</th>
          <th>Vitórias</th>
          <th>Partidas</th>
        </tr>

        {data?.championshipTable.map((team) => (
          <tr key={team.id}>
            <td>
              <strong>{team.position}</strong>
            </td>
            <td className="td-image">
              <img src={team.imageUrl} alt={team.name} />
              <strong>{team.name}</strong>
            </td>
            <td>
              <span>{team.points}</span>
            </td>
            <td>
              <span>{team.winners}</span>
            </td>
            <td>
              <span>{team.matches}</span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
```

:fire: Muito Bom, acabamos de criar um componente que lista a tabela do campeonato brasileira Serie - A <br>

Agora você pode utilizar as outras queries com o React e Apollo Client

## Material

:star: [Apollo Client](https://www.apollographql.com/docs/react/get-started)<br>
:star: [React](https://pt-br.reactjs.org/)<br>
:star: [Graphql](https://graphql.org/)<br>
:star: [TypeScript](https://www.typescriptlang.org/)
