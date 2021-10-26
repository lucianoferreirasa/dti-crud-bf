import { Router, Request, Response } from 'express'

import { getProducts, saveProduct, getProduct, updateProduct, removeProduct } from './controller/ProductsController'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello!'})
})

routes.get('/products', getProducts)
routes.get('/products/:id', getProduct)
routes.post('/products', saveProduct)
routes.put('/products/:id', updateProduct)
routes.delete('/products/:id', removeProduct)

export default routes