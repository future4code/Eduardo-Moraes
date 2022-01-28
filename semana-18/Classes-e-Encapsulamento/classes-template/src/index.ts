
//Questão 1

//a) -o construtor serve para atibuirmos valores a classe
//   -const nomeASerCriado = new nomeDaClasse(atribuição de valores);

//b) apenas uma vez
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
        transaction: Transaction[]
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transaction
    }

    getCpf(): string {
        return this.cpf
    }
    getName(): string {
        return this.name
    }
    getAge(): number {
        return this.age
    }
    getBalance(): number {
        return this.balance
    }
    getTransactions(): Transaction[] {
        return this.transactions
    }
}


//c) para ter o acesso precisamos estar dentro do escopo dela

// exercício 2

class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }
    getDate(): string {
        return this.date
    }
    getValue(): number {
        return this.value
    }
    getDescription(): string {
        return this.description
    }
}
const myTransaction = new Transaction("15/11/2021", 3000, "pagamento do aluguel que é muito caro");
let arrayDeTansaction: Array<Transaction> = []
arrayDeTansaction.push(myTransaction)

const myAccount = new UserAccount("123456", "dudu", 25, arrayDeTansaction);
console.log(myAccount)

// exercício 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    getAccounts():UserAccount[]{
        return this.accounts
    }
}