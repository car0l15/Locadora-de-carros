# projeto locadora de carros

## Sobre

Esta é uma API simples feita para por em prática os estudos sobre MongoDB e Node.JS.
Node é muito flexivel e leve, trabalha bem com dados NoSQL. Sabendo disso, resolvi fazer
este desenvolvimento para testar a combinação dessas ferramentas.

Para desenvolvimento desse projeto utilizei os princípios de arquitetura MVC.

Foram criadas as rotas de Carros, Reservas, Clientes, Funcionários e Promções. Os 
carros foram divididos em duas categorias, os utilitários e os esportivos. Todas as
rotas possuem métodos de GET, POST e PUT. 

O MongoDB foi utilizado através do Docker, para utilizar em sua máquina basta setar 
suas configurações de conexão e rodar o comando *docker-compose up -d* e o a imagem
do mongo executará com sucesso.


##Clone

Para ter este código em sua máquina basta ir ao terminal do seu ambiente e inserir os comandos:

- git clone git@github.com:car0l15/Locadora-de-carros.git
- cd Locadora-de-carros
- npm install
- npm start
