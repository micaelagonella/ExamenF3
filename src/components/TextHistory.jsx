
const TextHistory = ({historial, seleccionPrevia}) => {

        return(
            <div className="recordatorio">
                    <h3>Seleccion anterior: {seleccionPrevia}</h3>
                    <h4>Historial de opciones elegidas: </h4>
                        <ul>
                            {historial.map((anterior, index) => <li key={index}>{anterior}</li>)}
                        </ul>
            </div>
        )
        
}



export default TextHistory;
