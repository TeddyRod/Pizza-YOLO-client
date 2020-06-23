import React, { Component } from 'react'
import apiHandler from "../components/Forms/apiHandler";

import {objectToFormData} from "object-to-formdata";
import {withRouter} from "react-router-dom";
import {withUser} from "../Auth/withUser.jsx";


export class IngredientsCmpt extends Component {
        state ={
                sortedIngredients = [],
        };

componentDidMount () {
        apiHandler
        .getIngredients()
        .then((data) => {
                this.setState({
                        sortedIngredients: data,
                });
        })
        .catch((err) => console.log(err));
};

        render() {
                return (
                        <div>
                                
                        </div>
                )
        }
}

export default IngredientsCmpt
