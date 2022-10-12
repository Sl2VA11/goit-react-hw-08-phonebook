import { ContactForm } from 'components/ModalAddContacts/ContactForm';
import Modal from 'react-bootstrap/Modal';
import css from './ModalAddContacts.module.css';
export default function ModalAddContacts(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Here you can add a new contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={css.modal}>
        <ContactForm
        onSubmit={props.onSubmit}
        setModalShow={props.setModalShow}
      />
      </Modal.Body>
      
    </Modal>
  );
}
