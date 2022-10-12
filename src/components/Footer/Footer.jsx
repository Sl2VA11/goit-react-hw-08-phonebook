// import Container from 'components/Container/Container';
import css from './Footer.module.css';
import { FaLinkedin, FaMailBulk, FaGithub, FaTelegram } from 'react-icons/fa';
// AiFillLinkedin;


export default function Footer() {
   
  return (
    <footer>
      <div className={css.footerWrapper}>
        <div className="container">
          <div className={css.footerInfoWrapp}>
          <h3 className={css.footerSubTitle}>Сontact us</h3>
          
            <ul className={css.iconList}>
              <li class={css.iconItem}>
                <a
                  href="https://www.linkedin.com/in/vyacheslav-grobovoy/"
                  class={css.iconLink}
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <FaLinkedin className={`${css.icon} ${css.linkedin}`} />
                </a>
              </li>
              <li class={css.iconItem}>
                <a
                  href="mailto:slava.grobovoy1719@gmail.com"
                  class={css.iconLink}
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <FaMailBulk className={`${css.icon} ${css.mail}`} />
                </a>
              </li>
              <li class={css.iconItem}>
                <a
                  href="https://github.com/Sl2VA11"
                  class={css.iconLink}
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub className={`${css.icon} ${css.github}`} />
                </a>
              </li>
              <li class={css.iconItem}>
                <a
                  href="https://t.me/sl2va_2"
                  class={css.iconLink}
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <FaTelegram className={`${css.icon} ${css.telegram}`} />
                </a>
              </li>
            </ul>
            <div className={css.footerTitleWrapp}>
              <h3 className="phonebook-title">Phonebook</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
      
   
  );
}
