import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../../App.module.scss";
import { useState } from "react";

/* Очистка полей */
const clearData = {
  text: "",
  number: "",
  textarea: "",
};

export default function ContactsForm() {
  /* Состояния для хранения данных формы и ошибок */
  const [form, setForm] = useState({});
  const [erorrs, setErorrs] = useState({});
  /* Сохраняет все в форме, не изменяя его. Добавит поле и значение, если нет поля с таким же именем, если уже есть поле с таким же именем, оно просто заменит значение */
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    /* Если есть ошибки в поле, устанавливает ошибки и не меняет его. Удаляет ошибку если она уже есть */
    if (!!erorrs[field])
      setErorrs({
        ...erorrs,
        [field]: null,
      });
  };

  /* Валидация */
  const validateForm = () => {
    const { number, text } = form;
    const newErrors = {};

    if (!number || number === "") newErrors.number = "Введите номер телефона.";
    else if (number.length !== 11)
      newErrors.number = "Телефон должен содержать 11 цифр.";
    if (!text || text === "") newErrors.text = "Введите nickname.";
    else if (text.length < 4)
      newErrors.text = "Nickname должен содержать минимум 4 символа.";

    return newErrors;
  };

  /* Предотвращение значения по умолчанию, не отправляет пустую форму и не считывает каждое изменение в полях */
  const handleSubmit = (e) => {
    e.preventDefault();

    /* Очистка полей */
    setForm(clearData);

    /* Отправка дескриптора */
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErorrs(formErrors);
    } else {
      console.log(form);
      alert("Заявка отправлена, скоро мы с Вами свяжемся, спасибо!");
    }
  };

  return (
    <Form className="p-5">
      <Row>
        <Col sm={6}>
          <Form.Group className="mb-3" controlId="text">
            <Form.Control
              className={styles.formcontrol}
              type="text"
              placeholder="Введите nickname"
              /* Захват данных при изменении */
              value={form.text}
              onChange={(e) => setField("text", e.target.value)}
              /* В случае ошибки, появится красная рамка */
              isInvalid={!!erorrs.text}
            />
            {/* В случае ошибки отображает ошибку из объекта ошибок для этого поля */}
            <Form.Control.Feedback type="invalid">
              {erorrs.text}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group className="mb-3" controlId="number">
            <Form.Control
              className={styles.formcontrol}
              type="number"
              placeholder="Введите номер телефона"
              value={form.number}
              onChange={(e) => setField("number", e.target.value)}
              isInvalid={!!erorrs.number}
            />
            <Form.Control.Feedback type="invalid">
              {erorrs.number}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="textarea">
        <Form.Control
          className={styles.formcontrol}
          as="textarea"
          placeholder="Коментарий по желанию"
          value={form.textarea}
          onChange={(e) => setField("textarea", e.target.value)}
          isInvalid={!!erorrs.textarea}
        />
        <Form.Control.Feedback type="invalid">
          {erorrs.text}
        </Form.Control.Feedback>
        <p className={styles.formtext}>
          Нажимая на кнопку, я соглашаюсь на обработку персональных данных
        </p>
      </Form.Group>
      {/* onClick вызывает функцию отправки дескриптора */}
      <Container className="d-flex justify-content-center">
        <Button bsPrefix={styles.button} onClick={handleSubmit}>
          Перезвоните мне
        </Button>
      </Container>
    </Form>
  );
}
