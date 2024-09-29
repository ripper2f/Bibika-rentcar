import { Container } from "react-bootstrap";
import styles from "../../../App.module.scss";
import Filter1 from "./Filter1";

export default function Rent() {
  return (
    <div className={styles.div}>
      <Container className={styles.container} style={{ maxWidth: 1300 }}>
        <h2 className={styles.h}>Аренда автомобилей без водителя</h2>
        <Filter1 />
      </Container>
    </div>
  );
}
