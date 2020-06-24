import React, { Component } from 'react'
import apiHandler from "../api/apiHandler";

import {objectToFormData} from "object-to-formdata";
import {withRouter} from "react-router-dom";
import {withUser} from "../components/Auth/withUser";


export class IngredientsCmpt extends Component {
        state ={
                sortedIngredients : [],
        };

/*load all ingredients from db*/
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
                                {/*genereate a grid with all the ingredients*/}
                                <div className="gridbox">
                                {this.state.sortedIngredients.map((oneIngredient, index) => (
                                      <div key={oneIngredient._id}>
                                        <div className="oneObjectImg">
                                               <img src={oneIngredient.image} alt={oneIngredient.name}/>
                                        </div>
                                        <div className="oneObjectInfo">
                                                <p>{oneIngredient.name}</p>
                                                <p>{oneIngredient.price} €</p>
                                        </div>
                                      </div>  
                                ))}
                                </div>
                        </div>
                )
        }
}

export default IngredientsCmpt
