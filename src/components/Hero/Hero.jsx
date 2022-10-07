import css from './Hero.module.css';

import ModalFindOut from 'components/ModalFindOut/ModalFindOut';
import { useState } from 'react';
export default function Hero() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={css.hero}>
        <div className={css.heroTextWrapper}>
          <h1 className={css.heroTitle}>
            Find out what problems our app solves
          </h1>
          <button className={css.heroBtn} onClick={() => setModalShow(true)}>
            Find out
          </button>
        </div>
      </div>
      <ModalFindOut show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
