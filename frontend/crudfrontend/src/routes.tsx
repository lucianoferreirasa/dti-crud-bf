import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import Products from './pages/Products'
import ProductsForm from './pages/Products/Form'


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/produtos" exact component={Products}/>
            <Route path="/produtos_cadastro" exact component={ProductsForm}/>
            <Route path="/produtos_cadastro/:id" exact component={ProductsForm}/>
            
        </Switch>
    );
}
    
export default Routes;
