import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../App.module.scss";

export default function ProfileHistory() {
  return (
    <div className={styles.div}>
      <Container className={styles.container} style={{ paddingBottom: 162 }}>
        <h4>История аренд</h4>
        <Row className={styles.profilecard}>
          <Col sm={6}>
            <img
              className={styles.profilehistory}
              src="https://storage.rentride.ru/uploads/cars/506810/lg_efB2GOifEfg4WXcxo72v81IlCB8LJiWVDGFLvT7a.webp"
              alt=""
            />
            <n className="ms-4">BMW M3 30i, 2021</n>
          </Col>
          <Col sm={6}>
            <p>
              Статус сделки: <n style={{ color: "#6c757d" }}>Активна </n>
              <n style={{ color: "#00FF00" }}>•</n>
            </p>
            <p>
              Период аренды:{" "}
              <n style={{ color: "#6c757d" }}>
                20.03.2024 13:00 - 25.03.2024 19:00
              </n>
            </p>
          </Col>
        </Row>
        <Row className={styles.profilecard}>
          <Col sm={6}>
            <img
              className={styles.profilehistory}
              src="https://mag.auto3n.ru/wp-content/uploads/2021/11/widebody-stance-chevrolet-corvette-c4-7-1024x683.jpg"
              alt=""
            />
            <n className="ms-4">Chevrolet Corvette C4 ZR1, 2020</n>
          </Col>
          <Col sm={6}>
            <p>
              Статус сделки: <n style={{ color: "#6c757d" }}>Выполнена</n>
            </p>
            <p>
              Период аренды:{" "}
              <n style={{ color: "#6c757d" }}>
                16.03.2024 14:00 - 19.03.2024 16:00
              </n>
            </p>
          </Col>
        </Row>
        <Row className={styles.profilecard}>
          <Col sm={6}>
            <img
              className={styles.profilehistory}
              src="https://storage.rentride.ru/uploads/cars/506995/md_pKNydNATKYHZ2MqJJlrHGXMbEpbtt57Sjx5AxzEk.webp"
              alt=""
            />
            <n className="ms-4">Porsche 911 Turbo S, 2021</n>
          </Col>
          <Col sm={6}>
            <p>
              Статус сделки: <n style={{ color: "#6c757d" }}>Отменена</n>
            </p>
            <p>
              Период аренды:{" "}
              <n style={{ color: "#6c757d" }}>
                11.03.2024 10:00 - 12.03.2024 10:00
              </n>
            </p>
          </Col>
        </Row>
        <Row className={styles.profilecard}>
          <Col sm={6}>
            <img
              className={styles.profilehistory}
              src="https://storage.rentride.ru/uploads/cars/507008/lg_4y4TWwemwXqZfQSfNRxuso6Izu8HYcA5nPkN8ZyE.webp"
              alt=""
            />
            <n className="ms-4">Rolls-Royce Ghost, 2021</n>
          </Col>
          <Col sm={6}>
            <p>
              Статус сделки: <n style={{ color: "#6c757d" }}>Выполнена</n>
            </p>
            <p>
              Период аренды:{" "}
              <n style={{ color: "#6c757d" }}>
                10.03.2024 12:00 - 15.03.2024 15:00
              </n>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
