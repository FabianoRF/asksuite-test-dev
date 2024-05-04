# Test Dev Asksuite

Olá!

Seguem algumas observações acerca do do desenvolvimento do desafio e das ferramentas utilizadas.

## Considerações

As seguintes questões foram consideradas como regra de negocio dessa aplicação após explorar o site fornecido como base de dados para o endpoint:

* Foi adicionada uma validação para apenas aceitar um intervalo de checkin e checkout de no mínimo 3 noites, pois o site apenas exibe dados quando há este intervalo mínimo
* Foi adicionada também uma regra para validar apenas datas maiores que a do dia da consulta, pois uma consulta no passado não faria sentido

Sobre o uso do boilerplate, escolhi por manter a estrutura principal, porém incrementei com alguns patterns, adicionando um controller, e um useCase(classe que contem apenas um método publico e possui a regra de negocio)


## Tecnologias e bibliotecas utilizadas

* Typescript
* Eslint
* Prettier
* Jest
* Tsyringe - Dependency Injection
* swagger


## Running

* Instalando dependências: `npm install` ou `yarn`
* Rodando em dev: `npm run dev` or `yarn dev`
* Gerando documentação de api: `npm run swagger` or `yarn swagger`
* build: `npm run build` or `yarn build`
* start: `npm run start` or `yarn start`

Porta default está setada em `8080`


## Divisão de Tasks

Após mapeados os requisitos me organizei nas seguintes tarefas, utilizando de seu prefixo como referencia nas mensagens dos commits:

* TASK-1: Configurar typescript
* TASK-2: Configurar lint
* TASK-3: Configurar container DI
* TASK-4: Criar estrutura de Controller
* TASK-5: Criar estrutura de useCase
* TASK-6: Configurar jest
* TASK-7: Criar useCase de carregamento de dados
* TASK-8: Adicionar validação de input
    * Validar tipo date e se há diferença de 3 dias entre elas
    * Adicionar validação com joi + celebrate
* TASK-10: Adicionar testes unitários
* TASK-9: Correções finais
    * Lindar com erros
* TASK-11: Adicionar swagger
* TASK-12: Documentação
    * Criar readme.md
    * Adicionar script de build
