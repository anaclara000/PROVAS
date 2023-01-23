drop database if exists prova;
create database prova charset=UTF8 collate UTF8_general_ci;
use prova;

create table alunos(
    id_aluno integer not null primary key auto_increment,
    nome varchar(255) not null,
    data_nasci varchar(15) not null
);

create table cursados(
    id_Aluno integer not null,
    id_Curso integer not null,
    data_cursado varchar(15) not null,
    foreign key (id_Aluno) references alunos(id_aluno) on delete cascade
);

create table cursos(
    id_curso integer not null primary key auto_increment,
    curso varchar(255) not null,
    duracao varchar (30) not null
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/Provas/Back - 2DES/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/Provas/Back - 2DES/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Ana - Senai/Provas/Back - 2DES/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from alunos;
select * from cursados;
select * from cursos;

drop view if exists vw_geral;
CREATE VIEW vw_geral AS 
select a.id_aluno as id_aluno, a.nome, a.data_nasci, c.id_curso, c.curso, c.duracao , cur.data_cursado from alunos a
INNER JOIN cursados cur on cur.id_Aluno = a.id_aluno
INNER JOIN cursos c on c.id_curso = cur.id_Curso;
select * from vw_geral;
