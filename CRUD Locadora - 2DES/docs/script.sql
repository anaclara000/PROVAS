drop database if exists locadora;
create database locadora charset=UTF8 collate utf8_general_ci;
use locadora;

create table clientes(
    codigo integer not null primary key auto_increment,
    nome varchar(150) not null,
    endereco varchar(150) not null,
    telefone varchar(150) not null
);

create table filmes(
    codigo integer not null primary key auto_increment,
    nome varchar(150) not null,
    genero varchar(150) not null
);

create table locacoes(
    id integer not null primary key auto_increment,
    codigo_cli integer not null,
    codigo_filme integer not null,
    data_locacao varchar(10) not null,
    data_devolucao varchar(10),

    foreign key (codigo_cli) references clientes(codigo),
    foreign key (codigo_filme) references filmes(codigo)
);

describe clientes;
describe filmes;
describe locacoes;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/2des/Provas/prova01/docs/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/2des/Provas/prova01/docs/filmes.csv'
INTO TABLE filmes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/2des/Provas/prova01/docs/locacoes.csv'
INTO TABLE locacoes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes;
select * from filmes;
select * from locacoes;