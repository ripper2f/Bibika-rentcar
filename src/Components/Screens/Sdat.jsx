import { Container, Button, Card, Row, Col } from "react-bootstrap";
import SdatForm from "../Forms/SdatForm";
import styles from "../../App.module.scss";

export default function Sdat() {
  return (
    <div className={styles.div}>
      {/* Первый блок */}
      <Container className={styles.container}>
        <Row>
          <Col sm={8} className="pt-5">
            <h1 className={styles.h}>
              Сдавайте свою машину в аренду в Москве и зарабатывайте от 45 000
              ₽/мес.
            </h1>
            <h4 className={styles.h}>
              Занимайтесь личными делами, пока ваш автомобиль зарабатывает
              деньги
            </h4>
            <Container className="d-flex justify-content-evenly">
              <Button
                href="/profile/addcar"
                className="mt-5"
                bsPrefix={styles.button}
              >
                Начать зарабатывать
              </Button>

              {/* Импортированa форма 'обратная связь' */}
              <SdatForm />
            </Container>
          </Col>
          <Col sm={4} className="d-flex justify-content-center">
            <img
              className={styles.sdatimg}
              src="https://i.pinimg.com/564x/7c/6b/0d/7c6b0d7f3decaa0db762e00c1ec6cd61.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>

      {/* Второй блок */}
      <Container className={styles.container}>
        <h1 className={styles.h}>Наши приемущества</h1>
        <Container className="d-flex justify-content-center">
          <Card className={styles.sdatcard}>
            <Card.Img src="/image/iconsdat1.png" alt="" />
            <Card.Body>
              <Card.Title>Служба безопасности</Card.Title>
              <Card.Text>
                Каждый арендатор проходит обязательную проверку службой
                безопасности.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.sdatcard}>
            <Card.Img src="/image/iconsdat2.png" alt="" />
            <Card.Body>
              <Card.Title>Юр. безопасность</Card.Title>
              <Card.Text>
                Для каждой аренды формируются электронные договор и акт, которые
                защитят ваш автомобиль.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.sdatcard}>
            <Card.Img src="/image/iconsdat3.png" alt="" />
            <Card.Body>
              <Card.Title>Служба поддержки</Card.Title>
              <Card.Text>
                Наши менеджеры всегда готовы помочь вам в любой ситуации 7 дней
                в неделю.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Container className="d-flex justify-content-center">
          <Card className={styles.sdatcard}>
            <Card.Img src="/image/iconsdat4.png" alt="" />
            <Card.Body>
              <Card.Title>Только личные цели</Card.Title>
              <Card.Text>
                На платформе запрещено арендовать автомобиль под любые
                коммерческие цели (такси, доставки).
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Container className="d-flex justify-content-center">
          <Card className={styles.sdatcard2}>
            <Card.Title className="text-center mt-1">
              Комиссия сервиса <n style={{ color: "#6f42c1" }}>всего 15%</n>
            </Card.Title>
          </Card>
        </Container>
      </Container>

      {/* Третий блок */}
      <Container className={styles.container}>
        <h1 className={styles.h}>Как это работает?</h1>
        <Container className="d-flex justify-content-between pt-3">
          <Card className={styles.sdatcard3}>
            <Card.Title>1. Заполняете условия</Card.Title>
            <Card.Text>
              Вы указываете данные а/м и условия аренды: фотографии, минимальный
              стаж, стоимость и размер депозита
            </Card.Text>
          </Card>
          <n style={{ color: "#6c757d" }}>→</n>
          <Card className={styles.sdatcard3}>
            <Card.Title>2. Получаете заявки</Card.Title>
            <Card.Text>
              Вам приходят заявки на аренду машины и вы их согласовываете
            </Card.Text>
          </Card>
          <n style={{ color: "#6c757d" }}>→</n>
          <Card className={styles.sdatcard3}>
            <Card.Title>3. Зарабатываете деньги</Card.Title>
            <Card.Text>
              Сдаете автомобиль в аренду и получаете деньги с началом аренды
            </Card.Text>
          </Card>
        </Container>
      </Container>
      <Container className="d-flex justify-content-center">
        <Button
          href="/profile/addcar"
          bsPrefix={styles.button}
          className="mt-5"
        >
          Заполнить заявку
        </Button>
      </Container>

      {/* Четвертый блок */}
      <Container className={styles.container}>
        <h1 className={styles.h}>Индивидуальный подход</h1>
        <Row>
          <Col sm={4} className="d-flex justify-content-center">
            <img
              className={styles.sdatimg2}
              src="https://i.pinimg.com/564x/99/40/cf/9940cf7f8481ccf4fcbb367a6b2488a3.jpg"
              alt=""
            />
          </Col>
          <Col sm={8}>
            <Card className={styles.sdatcard4}>
              <Row>
                <Col sm={1}>
                  <Card.Img src="/image/iconsdat5.png" alt="" />
                </Col>
                <Col sm={11}>
                  <Card.Body>
                    <Card.Title>Ваше авто - вам решать</Card.Title>
                    <Card.Text>
                      Вы сами определяете тарифы, где передавать а/м арендатору
                      и размер депозита.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className={styles.sdatcard4}>
              <Row>
                <Col sm={1}>
                  <Card.Img src="/image/iconsdat5.png" alt="" />
                </Col>
                <Col sm={11}>
                  <Card.Body>
                    <Card.Title>Умные тарифы</Card.Title>
                    <Card.Text>
                      Сервис помогает установить тарифы для максимизации вашего
                      дохода.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className={styles.sdatcard4}>
              <Row>
                <Col sm={1}>
                  <Card.Img src="/image/iconsdat5.png" alt="" />
                </Col>
                <Col sm={11}>
                  <Card.Body>
                    <Card.Title>Календарь доступности</Card.Title>
                    <Card.Text>
                      Вы можете закрыть для аренды любые даты, в которые вы не
                      хотите сдавать а/м.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
