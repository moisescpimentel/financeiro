import { CustomersRepository } from "./repositories/CustomersRepository"
import { CreateCustomerService } from "./services/CreateCustomerService";

const locator = {
    'CustomersRepository': new CustomersRepository(),
}

export default locator