import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../../App.module.scss";

export default function Faq() {
  return (
    <div className={styles.div}>
      <Container
        className={styles.container}
        style={{ paddingTop: 140, paddingBottom: 150 }}
      >
        <h1 className={styles.h}>Помощь пользователю</h1>
        <h5 className={styles.h}>Часто задаваемые вопросы</h5>
        <Container className="d-flex justify-content-evenly mt-5">
          <Link className={styles.cardfaqimg1} to="/faq/arenda">
            Взять в аренду
          </Link>
          <Link className={styles.cardfaqimg2} to="/faq/sdati">
            Сдать в аренду
          </Link>
          <Link className={styles.cardfaqimg3} to="/faq/payment">
            Платежи
          </Link>
          <Link className={styles.cardfaqimg4} to="/faq/gibdd">
            ГИБДД
          </Link>
          <Link className={styles.cardfaqimg5} to="/faq/reg">
            Регистрация пользователя
          </Link>
        </Container>
      </Container>
    </div>
  );
}
