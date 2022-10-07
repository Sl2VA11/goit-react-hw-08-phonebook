import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Carousel } from 'react-bootstrap';
import css from './ModalFindOut.module.css';
export default function ModalFindOut (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          With our app, you can forget about:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel className={css.carouselWrapper}>
          <Carousel.Item className={css.carousel}>
            <img
              className={css.carouselImg}
              src="https://64.media.tumblr.com/18d591dea7f29576e1f5b2aed338d8f6/0cd638c873fcc7c6-d7/s640x960/d723d13cd75df71c6d337355939fdc404f499bbe.gif"
              alt="First slide"
              height={500}
            />
            <Carousel.Caption>
              <p className={css.imgText}>
                A long search for contacts in the book
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={css.carouselImg}
              src="https://64.media.tumblr.com/7df0c7f1363351efd607a6cb07e92cf6/0cd638c873fcc7c6-c4/s640x960/97a5365ee7e00314f038f8eb35bef45327274d48.gif"
              alt="Second slide"
              width={100}
              height={500}
            />

            <Carousel.Caption>
              <p className={css.imgText}>
                A complex search for contacts in the book
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={css.carouselImg}
              src="https://64.media.tumblr.com/tumblr_m5by3938Q31r9d8hxo1_500.jpg"
              alt="Third slide"
              width={100}
              height={500}
            />

            <Carousel.Caption>
              <p className={css.imgText}>
                The risk of losing all your contacts
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
