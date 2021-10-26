import React, { useState, useEffect, ChangeEvent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import api from '../../../services/api'

import './index.css'

interface IProduct {
    name: string;
    amount: number;
    cost: number;
}

interface IParamsProps {
    id: string;
}

const Products: React.FC = () => {
    const history = useHistory()
    const { id } = useParams<IParamsProps>();
    const [model, setModel] = useState<IProduct>({
        name: "",
        amount: (0),
        cost: (0)

    })

    useEffect (() => {
        if(id != undefined){
            findProduct(id)
        }
    }, [id])

    function updatedModel (e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if(id != undefined){
            const response = await api.put(`/products/${id}`, model)
        } else{
            const response = await api.post('/products', model)
        }
        back()

    }

    async function findProduct (id: string) {

        const response = await api.get(`products/${id}`)
        setModel({
            name: response.data.name,
            amount: response.data.amount,
            cost: response.data.cost

        })
    }

    function back () {
        history.goBack()
    }

    return (
        <div className='container'>
            <br/>
            <div className="product-header">
                <h3>New Products</h3>
                <button type="button" onClick={back} className="btn btn-success">Voltar</button>
            </div>
            <br/>
            <div className="container">
                <Form onSubmit={onSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label>Nome do produto</Form.Label>
                        <Form.Control type="text" 
                        name="name"
                        value={model.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => 
                        updatedModel(e)} 
                        placeholder="Produto" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control type="number" 
                        name="amount"
                        value={model.amount} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => 
                        updatedModel(e)} 
                        placeholder="Quantidade" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Valor unitário</Form.Label>
                        <Form.Control type="number"
                        name="cost"
                        value={model.cost}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => 
                        updatedModel(e)} 
                        placeholder="Valor" />
                    </Form.Group>

                    <Button className="btn btn-success" size="sm" type="submit">Adicionar</Button>
                    </Form>
            </div>

        </div>
    );
}
    export default Products;
