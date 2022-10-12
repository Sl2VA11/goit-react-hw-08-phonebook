import css from './ContactsList.module.css';
import { FaUserNinja } from 'react-icons/fa';
import { TbArrowNarrowDown, TbArrowNarrowUp } from 'react-icons/tb';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useState } from 'react';

export default function ContactItem({ id, name, number, deleteContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <li className={css.ContactItem}>
      <div className={css.btnToogleWrapp}>
        <button onClick={() => toggle()} className={css.btnNarrow}>
          {isOpen ? (
            <TbArrowNarrowUp className={css.narrowIcon} />
          ) : (
            <TbArrowNarrowDown
              className={`${css.narrowIcon} ${css.iconDown}`}
            />
          )}
        </button>
      </div>
      <div className={css.userInfoWrapp}>
        <FaUserNinja className={css.userIcon} />
        <p className={css.userName}>{name}</p>
      </div>

      <div className={isOpen ? css.openBlock : css.hideBlock}>
        <div className={css.userInfoWrapp}>
          <BsFillTelephoneFill className={css.userIcon} />
          <p className={css.userName}> {number}</p>
        </div>

        <div className={css.btnDeleteWrap}>
          <button className={css.btnDelete} onClick={() => deleteContact(id)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
