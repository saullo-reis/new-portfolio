import './styles/styles.sass'
import pokemon from "../../assets/img/poke-gif.gif"
import tmdb from "../../assets/img/tmdb-3.gif"
import galleria from "../../assets/img/galleriagif.gif"
import lojarpg from "../../assets/img/lojarpggif1.gif"
import githubsearch from "../../assets/img/github api.gif"
import codecafe from "../../assets/img/code-cafe.gif"
import pizzagif from "../../assets/img/pizza-gif.gif"
import calculadoragif from "../../assets/img/calculadoragif.gif"


const morePages = () => {
    
}

export const Projects = () => {
    return (
        <section>
            <h1>Projetos</h1>
            <ul>
                <div>
                    <a href="https://lovely-starburst-b74520.netlify.app/" target='_blank'>
                        <li>
                            <img src={pokemon}></img>
                            <h3>Projeto Pokedéx</h3>
                        </li>
                    </a>
                    <a href="https://tmdb-project-3-1vwfc82ax-saullo-reis.vercel.app" target='_blank'>
                        <li>                       
                            <img src={tmdb}></img>
                            <h3>Projeto TMDB</h3>
                        </li>
                    </a>
                    <a href="https://saullo-reis.github.io/projeto-inicial-fetch-github-api-main/" target='_blank'>
                        <li>                           
                            <img src={githubsearch}></img>
                            <h3>Projeto Github Search</h3>
                        </li>
                    </a>
                    <a href="https://saullo-reis.github.io/calculadora/" target='_blank'>
                        <li>                           
                            <img src={calculadoragif}></img>
                            <h3>Projeto Calculadora</h3>
                        </li>
                    </a>
                </div>

                <div>
                    <a href="https://saullo-reis.github.io/sass-project/" target='_blank'>
                        <li>       
                            <img src={galleria}></img>
                            <h3>Projeto Galleria (Sass)</h3>
                        </li>
                    </a>
                    <a href="https://saullo-reis.github.io/landing-page-code-cafe/" target='_blank'>
                        <li>                           
                            <img src={codecafe}></img>
                            <h3>Projeto Landing-Page CODE Café</h3>
                        </li>
                    </a>
                    <a href="https://loja-pxtd7lhbg-saullo-reis.vercel.app/" target='_blank'>
                        <li>                    
                            <img src={lojarpg}></img>
                            <h3>Projeto Loja-rpg</h3>
                        </li>
                    </a>
                    <a href="https://github.com/saullo-reis/pizzaria" target='_blank'>
                        <li>                           
                            <img src={pizzagif}></img>
                            <h3>Projeto Pizzaria</h3>
                        </li>
                    </a>
                </div>
            </ul>
            <button onClick={() => {
                morePages();
            }}>Mostrar Mais</button>
        </section>
    )
}