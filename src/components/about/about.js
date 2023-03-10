import { useState } from 'react'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaHtml5, FaCss3, FaGit, FaReact, FaSass } from 'react-icons/fa'
import {SiJavascript, SiTypescript} from 'react-icons/si'
import "./styles/styles.sass"
import  image  from '../../assets/img/93871055.jpg'

export const About = () => {
    const[page, setPage] = useState('sobre')
    const handleClick = (page) =>{
        setPage(page)
    }
    const changeColor = (name) => {
        if(page === name){
            return "#4169E1"
        }
    }
    console.log(page)
    return (
        <section className="about" id='about'>
            <div className='about-card'>
                <img className='about-image' src={image}></img>
                <div>
                    <h2>Telefone-Celular</h2>
                    <p>(021)980448191</p>
                </div>
                <div>
                    <h2>Endereço</h2>
                    <h3>CEP</h3>
                    <p>24110-296</p>
                    <p>Rio de Janeiro, Niterói, Barreto.</p>
                </div>
            </div>
            <div className="about-container">
                <div className="buttons">
                    <button className='btn-menu' style={{ backgroundColor: changeColor('sobre') }}  onClick={() => {
                        handleClick('sobre');
                    }}>Sobre</button>
                    <button className='btn-menu' style={{ backgroundColor: changeColor('hard') }}  onClick={() => {
                        handleClick('hard');
                    }}>Hard Skills</button>
                    <button className='btn-menu' style={{backgroundColor: changeColor('soft')}} onClick={() => {
                        handleClick('soft');
                    }}>Soft Skills</button>
                </div>
                <div className="about-infos">
                    {page === 'sobre' && <div className="about-infos-me">
                        <h2>Sobre min</h2>
                        <p>Me chamo Saullo Reis dos Santos, sou um desenvolvedor front-end júnior, tenho muita vontade de aprender coisas novas e conseguir evoluir.
                            Busco trabalhar com ReactJs mas estou aberto para outras propostas.</p>
                        <div className='about-infos-redes'>
                            <h3>Redes</h3>
                            <nav>
                                <a href="https://www.linkedin.com/in/saullo-reis-874852231/" target='_blank'><FaLinkedin  /></a>
                                <a href="https://www.instagram.com/saulloreis/" target='_blank'><FaInstagram  /></a>
                                <a href="https://wa.me/5521980448191" target='_blank'><FaWhatsapp /></a>
                                <a href="https://github.com/saullo-reis" target='_blank'><FaGithub  /></a>
                            </nav>
                        </div>
                    </div>}
                    {page === 'hard' &&
                        <div className='hardskills'>
                            <h2 className='hardskills-title'>Hard-Skills</h2>
                            <ul className='hardskills-container'>
                                <li>
                                    <h3><FaHtml5 /></h3>
                                    <p>HTML foi a primeira tecnologia que eu aprendi no ramo do frontend.</p>
                                </li>
                                <li>
                                    <h3><FaCss3 /></h3>
                                    <p>CSS foi a segunda tecnologia que aprendi no ramo do frontend, para conseguir com o HTML fazer landings pages, etc.</p>
                                </li >
                                <li>
                                    <h3><SiJavascript /></h3>
                                    <p>JS foi a terceira tecnologia que eu aprendi no ramo do frontend, com ele eu consegui dar vida aos meus projetos para que não ficasse algo estático.</p>
                                </li>
                                <li>
                                    <h3><FaGit /></h3>
                                    <p>O git eu utilizo ele para fazer o versionamento de meus códigos, conseguindo realizar commits e sempre mantendo meus projetos atualizados.</p>
                                </li>
                                <li>
                                    <h3><FaReact /></h3>
                                    <p>O reactjs eu aprendi logo após ter aprendido o JS, ele é um framework que eu gostei bastante e busco um dia trabalhar com ele.</p>
                                </li>
                                <li>
                                    <h3><SiTypescript /></h3>
                                    <p>Typecript é uma tecnologia nova para min, ainda não consegui práticar 100% e masterizar ele.</p>
                                </li>
                                <li>
                                    <h3><FaSass /></h3>
                                    <p>O Sass eu aprendi a pouco tempo porém gosto muito dele e provavelmente vou levar em minha mochila.</p>
                                </li>
                            </ul>
                        </div>
                        }
                    {page === 'soft' &&
                        <div className='softskills'>
                            <h2>Principais Soft Skills</h2>
                            <ul className='softskills-container'>
                                <li>Criatividade</li>
                                <li>Disciplina</li>
                                <li>Liderança</li>
                                <li>Pensamento Crítico</li>
                                <li>Empatia</li>
                                <li>Competitividade</li>
                            </ul>
                        </div>  
                        }
                    
                </div>        
            </div>
        </section>
    )
}