export class CustomerListService {
    constructor(customersRepository) {
        this.customersRepository = customersRepository;
    }

    async execute() {
        return this.customersRepository.customers;
    }
}