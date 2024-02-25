import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation (){
    return(
        <div className={styles.presentation} id="Presentation">
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h4>Olá, eu sou Reyna Roman!</h4>
             <p>
              Entusiasta de tecnologia e inovação, sempre buscando aprender e me adaptar rapidamente a novas ferramentas
              e ambientes. Minhas habilidades interpessoais e colaborativas facilitam o trabalho em equipe e a conquista de 
              objetivos. Curso Engenharia de Software e me dedico a um curso com foco em desenvolvimento 
              Full Stack.
            </p>
            <ButtonA link='https://github.com/Romandnc' text='Conecte-se Comigo'/>
      


        </div>
    )
}
 export default Presentation