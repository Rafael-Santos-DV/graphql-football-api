<div align="center">
  <img src="/.github/assets/LOGO-RDS-API.png" />
</div>

<div align="center">
  <h1>Futebol GRAPHQL API</h1>
</div>
<div align="center">
  [:e-mail:](https://www.google)
  <img src="https://img.shields.io/static/v1?label=TypeScript&message=100%&color=green&labelColor=blue" alt="TypeScript" />

  <img src="https://img.shields.io/static/v1?label=GRAPHQL&message=V&color=green&labelColor=D70D95" alt="Graphql" />
</div>

# Iniciar

Instalar com YARN

Clonar Projeto

```
git clone https://github.com/Rafael-Santos-DV/graphql-football-api.git
```

Acessar pasta

```
cd graphql-football-api
```

Instalar Depedências

```
yarn install
```

Iniciar Aplicação

```
yarn dev
```

Acessar: [localhost:4000](http://locahost:4000)

## Listar os jogos de hoje do campeonato Brasileiro Serie A

```gql
query {
  todayMatches(championship: "serie-a", county: "brasil") {
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

### OBS: em desenvolvimento
