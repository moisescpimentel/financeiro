import {Router} from 'express'

import {CreateCustomerService} from './services/CreateCustomerService'

import locator from './locator'
import { CustomerListService } from './services/CustomerListService'

const routes = new Router()

routes.get('/client', (req, res) => {
    var list = new CustomerListService(locator['CustomersRepository'])
    
    return res.json(list.execute())
})

routes.post('/client', (req, res) => {
    const { name, email } = req.body;

    var create = new CreateCustomerService(locator['CustomersRepository'])
    
    return res.json(create.execute({name, email}))
})  

routes.put('/client/:id', (req, res) => {
    const id = req.params.id
    const { numero_conta, saldo  } = req.body;

    var create = new CreateCustomerService(locator['CustomersRepository'])
    
    return res.json(create.execute({id, cpf, numero_conta, saldo}))
})  

export default routes