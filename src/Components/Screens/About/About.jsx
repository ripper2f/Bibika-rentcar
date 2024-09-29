import { Container, Tab, Nav, Row, Col, Card } from "react-bootstrap";
import About2 from "./About2";
import About3 from "./About3";
import About4 from "./About4";
import styles from "../../../App.module.scss";

export default function About() {
  return (
    <div className={styles.div}>
      <Container className={styles.container}>
        <Tab.Container id="tabs" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className={styles.tabsnav}>
                <Nav.Item>
                  <Nav.Link eventKey="first" bsPrefix={styles.tabslink}>
                    К чему мы стремимся?
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" bsPrefix={styles.tabslink}>
                    Что нас ждет и где окажется Bibika?
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" bsPrefix={styles.tabslink}>
                    Что нам важно?
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" bsPrefix={styles.tabslink}>
                    Как мы работаем?
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {/* Первая вкладка */}
                <Tab.Pane eventKey="first">
                  <h1 className={styles.h}>К чему мы стремимся?</h1>
                  <p className={styles.abouttext}>
                    Компания была основана в 2019 году из личной транспортной
                    задачи основателей, решить которую удалось лишь найдя машину
                    у знакомых чьих-то знакомых.
                  </p>
                  <p className={styles.abouttext}>
                    За 5 лет работы, выявляя потребности пользователей и
                    расширяя под них ассортимент, Bibika сталa маркетплейсом по
                    аренде эксклюзивных и тюнингованных авто, предлагая
                    пользователям, единожды зарегистрировавшись, всегда иметь
                    качественный сервис и удобный интерфейс для самых разных
                    кейсов.
                  </p>
                  <Card className={styles.aboutcard}>
                    <Card.Img
                      className={styles.aboutcardimg}
                      src="https://rentride.ru/_nuxt/13f5f1492f76576ed287590814264f45.svg"
                    />
                    <Card.Body>
                      <Card.Title className="text-center">Вчера</Card.Title>
                      <Card.Subtitle className="text-center">
                        СТАРТАП
                      </Card.Subtitle>
                      <hr style={{ color: "#212529" }} />
                      <Card.Text>
                        <b>Уникальный для России продукт</b>
                        <p>
                          Из личной потребности сделали продукт, который помог
                          уже десяткам тысяч людей решить свои транспортные
                          задачи.
                        </p>
                        <b>Достигли показателей</b>
                        <p>
                          На конец 2023 года у нас было 70 000
                          зарегистрированных пользователей и 8950 машин. В 3
                          раза выросло количество аренд 2023 vs 2022.
                        </p>
                        <b>Учились у лучших, стали сильнее</b>
                        <p>
                          В 2020 наша команда успешно прошла акселератор ФРИИ и
                          качественно перестроила свою работу, что продолжает
                          приносить результаты.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className={styles.aboutcard}>
                    <Card.Img
                      className={styles.aboutcardimg}
                      src="https://rentride.ru/_nuxt/98dda586e120dfd0094fd46b205a018d.svg"
                    />
                    <Card.Body>
                      <Card.Title className="text-center">Сегодня</Card.Title>
                      <Card.Subtitle className="text-center">
                        ЛИДЕР РОССИЙСКОГО РЫНКА
                      </Card.Subtitle>
                      <hr style={{ color: "#212529" }} />
                      <Card.Text>
                        <b>Сохраняем темп</b>
                        <p>
                          На протяжении всей жизни компании нам удается каждый
                          год кратно растить наши ключевые показатели и
                          сохранять темпы роста, занимая при этом лидирующее
                          положение на рынке.
                        </p>
                        <b>Расширяем продуктовую линейку</b>
                        <p>
                          Следуя за потребностями пользователей мы создали
                          группу продуктов в разных рыночных нишах. Начали
                          сотрудничать с автопроизводителями.
                        </p>
                        <b>Развиваем партнерства</b>
                        <p>
                          Аппетит приходит во время еды. У нас появились
                          амбициозные цели масштаба создания нового
                          транспортного решения, для их достижения мы
                          договорились о партнерстве с отраслевым гигантом ПАО
                          "Газпром Нефть".
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className={styles.aboutcard}>
                    <Card.Img
                      className={styles.aboutcardimg}
                      src="https://rentride.ru/_nuxt/ce22ac69a42f8aa9dbede9d41fcc43c9.svg"
                    />
                    <Card.Body>
                      <Card.Title className="text-center">Завтра</Card.Title>
                      <Card.Subtitle className="text-center">
                        ГЛОБАЛЬНАЯ КОМПАНИЯ
                      </Card.Subtitle>
                      <hr style={{ color: "#212529" }} />
                      <Card.Text>
                        <b>Покоряем зарубежные рынки</b>
                        <p>
                          Мы планируем начать выход на зарубежные рынки в 2022
                          году, сохранив в Москве Bibika офис и продуктовую
                          команду.
                        </p>
                        <b>Продолжаем продуктовую экспансию</b>
                        <p>
                          Опыт наших пользователей - это основа, на которой мы
                          сможем развить продуктовую экосистему, построенную
                          вокруг автомобилей и современных способов их
                          эксплуатации. Когда настанет эра новой мобильности,
                          Bibika будет одним из трендсеттеров.
                        </p>
                        <b>Что-то милое, о том как мы спасаем мир</b>
                        <p>
                          Здесь хорошо бы написать что-то, полное эмпатии и
                          гуманизма, но мы пока не доросли до собственного
                          специалиста по ментальному здоровью :)
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                {/* Импортированы 3 вкладки */}
                <Tab.Pane eventKey="second">
                  <About2 />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <About3 />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <About4 />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}
