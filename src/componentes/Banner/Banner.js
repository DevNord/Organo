import './Banner.css'

function Banner() {
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal" />
        </header>
    )
}

export default Banner

// Utilizar className nas tags "html", pois aqui class é uma palavra reservada.
// OBS: Aqui utilizasse JSX e não HTML, por mais parecido que seja.