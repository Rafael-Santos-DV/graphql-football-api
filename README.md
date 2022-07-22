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
Heroku: [https://football-api-graphql.herokuapp.com/](https://football-api-graphql.herokuapp.com/) <br>
Render: [https://api-graphql.onrender.com/](https://api-graphql.onrender.com/)

## Como subir sua aplição no heroku?

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
heroku git:remote -a football-api-graphql
```

6. Adicionar suas mudanças

```bash
git add .
git commit -m "seu commit"
```

7. Procute em seu DASHBOARD do heroku por **ADD buildpack** e adione o seguinte pacote
   <img width="300px" src="/.github/assets/heroku-buildpack.png" alt="heroku" >

   `https://github.com/jontewks/puppeteer-heroku-buildpack`

8. Por fim, subir sua API

```bash
git push heroku master
```

## Cosumindo a API com React

//

### OBS: em desenvolvimento

Em desenvolvimento, mas você pode abrir um PR a qualquer momento.
