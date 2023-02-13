import db from "../db.js";

//== CLIENTE

const CLIENTE_SCHEMA = `
CREATE TABLE IF NOT EXIST "USUARIOS" (
    "ID_CLIENTE" INTEGER PRIMATRY KEY AUTOINCREMENT,
    "NOME" VARCHAR(64),
    "EMAIL" VARCHAR(64),
    "SENHA" VARCHAR(64)
); 
`

const ADD_CLIENTE_DATA = `
INSERT INTO CLIENTE (ID_CLIENTE, NOME, EMAIL, SENHA)
VALUES
(1, 'Eugenio oliveira', 'eugenio.oliveira@bol.com.br', 'eugeninhooliveira')
(2, 'Oliveira Ribeiro', 'oliveira.ribeiro@gmail.com', 'ribeirinho')
(3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', 'aboboradedoce')
`

function criaTabelaUSr(){
    db.run(CLIENTE_SCHEMA, (erro) => {
   if (erro) console.log("Erro ao criar tabela de cliente")
  });
}

//== funcionarios 

const TAREFA_SCHEMA = `
CREATE TABLE IF NOT EXISTS TAREFA (
ID INTEGER PRIMARY KEY AUTOINCREMENT,
TITULO VARCHAR(64),
DESCRICAO TEXT,
STATUS VARCHAR(64),
DATACRIACAO VARCHAR(64),
ID_USUARIO INTEGER,
FOREING KEY (ID_USUARIO) REFERENCES USUARIO(ID)
);`

const ADD_TAREFAS_DATA = `
"INSERT INTO TAREFAS (TITULO, INSCRICAO, STATUS, DATACRIACAO, ID_USUARIO")
VALUES
("Yoga", "fazer yoga segunda e quarta", "contido", "2021-01-10", 2)
("Medico","consulta com Dr.Ayrton na sexta", "todo", "2021-01-13", 1)
("Pagar conta", "pagar boleto de agua e luz", "doing", "2021-01-02", 2)
("Mercado", "pegar lista na geladeira e fazer compras", "todo", "2021-01-08", 2)
("Dentista", "consulta com a DR.Andreia na sexta", "todo", "2021-01-11", 1)
("Pagar financiamento do carro", "pagar parcela do mes financiamento", "continuo", "2021-01-05", 2)
`

function criarTabelaTarefas(){
    db.run(TAREFA_SCHEMA, (erro) => {
        if(erro) console.log("Erro ao criar tabela de Tarefas")
    });
}

function populaTabelaTarefa(){
    db.run(TAREFA_DATA, (erro) => {
        if(erro) console.log("Erro ao popular taveka de Tarefa")
    });
}

db.seriaLize( () => {
    criaTabelaUSr();
    populaTabelaUSr();
    criarTabelaTarefas();
    populaTabelaTarefa();
});