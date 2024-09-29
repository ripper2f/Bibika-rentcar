import { Row, Container, Col } from "react-bootstrap";
import styles from "../../App.module.scss";
import ContactsForm from "../Forms/ContactsForm";

export default function Contacts() {
  return (
    <div className={styles.div}>
      <Container className={styles.container}>
        <Row>
          <Col sm={3}>
            <h3 className="mt-4">Офис</h3>
            <p>ООО "Бибика", Нагорный проезд, д. 5, 117105, г. Москва</p>
            <p className="pt-5">Номер телефона</p>
            <h5>+7 495 120-80-70</h5>
            <p className={styles.formtext}> ежедневно с 9:00 до 21:00 </p>
            <p className="pt-5">Вопросы и предложения</p>
            <p style={{ color: "#6f42c1" }}>info@bibika.ru</p>
            <p>По вопросам сотрудничества</p>
            <p style={{ color: "#6f42c1" }}>partners@bibika.ru</p>
          </Col>
          <Col sm={6}>
            <h3 className={styles.h}>Форма обратной связи</h3>

            {/* Импортирован блок 'обратная связь' */}
            <ContactsForm />
          </Col>
          <Col sm={3} className="text-end">
            <h3 className="mt-4">Реквизиты</h3>
            <p className={styles.formtext} style={{ margin: 0 }}>
              Название компании
            </p>
            <p>ООО "Бибика"</p>
            <p className={styles.formtext} style={{ margin: 0 }}>
              ИНН
            </p>
            <p>7725322745</p>
            <p className={styles.formtext} style={{ margin: 0 }}>
              КПП
            </p>
            <p>772501001</p>
            <p className={styles.formtext} style={{ margin: 0 }}>
              ОГРН
            </p>
            <p>1167746639983</p>
            <p className={styles.formtext} style={{ margin: 0 }}>
              БИК
            </p>
            <p>044525360</p>
            <p className={styles.formtext} style={{ margin: 0 }}>
              Корреспондентский счёт
            </p>
            <p>30101810445250000360</p>
            <p className={styles.formtext} style={{ margin: 0 }}>
              Расчетный счет
            </p>
            <p>
              40702810200080540763 в филиал «Корпоративный» ПАО «Совкомбанк» г.
              Москва
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
