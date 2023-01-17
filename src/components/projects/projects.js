import { useState } from 'react'
import './styles/styles.sass'



export const Projects = () => {
    const [pages, setPages] = useState(1)
    const Pages = (element) => {
        if (pages === 1 && element === 'add') {
            setPages(pages + 1)
        }
        if (pages === 2 && element === 'remove') {
            setPages(pages - 1)
        }

    }
    const changeDisplay = () => {
        if (pages !== 1) {
            return 'flex'
        }
        return 'none'
    }
    return (
        <section className='projects' id='projects'>
            <h1>Projetos</h1>
            <ul>
                <div className='container'>
                    <li>
                        <a href="https://lovely-starburst-b74520.netlify.app/" target='_blank'>
                            <div className='image poke-img'></div>
                        </a>
                        <h3>Projeto Pokedéx</h3>
                    </li>

                    <li>
                        <a href="https://tmdb-project-3-1vwfc82ax-saullo-reis.vercel.app" target='_blank'><div className='image tmdb-img'></div></a>
                        <h3>Projeto TMDB</h3>
                    </li>

                    <li>
                        <a href="https://saullo-reis.github.io/projeto-inicial-fetch-github-api-main/" target='_blank'>
                            <div className='image github-img'></div></a>
                        <h3>Projeto Github Search</h3>
                    </li>

                    <li>
                        <a href="https://saullo-reis.github.io/calculadora/" target='_blank'>
                            <div className='image calculadora-img'></div></a>
                        <h3>Projeto Calculadora</h3>
                    </li>

                </div>

                <div className='container' style={{ display: changeDisplay() }}>

                    <li>
                        <a href="https://saullo-reis.github.io/sass-project/" target='_blank'>
                            <div className='image galleria-img'></div></a>
                        <h3>Projeto Galleria (Sass)</h3>
                    </li>

                    <li>
                        <a href="https://saullo-reis.github.io/landing-page-code-cafe/" target='_blank'>
                            <div className='image codecafe-img'></div></a>
                        <h3>Projeto Landing-Page CODE Café</h3>
                    </li>

                    <li>
                        <a href="https://loja-pxtd7lhbg-saullo-reis.vercel.app/" target='_blank'>
                            <div className='image lojarpg-img'></div></a>
                        <h3>Projeto Loja-rpg</h3>
                    </li>

                    <li>
                        <a href="https://github.com/saullo-reis/pizzaria" target='_blank'>
                            <div className='image pizzaria-img'></div></a>
                        <h3>Projeto Pizzaria</h3>
                    </li>

                </div>
            </ul>
            <div>
                <button style={{ opacity: pages === 1 && '0.5' }} className='button-projects' onClick={() => {
                    Pages('remove');
                }}>Mostrar Menos</button>

                <button style={{ opacity: pages === 2 && '0.5' }} className='button-projects' onClick={() => {
                    Pages('add');
                }}>Mostrar Mais</button>
            </div>

        </section>
    )
}