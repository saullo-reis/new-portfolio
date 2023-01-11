import "./styles/styles.sass"

export const Header = () => {
    return(
        <header className="header">
            <h1 className="header-logo">SR</h1>
            <nav className="header-nav">
                <a href="#about">Sobre</a>
                <a href="#projects">Projetos</a>
                <a href="#skills">Habilidades</a>
            </nav>
        </header>
    )
}