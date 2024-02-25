import styles from './Skills.module.css'
import javascript from '../../images/skills/javascript.svg'
import html from '../../images/skills/html.svg'
import css from '../../images/skills/css.svg'
import typescript from '../../images/skills/typescript.svg'
import react from '../../images/skills/react.svg'

function Skills (){
return(
    <div className={styles.skill} id="Skills">
        <h1>Habilidades</h1>
        <p>Coheça um pouco das minhas principais habilidades e conhecimentos.</p>
        <div>
            <img src={javascript}/>
            <img src={html}/>
            <img src={css}/>
            <img src={react}/>
            <img src={typescript}/>
        </div>
    </div>

    )
    
}

export default Skills