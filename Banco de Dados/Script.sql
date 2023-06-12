create database EscalaSP;
use EscalaSP;

drop database EscalaSP;

create table Formacao (
idFormacao int primary key auto_increment
);

insert into Formacao values
(1),
(2),
(3);

create table Login (
idLogin int primary key auto_increment,
email varchar(35),
senha varchar(25)
) auto_increment = 1000;

create table Usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
jogadorPref varchar(25),
fkFormacao int,
foreign key(fkFormacao) references Formacao(idFormacao),
fkLogin int,
foreign key(fkLogin) references Login(idLogin)
) auto_increment = 1000;


INSERT INTO Usuario (fkFormacao) VALUES (${campo});

-- Select nas tabelas Usuario e Login
select * from Login;
desc Login;
select * from Usuario;
desc Usuario;

-- Truncate nas tabelas Usuario e Login
set FOREIGN_KEY_CHECKS = 0;
truncate table Login;
set FOREIGN_KEY_CHECKS = 1;
truncate table Usuario;

-- Inserir dados nas tabelas Usuario e Login
	INSERT INTO Usuario (nomeUsuario, fkLogin) VALUES ('Andrey', (SELECT max(idLogin) FROM Login));
    INSERT INTO Login (email, senha) VALUES ('andrey@gmail.com', '123');
    
	INSERT INTO Usuario (nomeUsuario, fkLogin) VALUES ('Daniel', (SELECT max(idLogin) FROM Login));
    INSERT INTO Login (email, senha) VALUES ('daniel@gmail.com', '123');
    
    INSERT INTO Usuario (nomeUsuario, fkLogin) VALUES ('${nome}', (SELECT max(idLogin) FROM Login));
    
-- Inserir dados na fkFormacao
    INSERT fkFormacao FROM Usuario where ${fkLogin} = 1002;
 
-- Select em um usuario especifico
SELECT * FROM Login join Usuario ON idLogin = fkLogin WHERE email = '${email}' AND senha = '${senha}';
SELECT * FROM Login join Usuario ON idLogin = fkLogin WHERE email = 'daniel@gmail.com' AND senha = 123;

SELECT * FROM Login WHERE email = '${email}' AND senha = '${senha}';
SELECT * FROM Login join Usuario on fkLogin = idLogin where email = '${email}' AND senha = '${senha}';
SELECT * FROM Login join Usuario on fkLogin = idLogin where email = 'daniel@gmail.com' AND senha = 123;


   UPDATE Usuario SET fkFormacao = 1 where idUsuario = (SELECT max(idLogin) FROM Login);
   UPDATE Usuario SET fkFormacao = ${campo} where idUsuario = (SELECT max(idLogin) FROM Login);
    
select count(fkFormacao) from Usuario where fkFormacao = 2;

select (select count(fkFormacao) from Usuario where fkFormacao = 1) form1, (select count(fkFormacao) from Usuario where fkFormacao = 2) form2, (select count(fkFormacao) from Usuario where fkFormacao = 3) form3;  

update Usuario set jogadorPref = 'Luciano' where idUsuario = 1000; 
update Usuario set jogadorPref = 'Calleri' where idUsuario = 1001; 
update Usuario set jogadorPref = 'Rafinha' where idUsuario = 1002; 

SELECT count(*) qtdJogador, jogadorPref nomeJogador FROM Usuario GROUP BY jogadorPref;

UPDATE Usuario SET jogadorPref = '${Jogador}' where idUsuario = ${idLogin};
UPDATE Usuario SET jogadorPref = 'Beraldo' where idUsuario = 1001;

SELECT * FROM Usuario WHERE idUsuario = 1001;
SELECT * FROM Usuario WHERE idUsuario = ${idLogin};