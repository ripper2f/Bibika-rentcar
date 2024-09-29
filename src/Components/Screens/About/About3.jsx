import { Card, Col, Row } from "react-bootstrap";
import styles from "../../../App.module.scss";

export default function About3() {
  return (
    <>
      <Row>
        <Col sm={4} className="text-center">
          <h1 className={styles.h}>Что нам важно?</h1>
          <img
            className={styles.aboutimg}
            src="https://i.pinimg.com/564x/a0/62/c2/a062c2a1a4c87d71d013d300dbfcd665.jpg"
            alt=""
          />
        </Col>
        <Col sm={4} className="mt-3">
          <Card className={styles.aboutcard8}>
            <Card.Body>
              <Card.Title style={{ color: "#6f42c1" }}>
                Self-responsibility
              </Card.Title>
              <Card.Text>
                Мы в каждом развиваем ответственность за результат, выстраивая
                самоходную команду, которую не надо подгонять, где каждый видит
                свой вклад и как он ведет компанию к Цели!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.aboutcard8}>
            <Card.Body>
              <Card.Title style={{ color: "#6f42c1" }}>
                Доверие и открытость
              </Card.Title>
              <Card.Text>
                Прозрачность и доверие клиентов - основа нашего сервиса. Поэтому
                и внутри мы доверяем друг другу, делимся идеями и проблемами,
                успехами и неудачами.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.aboutcard8}>
            <Card.Body>
              <Card.Title style={{ color: "#6f42c1" }}>
                Счастье - это замкнутый круг
              </Card.Title>
              <Card.Text>
                Счастливые клиенты - счастливые сотрудники. Счастливые
                сотрудники - счастливые клиенты. Все просто!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} className="mt-3">
          <Card className={styles.aboutcard8}>
            <Card.Body>
              <Card.Title style={{ color: "#6f42c1" }}>
                Крепкое плечо рядом
              </Card.Title>
              <Card.Text>
                В сплоченной команде никогда не ругают игрока, если промахнулся
                и не забил гол, ему помогают забить в следующий раз! Мы знаем,
                что всегда можем положиться друг на друга.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.aboutcard8}>
            <Card.Body>
              <Card.Title style={{ color: "#6f42c1" }}>
                Уныние - смертный грех
              </Card.Title>
              <Card.Text>
                Иногда шутка может помочь больше, чем команда data scientist’ов,
                так что чувство юмора - важный для нас профессиональный навык.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
