import { Container } from "react-bootstrap";
import styles from "../../App.module.scss";
import { Link } from "react-router-dom";

export default function NF() {
  return (
    <div className={styles.divnf}>
      <Container>
        <h1 className={styles.nfh1}>Error 404</h1>
        <h2 className={styles.nfh2}>Page Not Found</h2>
        <Link to="/" className={styles.backlinknf}>
          « Вернутся на главную
        </Link>
      </Container>
    </div>
  );
}
