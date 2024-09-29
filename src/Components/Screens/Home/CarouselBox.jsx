import { Carousel, Container } from "react-bootstrap";
import styles from "../../../App.module.scss";

export default function CarouselBox() {
  return (
    <Container className={styles.container}>
      <Carousel className={styles.carousel} fade={true}>
        <Carousel.Item className={styles.crouselitem}>
          <img className={styles.carouselimg} src="/image/cars9.jpg" alt="1" />
          <Carousel.Caption className={styles.carouselcaption}>
            <h3>Premium</h3>
            <p>
              Автомобили с образцовыми показателями динамики, безопасности и
              комфорта. Такие машины имеют богатые комплектации и часто первыми
              примеряют на себе новейшие технологии.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.crouselitem}>
          <img className={styles.carouselimg} src="/image/cars10.jpg" alt="2" />
          <Carousel.Caption className={styles.carouselcaption}>
            <h3>Exclusive</h3>
            <p>
              Автомобиль, который обеспечивает комфорт, характеристики и
              оснащение элитного уровня. Используются более дорогие материалы и
              отделка поверхности, соответственно более высокая цена и более
              высококлассный внешний вид.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.crouselitem}>
          <img className={styles.carouselimg} src="/image/cars11.jpg" alt="3" />
          <Carousel.Caption className={styles.carouselcaption}>
            <h3>Tuning</h3>
            <p>
              Модификация серийной модели ради улучшения её технических
              характеристик и динамики. В понятие тюнинга входит именно внесение
              доработок в конструкцию.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
