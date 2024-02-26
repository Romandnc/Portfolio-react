import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../images/projects/lpdnc.svg'
import CCXP22 from '../../images/projects/CCXP22.png'
import SolarSystem from '../../images/projects/SolarSystem.png'


function Projects (){
    return (
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            <Card
            img={lpdnc}
            title="LP - DNC"
            tech="HTML, CSS "
            description="Desevolvimento de uma landing page para o lançamento da formaçao em tecnologia."
            repo="https://github.com/Romandnc/Projeto-Lp-arquiteto"
            site="https://arquiteturaresidencialecomerciall.netlify.app/"           
            />

            <Card
            img={CCXP22}
            title="CCXP22"
            tech="HTML, CSS, JAVASCRIPT "
            description="Desevolvimento de uma landing page de contagem regresiva para o lançamento de um evento."
            repo="https://github.com/Romandnc/projeto-ccxp2022"
            site="https://projeto-ccxp2022.netlify.app/"           
            />

            <Card
            img={SolarSystem}
            title="Solar System"
            tech="HTML, CSS, JAVASCRIPT "
            description="Desafio feito em dupla com meu colega Marcelo. Construimos um site com experiência interativa e informativa."
            repo="https://github.com/Marcelo-Anselmo/SolarSystem?tab=readme-ov-file"
            site="https://solar-system-weld-chi.vercel.app/"           
            />

           
         </div>
    )

}

export default Projects