import { useEffect, useState } from "react"
import './styles/styles.sass'

export const Skills = () => {
    const [softskills] = useState(['Competitividade', 'Disciplina', 'Empatia', 'Liderança', 'Pensamento Critico', 'Criatividade'])
    const [activeSoft, setActiveSoft] = useState([0, 0, 0, 0, 0, 0])
    const [activeHard, setActiveHard] = useState([0, 0, 0, 0, 0, 0])
    const [start, setStart] = useState(true)
    const [hardskills] = useState(['HTML', 'CSS', 'Js', 'ReactJs', 'Sass', 'Git', 'TypeScript'])
    const [box, setBox] = useState('')

    console.log(start)
    const handleClickSoft = (index) => {
        setActiveSoft([0, 0, 0, 0, 0, 0])
        setActiveHard([0, 0, 0, 0, 0, 0])
        setActiveSoft((prev) => {
            const newData = [...prev];
            newData[index] = 1;
            return newData;
        });
        setStart(false)
    }
    const handleClickHard = (index) => {
        setActiveHard([0, 0, 0, 0, 0, 0])
        setActiveSoft([0, 0, 0, 0, 0, 0])
        setActiveHard((prev) => {
            const newData = [...prev];
            newData[index] = 1;
            return newData;
        });
        setStart(false)
    }
    const boxClick = (skill) => {
        setBox(skill)
    }

    return (
        <section className="skill" id="skills">
            <h1>Habilidades</h1>
            <div className="skill-button ">
                <button  style={{ backgroundColor: box === 'soft' && '#4169E1' }} onClick={() => {boxClick('soft')}}>Soft-Skills</button>
                <button style={{ backgroundColor: box === 'hard' && '#4169E1' }}  onClick={() => {boxClick('hard')}}>Hard-Skills</button>
            </div>
            {box === 'soft' && <div className="skill-button">
                {softskills.map((element, index) => {
                    return (
                        <button className="button" style={{ backgroundColor: activeSoft[index] === 1 && '#4169E1' }} onClick={() => { handleClickSoft(index) }} key={index}>{element}</button>
                    )
                })}
            </div>}
            {box === 'hard' && <div className="skill-button">
                {hardskills.map((element, index) => {
                    return (
                        <button className="button" style={{ backgroundColor: activeHard[index] === 1 && '#4169E1' }} onClick={() => { handleClickHard(index) }} key={index}>{element}</button>
                    )
                })}
            </div>}

            <div className="container-text">
                <h3 className="text" style={{ color: 'black' }}>
                    {box === '' && <p>Clique em alguma habilidade</p>}
                    {box === 'soft' && start && <p>Clique em alguma Soft-Skill</p>}
                    {box === 'hard' && start && <p>Clique em alguma Hard-Skill</p>}
                    <div>
                        {activeSoft[0] === 1 && <p>Sou uma pessoa muito competitiva, desde criança fui introduzida nos esportes e isso fez com que eu desenvolvesse a vontade de sempre melhorar e querer ser o melhor.</p>}
                        {activeSoft[1] === 1 && <p>A disciplina veio muito por conta dos esportes também, em respeitar os superiores e fazer o que deve ser feito com constância.</p>}
                        {activeSoft[2] === 1 && <p>Eu tomo cuidado com o que eu falo para as pessoas e não fico a julgando por erros, tendo a empatia de ir ajudar sem ofende-la.</p>}
                        {activeSoft[3] === 1 && <p>A liderança é algo que eu não percebo mas que muitos percebem em min.</p>}
                        {activeSoft[4] === 1 && <p>O pensamento critíco é uma soft-skill que eu a uso junto com a empatia para conseguir arrumar erros e perceber falhas</p>}
                        {activeSoft[5] === 1 && <p>A criatividade veio desde criança pelo motivo de eu gostar muito de desenhar e com isso eu consigo planejar algo em minha mente e faze-la.</p>}
                    </div>  
                    <div>
                        {activeHard[0] === 1 && <p>HTML foi a primeira tecnologia que eu aprendi no ramo do frontend.
                        Todos projetos até agora eu utilizei o HTML tanto ele no react quanto ele separado.</p>}
                        {activeHard[1] === 1 && <p>CSS foi a segunda tecnologia que aprendi no ramo do frontend, para conseguir com o HTML fazer landings pages, etc. Hoje em dia uso o Sass que é o CSS melhorado.</p>}
                        {activeHard[2] === 1 && <p>JS foi a terceira tecnologia que eu aprendi no ramo do frontend, com ele eu consegui dar vida aos meus projetos para que não ficasse algo estático. Ja utilizei ele separado para fazer alguns projetos como o da calculadora</p>}
                        {activeHard[3] === 1 && <p>O reactjs eu aprendi logo após ter aprendido o JS, ele é um framework que eu gostei bastante e busco um dia trabalhar com ele. O react eu fiz alguns projetos pessoais como o do TMDB, o do pokedex e a loja-rpg.</p>}
                        {activeHard[4] === 1 && <p>O Sass eu aprendi a pouco tempo porém gosto muito dele e provavelmente vou levar em minha mochila. Utilizei ele no projeto Galleria, e estou usando nesse portfólio.</p>}
                        {activeHard[5] === 1 && <p>O git eu utilizo ele para fazer o versionamento de meus códigos, conseguindo realizar commits e sempre mantendo meus projetos atualizados. O git eu utilizo em todos os projetos.</p>} 
                        {activeHard[6] === 1 && <p>Typecript é uma tecnologia nova para min, ainda não consegui práticar 100% e masterizar ele. Por enquanto não fiz nenhum projeto com ele.</p>}
                    </div>  
                </h3>
            </div>
        </section>
    )
}