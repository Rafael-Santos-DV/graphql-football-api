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

## Listar os jogos de hoje do campeonato Brasileiro Série A

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

## Listar tabela do campeonato Brasileiro Série A

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

### Você pode fazer muitas coisas

## Exemplo com React

//

### OBS: em desenvolvimento
