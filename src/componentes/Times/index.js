import Colaboradores from '../Colaboradores'
import './Times.css'

const Time = (props) => {

    const bg = { backgroundColor: props.corSecundaria }
    const borderColor = { borderColor: props.corPrimaria }

    return (

        (props.colaboradores.length > 0) ? <section className='time' style={bg}>
            <h3 style={borderColor}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaboradores => <Colaboradores
                    corDeFundo={props.corPrimaria}
                    key={colaboradores.nome}
                    nome={colaboradores.nome}
                    cargo={colaboradores.cargo}
                    imagem={colaboradores.imagem} />)}
            </div>
        </section>
        : ''
    )
}

export default Time
