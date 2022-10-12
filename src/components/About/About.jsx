import css from './About.module.css'
import Container from 'components/Container/Container'
export default function About() {
   return (
     <div className={css.about}>
       <Container>
         <h2 className={css.aboutTitle}>Why us?</h2>
         <ul className={css.aboutList}>
           <li className={css.aboutItem}>
             <img
               src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/daf34b153292347.632cb5933964d.png"
               alt="phonebook"
               className={css.aboutImg}
             />
             <p className={css.aboutText}>
               Сlear, modern design and application functionality
             </p>
           </li>
           <li className={css.aboutItem}>
             <img
               src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/90b912153292347.632cb5933703c.png"
               alt=""
               className={css.aboutImg}
             />
             <p className={css.aboutText}>
               The ability to use the app from your phone
             </p>
           </li>
           <li className={css.aboutItem}>
             <img
               src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0690a5153292347.632cb593378fe.png"
               alt=""
               className={css.aboutImg}
             />
             <p className={css.aboutText}>
               Also, you can use the our app from your computers
             </p>
           </li>
           <li className={css.aboutItem}>
             <img
               src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fbfeff153292347.632cb59338e12.png"
               alt=""
               className={css.aboutImg}
             />
             <p className={css.aboutText}>
               You can use our app from anywhere in the world
             </p>
           </li>
         </ul>
       </Container>
     </div>
   );
}