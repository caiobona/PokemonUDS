# Teste técnico - Processo Seletivo UDS Tecnologia - Desenvolvedor Fullstack Sênior - (Angular)

aplicação que consulte a api de pokemon TCG 

# Tecnologias utilizadas: 

Framework Angular 17, Angular Material(UI), Tailwindcss(CSS-inline).
OBS:  biblioteca UI Infragistics nao foi utilizada pois gerou conflito com o Material UI.

# Requisitos para compilar o projeto

Assim que baixar o projeto, abra um terminal na pasta raiz do projeto e envie o seguinte comando:
``npm install`` e logo após que concluir, digite o comando ``npm install -g json-server``

Este último, é responsável por armazenar localmente os decks gravados pelo usuário, simulando uma API.
Para iniciar o projeto angular, se dirija até a raiz do projeto e  rode ``npm start`` ou ``ng serve``, fica a sua preferencia e ambos tem o mesmo resultado.
Para finalizar as configurações, entre no diretório  ``/apifake``pelo terminal e digite ``json-server --watch db.json``.
Nossa API-FAKE estará ligada e  rodando na porta 3000.

Faça bom uso.
