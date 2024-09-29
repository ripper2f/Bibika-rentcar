import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../../App.module.scss";
import { useMemo } from "react";
import { cars } from "./cars.data";
import CarItemNF from "./CarItemNF";

export default function NotFounded() {
  const filter = useMemo(
    () => cars.filter((carNF) => carNF.id < 19 && carNF.id > 14),
    []
  );
  return (
    <div className={styles.div}>
      <Container className={styles.container} style={{ maxWidth: 1300 }}>
        <Card className={styles.cardnf}>
          <Row>
            <Col sm={1}>
              <Card.Img src="/image/renticon5.png" alt="" />
            </Col>
            <Col sm={11}>
              <Card.Body>
                <Card.Title>По вашему запросу ничего не найдено</Card.Title>
                <Card.Text>
                  Попробуйте что-то изменить в фильтрах или начните{" "}
                  <Card.Link href="/rent" className={styles.cardnflink}>
                    искать без фильтров
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <h2 className={styles.h} style={{ paddingTop: 56 }}>
          Рекомендуемые автомобили
        </h2>
        {filter.length ? (
          filter.map((carNF) => <CarItemNF key={carNF.id} carNF={carNF} />)
        ) : (
          <NotFounded />
        )}
      </Container>
    </div>
  );
}
