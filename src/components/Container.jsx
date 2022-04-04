import React , {Component} from 'react';
import data from './data.json'
import TextHistory from './TextHistory';
import HistorySelection from './HistorySelection';




class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
            historial: [],
            seleccionPrevia:""
        };
        this.handleClick = this.actualizarEstado;


    }
    obternerHistoriaSiguiente(){ 
            let siguiente = `${this.state.contador + 1}${this.state.seleccionPrevia.toLowerCase()}`
            let siguienteHistoria = data.filter(dato => dato.id === siguiente)
            return siguienteHistoria[0]
        }
    
    actualizarEstado = (e) => {
        let historialArray = this.state.historial;
        if(this.state.contador < 5){
            this.setState({
                contador: this.state.contador + 1,
                historial: historialArray,
                seleccionPrevia: e.target.id
            })
            if(this.state.seleccionPrevia !== "" && this.state.contador < 4){
                historialArray.push(this.state.seleccionPrevia)
            }
        }
    }

    render(){
        if(this.state.contador > 4){
            alert("FIN")
            let final = `${this.state.contador}${this.state.seleccionPrevia.toLowerCase()}`
            let historiaFinal = data.filter(dato => dato.id === final)
            return (
                <div className='layout'>
                    <h1 className='historia'>{historiaFinal[0].historia}</h1>
                    <HistorySelection handleClick={this.handleClick} opcionA={historiaFinal[0].opciones.b} opcionB={historiaFinal[0].opciones.b}/>
                    <TextHistory historial={this.state.historial} seleccionPrevia={this.state.seleccionPrevia}/>
                </div>
            )
        }
            return (
                <div className='layout'>
                    <h1 className='historia'>{this.obternerHistoriaSiguiente().historia}</h1>
                    <HistorySelection handleClick={this.handleClick} opcionA={this.obternerHistoriaSiguiente().opciones.a} opcionB={this.obternerHistoriaSiguiente().opciones.b}/>
                    <TextHistory historial={this.state.historial} seleccionPrevia={this.state.seleccionPrevia}/>
                </div>
            )      
    }
    componentDidUpdate() {
        console.table(this.state);
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
}




export default Container;