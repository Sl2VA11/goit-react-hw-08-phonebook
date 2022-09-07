import css from "./Contacts.module.css";

export default function ContactItem( { id, name, phone, deleteContact }) {
  
 
  return (
    <li className={css.ContactItem}>
      <p className={css.userName}>{name}:</p>

      <p className={css.userName}> {phone}</p>
      <div className={css.btnDeleteWrap}>
        <button className={css.btnDelete} onClick={() => deleteContact(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
