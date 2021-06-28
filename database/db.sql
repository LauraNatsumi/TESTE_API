create database testeAPI;

create table employees (
  id SERIAL PRIMARY KEY,
  name varchar(50) NOT NULL,
  regime varchar (20) NOT NULL,
  CPF_CNPJ bigint NOT NULL,
  occupation varchar(100) NOT NULL,
  email varchar(50) NOT NULL,
  telephone1 bigint NOT NULL,
  telephone2 bigint
  );

INSERT INTO employees(name, regime, CPF_CNPJ, occupation, email, telephone1, telephone2) VALUES
  ('laura', 'clt', 50476364884, 'dev', 'lauransato@yahoo.com', 11985549435, 1147755435),
  ('rafael', 'js', 52648784575, 'dev', 'rafael@yahoo.com', 11985549435, 1147711708),
  ('eduarda', 'js', 50457535225, 'suporte', 'duda@gmail.com', 11000000000, 1140028922);