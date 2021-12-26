# Teste (react/pwa/node/graphql)
API com GraphQL, Node, Express e Apollo e um Front-End React/PWA/Apollo:

## Passos para executar o projeto back-end

Para rodar o backend da aplicação:
- Primeiro abra a pasta ./api pelo terminal e execute o comando "yarn" para baixar as
dependências do node_modules. Depois execute "yarn start"


## Passos para executar o projeto front-end
Para rodar o frontend: 
- Abra a pasta ./frontend/social pelo terminal e execute "yarn" para baixar as
dependências do node_modules. Depois execute "yarn start"

## Chamada API em Curl
- curl --request POST --header 'content-type: application/json' --url http://localhost:4000/graphql --data '{"query":"query { list { _id, index, picture, age, eyeColor, name, company, email, phone, friends { _id, index, picture, age, eyeColor, name, company, email, phone } } }","variables":{}}'

## Possível Erro de modulo caso aconteça, possível solução
Caso estiver dando erro de modulo do eslint, precisa ir nesse diretorio:
- node_modules\@eslint\eslintrc\package.json

Depois apagar a propriedade "type":"module" para poder funcionar.
