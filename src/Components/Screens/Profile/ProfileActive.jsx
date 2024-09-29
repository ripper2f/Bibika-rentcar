import { Button, Card, Container } from "react-bootstrap";
import styles from "../../../App.module.scss";
import { Link } from "react-router-dom";

export default function ProfileActive() {
  return (
    <div className={styles.div}>
      <Container className={styles.container} style={{ paddingBottom: 186 }}>
        <h4>Автомобили сдающиеся в аренду</h4>
        <Container className="d-flex justify-content-center p-4">
          <Link to="/profile/addcar">
            <Button bsPrefix={styles.button}>Добавить свой автомобиль</Button>
          </Link>
        </Container>
        <Container className="d-flex justify-content-evenly">
          <Card className={styles.activecard}>
            <Card.Img
              src="https://storage.rentride.ru/uploads/cars/506421/lg_jgL3qRDxNWBzQCAS8oQHsLEqPUTbbPVdgxPdxrSl.webp"
              alt=""
            />
            <Card.Body>
              <Card.Title>Porsche Panamera GTS, 2021</Card.Title>
              <Card.Text>
                Статус автомобиля: <n style={{ color: "#6c757d" }}>В аренде</n>
              </Card.Text>
              <Card.Text>
                Период аренды:{" "}
                <n style={{ color: "#6c757d" }}>
                  19.03.2024 10:00 - 29.03.2024 10:00
                </n>
              </Card.Text>
              <Card.Text>
                Арендатор: <n style={{ color: "#6c757d" }}>Василий Пупкин</n>
              </Card.Text>
              <Card.Text>
                Тел. арендатора:{" "}
                <n style={{ color: "#6c757d" }}>+7 (915) 300-20-10</n>
              </Card.Text>
              <Card.Text>
                Место поездки: <n style={{ color: "#6c757d" }}>Москва, МО</n>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.activecard}>
            <Card.Img
              src="https://storage.rentride.ru/uploads/cars/506047/md_l2KSLxb0MiX7bQbjcLfRaK3re5rWyNr0TI3REtvD.webp"
              alt=""
            />
            <Card.Body>
              <Card.Title>Subaru Impreza WRX STi, 2011</Card.Title>
              <Card.Text>
                Статус автомобиля: <n style={{ color: "#6c757d" }}>Свободна</n>
              </Card.Text>
              <Card.Text>
                Период аренды: <n style={{ color: "#6c757d" }}>-</n>
              </Card.Text>
              <Card.Text>
                Арендатор: <n style={{ color: "#6c757d" }}>-</n>
              </Card.Text>
              <Card.Text>
                Тел. арендатора: <n style={{ color: "#6c757d" }}>-</n>
              </Card.Text>
              <Card.Text>
                Место поездки: <n style={{ color: "#6c757d" }}>-</n>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.activecard}>
            <Card.Img
              src="https://storage.rentride.ru/uploads/cars/507004/md_K3Id481Q6It5CzP6wrYx5hTdBixHwGgjD4BXNscM.webp"
              alt=""
            />
            <Card.Body>
              <Card.Title>Lamborghini Urus, 2020</Card.Title>
              <Card.Text>
                Статус автомобиля: <n style={{ color: "#6c757d" }}>В аренде</n>
              </Card.Text>
              <Card.Text>
                Период аренды:{" "}
                <n style={{ color: "#6c757d" }}>
                  13.03.2024 14:00 - 13.04.2024 14:00
                </n>
              </Card.Text>
              <Card.Text>
                Арендатор: <n style={{ color: "#6c757d" }}>Андрей Голова</n>
              </Card.Text>
              <Card.Text>
                Тел. арендатора:{" "}
                <n style={{ color: "#6c757d" }}>+7 (900) 504-60-50</n>
              </Card.Text>
              <Card.Text>
                Место поездки: <n style={{ color: "#6c757d" }}>Москва - МО</n>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </div>
  );
}
