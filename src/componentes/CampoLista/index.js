import './CampoLista.css'

const CampoLista = (props) => {

    return(
        <div className='campolista'>
            <label>{props.label}</label>
            <select required={props.required} value={props.valor} onChange={evento => props.aoAlterar(evento.target.value)}>
                <option value="Escolher time"></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default CampoLista