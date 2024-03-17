export class UpdateCustomerService {
    constructor(customersRepository) {
        this.customersRepository = customersRepository;
    }

    async execute({id, numero_conta, saldo }) {
        if (saldo < 0){
            throw new Error('Saldo não pode ser negativo');
        }

        const customer = this.customersRepository.get(id);

        if (!customer){
            throw new Error('ID inválido')
        }
        
        customer.numero_conta = numero_conta
        customer.saldo = saldo

        await this.customersRepository.update(id, customer);

        return customer;
    }
}

