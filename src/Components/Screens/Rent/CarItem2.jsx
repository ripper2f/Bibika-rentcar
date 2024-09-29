import { Col, Container, Row } from "react-bootstrap";
import RentForm from "../../Forms/RentForm";
import styles from "../../../App.module.scss";

export default function CarItem2({ carInfo }) {
  return (
    <div className={styles.div}>
      <Container key={carInfo.id} className={styles.container}>
        {/* Левая сторона */}
        <Row>
          <Col sm={8}>
            <Container>{carInfo.carousel}</Container>
            <h1 className="pt-4">
              {carInfo.name} {carInfo.model}, {carInfo.year}
            </h1>
            <p className={styles.cardtext}>
              <img
                className={styles.caritemhomeimg}
                src="/image/iconhome9.png"
                alt=""
              />
              <n style={{ color: "#6F42C1", paddingRight: 10 }}>
                {carInfo.star}
              </n>
              {carInfo.otziv}
            </p>
            <div>
              Владелец - <n style={{ color: "#6c757d" }}>{carInfo.owner}</n>
              <img
                className={styles.iconrent}
                src="/image/renticon4.png"
                alt=""
              />
            </div>
            <h2>Описание от владельца</h2>
            {carInfo.overview}
            <h3>Правила аренды</h3>
            <Row>
              <Col sm={6} style={{ color: "#adb5bd" }}>
                <p>Включенный пробег</p>
                <p>
                  Депозит{" "}
                  <n style={{ color: "#6c757d" }}>
                    (Замораживается за 3 дня до аренды и возвращается через 7
                    дней после её окончания)
                  </n>
                </p>
                <p>Минимальный стаж</p>
                <p>Минимальный возраст</p>
                <p>
                  Страховка{" "}
                  <n style={{ color: "#6c757d" }}>
                    (Полис распространяется на всех водителей автомобиля)
                  </n>
                </p>
              </Col>
              <Col sm={6} style={{ color: "#adb5bd" }}>
                <p>{carInfo.probeg1} км / сутки</p>
                <p>
                  {new Intl.NumberFormat("ru-RU").format(carInfo.deposit)} ₽
                </p>
                <br />
                <p>{carInfo.minst}</p>
                <p>{carInfo.minyear}</p>
                <p>{carInfo.insurance}</p>
              </Col>
            </Row>
            <h3>Характеристики автомобиля</h3>
            <Row>
              <Col sm={6} style={{ color: "#adb5bd" }}>
                <p>Двигатель</p>
                <p>Привод</p>
                <p>Год</p>
                <p>Мест</p>
                <p>Коробка</p>
                <p>Пробег</p>
                <p>Кузов</p>
                <p>Класс</p>
                <p>Руль</p>
              </Col>
              <Col sm={6} style={{ color: "#adb5bd" }}>
                <p>{carInfo.engine}</p>
                <p>{carInfo.drive}</p>
                <p>{carInfo.year}</p>
                <p>{carInfo.mest}</p>
                <p>{carInfo.transmission}</p>
                <p>До {carInfo.probeg2} тыс.км</p>
                <p>{carInfo.body}</p>
                <p>{carInfo.class}</p>
                <p>{carInfo.wheel}</p>
              </Col>
            </Row>
          </Col>

          {/* Правая сторона */}
          <Col sm={4}>
            {/* Импортирована форма 'отправка заявки' */}
            <RentForm />

            <Row className="pt-4">
              <Col sm={6}>
                <p>Включенный пробег</p>
                <p>Доплата за превышение</p>
              </Col>
              <Col sm={6}>
                <p className="text-end">{carInfo.probeg1} км / сут</p>
                <p className="text-end">
                  {new Intl.NumberFormat("ru-RU").format(carInfo.doplata)} ₽ /
                  км
                </p>
              </Col>
            </Row>
            <h2 className="pt-5">
              от {new Intl.NumberFormat("ru-RU").format(carInfo.price)} ₽ /
              сутки
            </h2>
            <p style={{ color: "#adb5bd", fontSize: 12 }}>
              Вы пока ни за что не платите. Оставив заявку, можно лично
              обговорить детали бронирования с собственником автомобиля.
            </p>
            <h4>Стоимость аренды</h4>
            <Row>
              <Col sm={6}>
                <p>От 1 суток</p>
                <p>
                  От 4 суток
                  <b className={styles.rentbadge}>-5 %</b>
                </p>
                <p>
                  От 7 суток
                  <b className={styles.rentbadge}>-10 %</b>
                </p>
                <p>
                  От 14 суток
                  <b className={styles.rentbadge}>-15 %</b>
                </p>
                <p>
                  От 21 суток
                  <b className={styles.rentbadge}>-20 %</b>
                </p>
              </Col>
              <Col sm={6}>
                <p>
                  {new Intl.NumberFormat("ru-RU").format(carInfo.price4)} ₽ /
                  сутки
                </p>
                <p>
                  {new Intl.NumberFormat("ru-RU").format(carInfo.price3)} ₽ /
                  сутки
                </p>
                <p>
                  {new Intl.NumberFormat("ru-RU").format(carInfo.price2)} ₽ /
                  сутки
                </p>
                <p>
                  {new Intl.NumberFormat("ru-RU").format(carInfo.price1)} ₽ /
                  сутки
                </p>
                <p>
                  {new Intl.NumberFormat("ru-RU").format(carInfo.price)} ₽ /
                  сутки
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
