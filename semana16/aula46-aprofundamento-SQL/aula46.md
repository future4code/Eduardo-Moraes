## Exercício 1
**a)** exclui a coluna de salário
**b)** muda o nome da coluna e separa um espaço de até 6 caracteres 
**c)** mantem o nome da culuna igual e separa um espaço para até 255 caracteres
**d)** 
```sql
 ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
```
## Exercício 2
**a)** 
```sql
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1947-02-22"
WHERE id = "003";
```
**b)**
```sql
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
**c)**
```sql
UPDATE Actor
SET 
name = "Eduardo Henrique",
birth_date = "2001-12-15",
salary = 750000,
gender = "male"
WHERE id = "005";
```
**d)** não acusa erro, apenas fala que 0 linhas foram atualizadas