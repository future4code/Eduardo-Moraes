//Exercício 1

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }
   
  const user = new User("01", "dudu@getMaxListeners.com", "dudu", "senha123")
  console.log(user)

// a) apenas a senha não seria possível pois ela é encapsulada como private

// b) foi chamada apenas uma vez

// Exercício 2

// foi usado o extends dizer ao codigo que o Customer é filha de User
// foi usado o super para trazer de User seus argumentos
  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }
  const customer = new Customer("02", "dantin@gmail", "danton", "dantin123", "ativo")
  console.log(customer)

  //a) apenas uma vez

  //b) duas vezes, pois como a classe customer é filha de User e usa seus argumentos também,
  //   ela tem que chamar o construtor de user também


   


