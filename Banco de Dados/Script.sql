create database EscalaSP;
use EscalaSP;

create table Formacao (
idFormacao int primary key auto_increment
);

create table Jogadores (
idJogador int primary key auto_increment,
nomeJogador varchar(45)
) auto_increment = 10;

create table FormacaoJogadores (
fkFormacao int,
foreign key(fkFormacao) references Formacao(idFormacao),
fkJogador int,
foreign key(fkJogador) references Jogadores(idJogador),
primary key(fkFormacao, fkJogador)
);

create table Login (
idLogin int primary key auto_increment,
email varchar(35),
senha varchar(25)
) auto_increment = 1000;

create table Usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
fkFormacao int,
foreign key(fkFormacao) references Formacao(idFormacao),
fkJogador int,
foreign key(fkJogador) references Jogadores(idJogador),
fkLogin int,
foreign key(fkLogin) references Login(idLogin)
) auto_increment = 1000;


select * from Login;
select * from Usuario;

SELECT * FROM Login join Usuario ON idLogin = fkLogin WHERE email = '${email}' AND senha = '${senha}';

        INSERT INTO Usuario (nomeUsuario, fkLogin) VALUES ('Andrey', (SELECT max(idLogin) FROM Login));
        INSERT INTO Usuario (nomeUsuario, fkLogin) VALUES ('${nome}', (SELECT max(idLogin) FROM Login));

    INSERT INTO Login (email, senha) VALUES ('andrey@gmail.com', '123');

SELECT max(idLogin) FROM Login;