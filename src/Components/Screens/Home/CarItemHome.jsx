import { Card } from "react-bootstrap";
import styles from "../../../App.module.scss";

export default function CarItemHome({ carHome }) {
  return (
    <Card key={carHome.id} className={styles.cardnew}>
      <a href={carHome.id}>
        <Card.Img className={styles.cardnewimg} src={carHome.image} />
      </a>
      <Card.Body>
        <Card.Title>
          <Card.Link href={carHome.id} className={styles.cardnewlink}>
            {carHome.name} {carHome.model}, {carHome.year}
          </Card.Link>
        </Card.Title>
        <Card.Text className={styles.cardtext}>
          <img
            className={styles.caritemhomeimg}
            src="/image/iconhome9.png"
            alt=""
          />
          <n style={{ color: "#6F42C1", paddingRight: 10 }}>{carHome.star}</n>
          {carHome.otziv}
        </Card.Text>
        <Card.Subtitle>
          от {new Intl.NumberFormat("ru-RU").format(carHome.price)} ₽ / сутки
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
