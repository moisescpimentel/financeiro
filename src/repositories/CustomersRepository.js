export class CustomersRepository {
    constructor(){
        this.customers = [];
    }

    create(customer){
        this.customers.push(customer);
    }

    save(customer){
        this.customers
    }

    update(id, customer){
        const index = this.customers.findIndex(customer => customer.id === id)
        this.customers[index] = { ...this.customers[index], ...customer }; 
        this.customers[index][id] = id;
    }
    
    cpfExists(cpf){
        return this.customers.some(customer => customer.cpf === cpf);
    }

    get(id){
        return this.customers.find(customer => customer.id === id);
    }
}