import './Calculadora.css';

import React from 'react';

function Display(props) {
    const result  = props.result;
    const clear = props.clear;

    return (
        <div className="input_container">
            <input type="number" type="text"
                className="display form-control"
                value={ result }>
            </input>
            <button className="btn btn-light" onClick={()=> clear()}>Clear</button>
        </div>
    );
}

class Buttons extends React.Component {

    render() {
        return (
            <div className="botoes-container">
                <button className="btn btn-light" onClick={()=> this.props.addTempValue(1)}>1</button>
                <button className="btn btn-light" onClick={()=> this.props.addTempValue(2)}>2</button>
                <button className="btn btn-light" onClick={()=> this.props.addTempValue(3)}>3</button>
                <button className="btn btn-light" onClick={()=> this.props.addOperator(1)}>+</button>
                <br></br>
                <button className="btn btn-light" onClick={()=> this.props.addTempValue(4)}>4</button>
                <button className="btn btn-light" onClick={()=> this.props.addTempValue(5)}>5</button>
                <button className="btn btn-light" onClick={()=> this.props.addTempValue(6)}>6</button>
                <button className="btn btn-light" onClick={()=> this.props.addOperator(2)}>-</button>
                <br></br>
                <button className="btn btn-light" onClick={()=> this.props.addTempValue(7)}>7</button>
                <button className="btn btn-light" onClick={()=> this.props.addTempValue(8)}>8</button>
                <button className="btn btn-light" onClick={()=> this.props.addTempValue(9)}>9</button>
                <button className="btn btn-light" onClick={()=> this.props.addOperator(3)}>*</button>
                <br></br>
                <button className="btn btn-light" onClick={()=> this.props.addTempValue(0)}>0</button>
                <button className="btn btn-light igual"
                    onClick={()=> this.props.calc()}>=</button>
                <button className="btn btn-light" onClick={()=> this.props.addOperator(4)}>/</button>
            </div>
        );
    }
}

class Calculadora extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            operator: 0,
            tempValue: 0
        };
    }

    addOperator = passedOperator=>{
        this.setState({operator: passedOperator });
        this.state.result = this.state.tempValue;
        this.state.tempValue = 0;
    }

    addTempValue = value =>{
        let tempValueAux = this.state.tempValue;
        this.setState({tempValue: Number.parseInt(`${tempValueAux}`+value) });
    }

    calc = ()=> {
        let operator = this.state.operator;
        let a = this.state.tempValue;
        let b = this.state.result;

        switch (operator) {
            case 1: //sum
                this.setState({tempValue: a+b});
                break;
            case 2: //sub
                this.setState({tempValue: -1*(a-b)});
                break;
            case 3: //time
                this.setState({tempValue: a*b});
                break;
            case 4: //div
                this.setState({tempValue: (a/b) });
                break;
        }
    }

    clear = ()=> {
        this.setState({
            operator: 0,
            tempValue: 0
        });
    }

    render() {
        return (
            <div className="calculadora_container">
                <div className="header">
                    <Display result={this.state.tempValue} clear={this.clear}></Display>
                </div>
                <div className="buttons">
                    <Buttons className="btn btn-light"
                        addTempValue={this.addTempValue}
                        addOperator={this.addOperator}
                        calc={this.calc}>
                    </Buttons>
                </div>
            </div>
        );
    }
}

export default Calculadora;