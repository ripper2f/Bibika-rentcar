import { Card, CardGroup, Container } from "react-bootstrap";
import styles from "../../../App.module.scss";

export default function HomePopular() {
  return (
    <Container className={styles.container}>
      <h2 className={styles.h}>Наши приемущества</h2>
      <CardGroup className="pt-4">
        <Card className={styles.cardadvantages}>
          <Card.Img
            className={styles.cardadvantagesimg}
            src="/image/iconhome1.png"
            alt=""
          />
          <Card.Body className="text-center">
            <Card.Title>Экономьте до 50% на дальних поездках</Card.Title>
            <Card.Subtitle>
              На длинные поездки большинство собственников предоставляют хорошие
              скидки
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className={styles.cardadvantages}>
          <Card.Img
            className={styles.cardadvantagesimg}
            src="/image/iconhome2.png"
            alt=""
          />
          <Card.Body className="text-center">
            <Card.Title>
              Путешествуйте по всей России без ограничений
            </Card.Title>
            <Card.Subtitle>
              В отличии от каршеринга, наши собственники готовы отпустить свои
              автомобили в самые дальние края
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className={styles.cardadvantages}>
          <Card.Img
            className={styles.cardadvantagesimg}
            src="/image/iconhome3.png"
            alt=""
          />
          <Card.Body className="text-center">
            <Card.Title>Бесплатная отмена за 48 часов</Card.Title>
            <Card.Subtitle>
              Полный возврат средств можно сделать бесплатно отменив
              бронирование за 2 суток до начала аренды
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className={styles.cardadvantages}>
          <Card.Img
            className={styles.cardadvantagesimg}
            src="/image/iconhome4.png"
            alt=""
          />
          <Card.Body className="text-center">
            <Card.Title>Бонусная программа</Card.Title>
            <Card.Subtitle>
              С каждой аренды вам вернется 1% кэшбэка баллами, которые вы
              сможете потратить на будущие поездки
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup style={{ padding: "70px" }}>
        <Card className={styles.cardadvantages}>
          <Card.Img
            className={styles.cardadvantagesimg}
            src="/image/iconhome5.png"
            alt=""
          />
          <Card.Body className="text-center">
            <Card.Title>
              Более 2000 автомобилей на любой вкус и кошелек
            </Card.Title>
            <Card.Subtitle>
              В каталоге представлены хэтчбеки, недорогие седаны, кроссоверы,
              бизнес и ретро автомобили
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className={styles.cardadvantages}>
          <Card.Img
            className={styles.cardadvantagesimg}
            src="/image/iconhome6.png"
            alt=""
          />
          <Card.Body className="text-center">
            <Card.Title>Все авто застрахованы</Card.Title>
            <Card.Subtitle>Автомобили застрахованы по ОСАГО</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className={styles.cardadvantages}>
          <Card.Img
            className={styles.cardadvantagesimg}
            src="/image/iconhome7.png"
            alt=""
          />
          <Card.Body className="text-center">
            <Card.Title>Электронный документооборот</Card.Title>
            <Card.Subtitle>
              Никаких бумажных актов и договоров аренды, все формируется
              электронно в удобном приложении
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
