 import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
 import styles from "./footer.module.css"
 
 function Footer (){
    return (
        <div className={styles.footer}>
            <ul>
            <li><a href='https://www.instagram.com/romanet094/'><FaInstagram size={30}/></a></li>
            <li><a href='https://github.com/Romandnc'><FaGithub size={30}/></a></li>
            <li><a href='https://www.linkedin.com/in/roman-reyna/'><FaLinkedin size={30}/></a></li>
         </ul>
            <p>reynaroman753@gmail.com</p>
            <p>Reyna Roman  © 2024</p>

        </div>

    )
 }

 export default Footer