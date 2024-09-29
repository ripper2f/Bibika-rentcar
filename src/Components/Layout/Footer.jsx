import { Col, Container, Nav, Row } from "react-bootstrap";
import styles from "../../App.module.scss";

export default function Footer() {
  return (
    <div className={styles.div}>
      <Container className={styles.container}>
        <Container>
          <Row>
            <Col sm={4}>
              <h5 className={styles.hh}>Сервис</h5>
              <a className={styles.navlinkfooter} href="/rent">
                Взять в аренду
              </a>
              <a className={styles.navlinkfooter} href="/sdat">
                Сдать в аренду
              </a>
              <a className={styles.navlinkfooter} href="/contacts">
                Контакты
              </a>
              <a className={styles.navlinkfooter} href="/news">
                Новости
              </a>
              <a className={styles.navlinkfooter} href="/about">
                О нас
              </a>
            </Col>
            <Col sm={4}>
              <h5 className={styles.hh}>Помощь</h5>
              <a className={styles.navlinkfooter} href="/faq">
                FAQ
              </a>
              <a className={styles.navlinkfooter} href="/faq/sdati">
                Взять авто
              </a>
              <a className={styles.navlinkfooter} href="/faq/arenda">
                Сдать авто
              </a>
              <a className={styles.navlinkfooter} href="/faq/payment">
                Платежи
              </a>
              <a className={styles.navlinkfooter} href="/faq/gibdd">
                ГИБДД
              </a>
              <a className={styles.navlinkfooter} href="/faq/reg">
                Регистрация пользователя
              </a>
            </Col>
            <Col sm={4}>
              <h5 className={styles.hh}>Связаться с нами</h5>
              <h4 style={{ color: "#6c757d" }}>+7 495 120-80-70</h4>
              <p className={styles.footertext} style={{ fontSize: 12 }}>
                ежедневно с 9:00 до 21:00
              </p>
              <div className="d-flex justify-content-start">
                <Nav.Link
                  className={styles.iconfootertg}
                  href="https://web.telegram.org"
                />
                <Nav.Link
                  className={styles.iconfootervk}
                  href="https://vk.com/"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className={styles.container} style={{ paddingBottom: 20 }}>
          <p className={styles.footertext}>© 2024 ООО «Бибика»</p>
          <p className={styles.footertext}>
            Мы объединили предложения частных автовладельцев по всей Москве и МО
          </p>
        </Container>
      </Container>
    </div>
  );
}
