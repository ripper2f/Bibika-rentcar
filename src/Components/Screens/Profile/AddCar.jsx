import { Container } from "react-bootstrap";
import CreateCar from "../../Forms/CreateCar";
import styles from "../../../App.module.scss";

export default function AddCar() {
  return (
    <div className={styles.div}>
      <Container className={styles.container}>
        <CreateCar />
      </Container>
    </div>
  );
}
