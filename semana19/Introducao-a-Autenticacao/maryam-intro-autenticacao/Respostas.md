**questão1**
a) sim, pois o id possue numeros e letras

**questão2**
a) está sendo estabelecido a conecção com o banco de dados, depois ele insere os valores tipados na tabela, mas não manda para o banco
b)  CREATE TABLE IF NOT EXISTS to_do_list_users (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      nickname VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
   );
c) const userTableName = "User"

**questão3**
a) está dando um apelido para process.env.JWT_KEY