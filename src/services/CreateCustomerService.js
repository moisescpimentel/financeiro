import { v4 as uuidv4 } from 'uuid';

export class CreateCustomerService {
    constructor(customersRepository) {
        this.customersRepository = customersRepository;
    }

    async execute({cpf, numero_conta, saldo }) {
        if (saldo < 0){
            throw new Error('Saldo não pode ser negativo');
        }
        
        if (this.customersRepository.cpfExists(cpf)) {
            throw new Error('Este CPF já está cadastrado no sistema');
        }
        
        const customer = this.customersRepository.create({
            id: uuidv4(),
            cpf,
            numero_conta,
            saldo
        });

        await this.customersRepository.save(customer);

        return customer;
    }
}

