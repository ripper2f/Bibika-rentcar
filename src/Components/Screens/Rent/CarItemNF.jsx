import { Card } from "react-bootstrap";
import styles from "../../../App.module.scss";

export default function CarItemNF({ carNF }) {
  return (
    <Card key={carNF.id} className={styles.cardnew}>
      <a href={carNF.id}>
        <Card.Img className={styles.cardnewimg} src={carNF.image} />
      </a>
      <Card.Body>
        <Card.Title>
          <Card.Link href={carNF.id} className={styles.cardnewlink}>
            {carNF.name} {carNF.model}, {carNF.year}
          </Card.Link>
        </Card.Title>
        <Card.Text className={styles.cardtext}>
          <img
            className={styles.caritemhomeimg}
            src="/image/iconhome9.png"
            alt=""
          />
          <n style={{ color: "#6F42C1", paddingRight: 10 }}>{carNF.star}</n>
          {carNF.otziv}
        </Card.Text>
        <Card.Subtitle>
          от {new Intl.NumberFormat("ru-RU").format(carNF.price)} ₽ / сутки
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
