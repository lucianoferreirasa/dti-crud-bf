import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import api from '../../services/api'



import './index.css'

interface IProducts {
    id: number;
    name: string;
    amount: number;
    cost: number;

}

const Products: React.FC = () => {

    const [products, setProducts] = useState<IProducts[]>([])
    const history = useHistory()

    useEffect(() => {
        loadProducts()
    }, [])

    async function loadProducts() {

        const response = await api.get('/tasks')
        console.log(response)
        setProducts(response.data)
    }

    function newProduct () {
        history.push('/produtos_cadastro')
    }
    
    function editProduct (id: number) {
        history.push(`/produtos_cadastro/${id}`)
    }

    async function deleteProduct(id: number) {
        await api.delete(`/products/${id}`)
        loadProducts()
    }


    return (
        <div className='container'>
            <br/>
            <div className="product-header">
                <h1>Products Page</h1>
                <button type="button" onClick={newProduct} className="btn btn-success">Adicionar Produto</button>
            </div>
            <br/>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map(product => {
                            <tr key={product.id}>
                                <th scope="row">1</th>
                                <td>{ product.id}</td>
                                <td>{ product.name}</td>
                                <td>{ product.amount}</td>
                                <td>{ product.cost}</td>
                                <td>
                                    <Button size="sm" onClick={() => editProduct(product.id)}>Editar</Button>{' '}
                                    <Button size="sm">Visualizar</Button>{' '}
                                    <Button size="sm" onClick={() => deleteProduct(product.id)}>Remover</Button>{' '}
                                </td>
                            </tr>
                        })
                    }

                    
                </tbody>
            </table>
        </div>
    );
}
    export default Products;
