import { Carousel } from 'react-bootstrap';
import css from './Home.module.css';
export default function Home() {
  return (
    <>
      <h1 className={css.homeTitle}>
        With online phonebook you <br /> will get rid of such problems as:
      </h1>
      <Carousel className={css.carousel}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://64.media.tumblr.com/18d591dea7f29576e1f5b2aed338d8f6/0cd638c873fcc7c6-d7/s640x960/d723d13cd75df71c6d337355939fdc404f499bbe.gif"
            alt="First slide"
            width={100}
            height={500}
          />
          <Carousel.Caption>
            <p className={css.imgText}>
              Long searches for contacts in the book
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
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
            className="d-block w-100"
            src="https://64.media.tumblr.com/tumblr_m5by3938Q31r9d8hxo1_500.jpg"
            alt="Third slide"
            width={100}
            height={500}
          />

          <Carousel.Caption>
            <p className={css.imgText}>The risk of losing all your contacts</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
