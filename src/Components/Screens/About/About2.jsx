import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../../App.module.scss";

export default function About2() {
  return (
    <>
      <h1 className={styles.h}>Что нас ждет и где окажется Bibika?</h1>
      <p className={styles.abouttext}>
        Автомобильная индустрия стоит на пороге самых значимых перемен с 1913
        года.
      </p>
      <p className="text-center">
        Массовое внедрение беспилотников и новых форм владения авто сотрет грань
        между сервисами, требущих от пользователя управлять авто и
        подразумевающих наличие водителя.
      </p>
      <p className="text-center">
        Они сольются в мультимодальные транспортные платформы, одной из которых
        мы хотим стать к тому времени!
      </p>
      <Card className={styles.aboutcard2}>
        <Card.Title>Фаза 1</Card.Title>
        <Card.Text>
          Рост спроса на продукты, позволяющие использовать авто в режиме
          on-demand, управляя им самостоятельно
        </Card.Text>
      </Card>
      <n style={{ color: "#6F42C1" }}>→</n>
      <Card className={styles.aboutcard2}>
        <Card.Title>Фаза 2</Card.Title>
        <Card.Text>
          Появление продуктов, предоставляющих автомобили как услугу —
          Car-as-a-Service, при этом автономные
        </Card.Text>
      </Card>
      <hr />
      <Row>
        <Col sm={6}>
          <Container className="d-flex justify-content-center">
            <div className={styles.line}></div>
            <Card className={styles.aboutcard3}>
              <Card.Title>Сам за рулем</Card.Title>
              <Card.Subtitle className={styles.aboutcardsubtitle}>
                Автопрокат
              </Card.Subtitle>
              <Card.Subtitle className={styles.aboutcardsubtitle}>
                Каршеринг
              </Card.Subtitle>
            </Card>
          </Container>
          <Container className="d-flex justify-content-center">
            <Card className={styles.aboutcard4}>
              <Card.Title>Цифровизация и sharing</Card.Title>
            </Card>
          </Container>
          <Container className="d-flex justify-content-center">
            <Card className={styles.aboutcard5}>
              <Card.Title>Новые формы владения и использования авто</Card.Title>
            </Card>
          </Container>
        </Col>
        <Col sm={6}>
          <Container className="d-flex justify-content-center">
            <div className={styles.line3}></div>
            <Card className={styles.aboutcard3}>
              <Card.Title>Требуется водитель</Card.Title>
              <Card.Subtitle className={styles.aboutcardsubtitle}>
                Такси(Uber)
              </Card.Subtitle>
              <Card.Subtitle className={styles.aboutcardsubtitle}>
                BlaBlaCar
              </Card.Subtitle>
            </Card>
          </Container>
        </Col>
      </Row>
      <Container className="d-flex justify-content-center">
        <div className={styles.line2}></div>
        <div className={styles.line4}></div>
        <Card className={styles.aboutcard6}>
          <Card.Title>Автономное вождение</Card.Title>
        </Card>
      </Container>
      <Container className="d-flex justify-content-center">
        <Card className={styles.aboutcard7}>
          <Card.Title>Новая мобильность</Card.Title>
        </Card>
      </Container>
    </>
  );
}
