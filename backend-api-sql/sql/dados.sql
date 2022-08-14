CREATE DATABASE dbusuarios;

CREATE TABLE IF NOT EXISTS clientes(
    id integer primary key,
    nome varchar(30) ,
    email varchar(30),
    ativo boolean
);

INSERT INTO `clientes`(`id`, `nome`, `email`, `ativo`) 
VALUES (1,'Junior Lourenço','junior@email.com', true),
(2,'Mateus Londres','mateus@email.com', false),
(3,'Vagner Loris','vagner@email.com', true),
(4,'Saulo Louve','saulo@email.com', false);