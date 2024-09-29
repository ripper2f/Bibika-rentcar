import { Card, CardGroup } from "react-bootstrap";
import styles from "../../../App.module.scss";

export default function About4() {
  return (
    <>
      <h1 className={styles.h}>Как мы работаем?</h1>
      <CardGroup className="pt-5">
        <Card className={styles.aboutcard8}>
          <Card.Img
            className={styles.aboutcardimg2}
            src="/image/icon1.png"
            alt=""
          />
          <Card.Body>
            <Card.Title>Без галстуков и бюрократии</Card.Title>
            <Card.Text>
              Плоская горизонтальная структура и быстрые процессы, на расстоянии
              вытянутой руки. Наше преимущество — скорость принятия решений и
              доставки их до пользователя.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.aboutcard8}>
          <Card.Img
            className={styles.aboutcardimg2}
            src="/image/icon2.png"
            alt=""
          />
          <Card.Body>
            <Card.Title>С чувством голода</Card.Title>
            <Card.Text>
              До новых идей, до новых точек роста, до нового опыта, до новых
              продуктов, до новых рынков. Как Джобс завещал.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.aboutcard8}>
          <Card.Img
            className={styles.aboutcardimg2}
            src="/image/icon3.png"
            alt=""
          />
          <Card.Body>
            <Card.Title>Официально</Card.Title>
            <Card.Text>
              Мы полностью «белая» компания, это касается и трудовых отношений —
              все в полном соответствии с ТК.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="pt-5">
        <Card className={styles.aboutcard8}>
          <Card.Img
            className={styles.aboutcardimg2}
            src="/image/icon4.png"
            alt=""
          />
          <Card.Body>
            <Card.Title>С вдохновением</Card.Title>
            <Card.Text>
              Нам нравится создавать масштабный продукт и видеть, как он реально
              помогает людям вокруг.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.aboutcard8}>
          <Card.Img
            className={styles.aboutcardimg2}
            src="/image/icon5.png"
            alt=""
          />
          <Card.Body>
            <Card.Title>Как одна стая</Card.Title>
            <Card.Text>
              Относимся друг к другу с вниманием и добротой. Мы с тобой одной
              крови: ты и я!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.aboutcard8}>
          <Card.Img
            className={styles.aboutcardimg2}
            src="/image/icon6.png"
            alt=""
          />
          <Card.Body>
            <Card.Title>Без халтуры</Card.Title>
            <Card.Text>
              Не получается задача? Сделай паузу, посоветуйся с тем кто рядом,
              попроси помощи или ресурсов. Но сделай хорошо, не на троечку.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}
