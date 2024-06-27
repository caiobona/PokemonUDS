# Desafio técnico Pokémon TCG - (Angular)

Olá, bem vindo ao repositório deste projeto que simula uma parte de um jogo de cartas "TCG" - "**trading card games**" baseado no animê Pokémon.

# Tecnologias utilizadas: 

Framework Angular 16, Angular Material(UI), Tailwindcss(CSS-inline) e Sweet Alerts(Alerts)

# Requisitos para compilar o projeto
O projeto atualizado se encontra na branch **main**, voce pode realizar o download através do
``git clone https://github.com/humbertoconstantinong/pokemontcg.git``.

Assim que baixar o projeto, abra um terminal na pasta do mesmo e envie o seguinte comando:
``npm install`` e logo após que concluir, digite o comando ``npm install -g json-server``

Este último, é responsável por armazenar localmente os decks gravados pelo usuário, simulando uma API.
Para iniciar o projeto angular, se dirija até a raiz do projeto e  rode ``npm start`` ou ``ng serve``, fica a sua preferencia e ambos tem o mesmo resultado.
Para finalizar as configurações, entre no diretório  ``/apifake``pelo terminal e digite ``json-server --watch db.json``.
Nossa API-FAKE estará ligada e  rodando na porta 3000.
