import { useState } from "react"
import './styles/styles.sass'

export const Skills = () => {
    const [softskills] = useState(['Competitividade', 'Disciplina', 'Empatia', 'Liderança', 'Pensamento Critico', 'Criatividade'])
    const [active, setActive] = useState([0, 0, 0, 0, 0, 0])
    const [start, setStart] = useState(true)

    console.log(start)
    const handleClick = (index) => {
        setActive([0, 0, 0, 0, 0, 0])
        setActive((prev) => {
            const newData = [...prev];
            newData[index] = 1;
            return newData;
        });
        setStart(false)
    }
    console.log(active)
    return (
        <section className="skill" id="skills">
            <h1>Habilidades</h1>
            <div className="skill-button">
                {softskills.map((element, index) => {
                    return (
                        <button className="button" style={{ backgroundColor: active[index] === 1 && '#4169E1' }} onClick={() => { handleClick(index) }} key={index}>{element}</button>
                    )
                })}
            </div>
            <div className="container-text">
                <h3 className="text" style={{color: 'black'}}>
                    {start && <p>Clique em alguma softskill</p>}
                    {active[0] === 1 && <p>Sou uma pessoa muito competitiva, desde criança fui introduzida nos esportes e isso fez com que eu desenvolvesse a vontade de sempre melhorar e querer ser o melhor.</p>}
                    {active[1] === 1 && <p>A disciplina veio muito por conta dos esportes também, em respeitar os superiores e fazer o que deve ser feito com constância.</p>}
                    {active[2] === 1 && <p>Eu tomo cuidado com o que eu falo para as pessoas e não fico a julgando por erros, tendo a empatia de ir ajudar sem ofende-la.</p>}
                    {active[3] === 1 && <p>A liderança é algo que eu não percebo mas que muitos percebem em min.</p>}
                    {active[4] === 1 && <p>O pensamento critíco é uma soft-skill que eu a uso junto com a empatia para conseguir arrumar erros e perceber falhas</p>}
                    {active[5] === 1 && <p>A criatividade veio desde criança pelo motivo de eu gostar muito de desenhar e com isso eu consigo planejar algo em minha mente e faze-la.</p>}
                </h3>

            </div>
        </section>
    )
}