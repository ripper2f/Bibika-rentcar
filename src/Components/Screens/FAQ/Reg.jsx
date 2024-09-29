import { Accordion, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../../App.module.scss";

export default function Reg() {
  return (
    <div className={styles.div}>
      <Container className={styles.container} style={{ paddingBottom: 218 }}>
        <Link to="/faq" className={styles.backlink}>
          « Помощь пользователю
        </Link>
        <h1 className={styles.h}>Регистрация пользователя</h1>
        <Accordion alwaysOpen bsPrefix={styles.accordion}>
          <Accordion.Item eventKey="0">
            <Accordion.Header bsPrefix={styles.accordionheader}>
              Можно ли пользоваться услугами Сайта без регистрации?
            </Accordion.Header>
            <Accordion.Body bsPrefix={styles.accordionbody}>
              Без регистрации имеется возможность просматривать предложения
              аренды, справочную и иную информацию, размещенную на Сайте.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header bsPrefix={styles.accordionheader}>
              Я захотел зарегистрироваться на сайте www.bibika.ru. Что мне для
              этого нужно?
            </Accordion.Header>
            <Accordion.Body bsPrefix={styles.accordionbody}>
              Для этого нужно пройти процедуру подтверждения персональных и иных
              данных, начинающуюся нажатием кнопки «Зарегистрироваться» в правом
              верхнем углу сайта. Для окончания процедуры регистрации,
              необходимо направить (загрузить) в личном кабинете сканкопии
              (фотокопии) паспорта (страницы I, II, включая страницу с
              актуальным местом постоянной регистрации) и водительского
              удостоверения (с обеих сторон).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header bsPrefix={styles.accordionheader}>
              С какой целью от меня требуется оставлять свои действительные
              персональные данные при регистрации?
            </Accordion.Header>
            <Accordion.Body bsPrefix={styles.accordionbody}>
              Оставлять свои действительные персональные данные необходимо с
              тем, чтобы мы размещали в аккаунтах клиентов только информацию,
              соответствующую действительности. Предлагаемая информация нами
              проверяется и, при подтверждении, допускается. Она необходима для
              целей идентификации Сторон, заключения и исполнения Договора
              аренды ТС, обеспечения юридической безопасности Сторон и
              юридической чистоты сделки.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
