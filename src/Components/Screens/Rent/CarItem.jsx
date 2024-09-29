import { Card } from "react-bootstrap";
import styles from "../../../App.module.scss";

export default function CarItem({ car }) {
  return (
    <Card key={car.id} className={styles.cardrent}>
      <a href={car.id}>
        <Card.Img src={car.image} />
      </a>
      <Card.Body>
        <Card.Title>
          <Card.Link href={car.id} className={styles.cardrentlink}>
            {car.name} {car.model}, {car.year}
          </Card.Link>
        </Card.Title>
        <Card.Text className={styles.cardtext}>
          <img
            className={styles.caritemhomeimg}
            src="/image/iconhome9.png"
            alt=""
          />
          <n style={{ color: "#6F42C1", paddingRight: 10 }}>{car.star}</n>
          {car.otziv}
        </Card.Text>
        <Card.Subtitle>
          от {new Intl.NumberFormat("ru-RU").format(car.price)} ₽ / сутки
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
