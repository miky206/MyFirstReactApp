import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            age:29
        }
    }
    render() {
        return (
            <div>
                <h1>
                    Hola {this.props.name}!
                </h1>
                <h2> Tu edad es : {this.state.age}</h2>
                <div>
                  {/** añadimos llaves al evento para llamar a la funcion */}
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }
    birthday =()=>{
        this.setState((prevState)=>(
            {
                age:prevState.age+1
            }
        ))
    }
}
/** el prop types de abajo nos sirve para tipar las propiedades que recibiremos */
Greeting.propTypes = {
    name: PropTypes.string,
};

export default Greeting;