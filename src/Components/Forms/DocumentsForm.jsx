import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../../App.module.scss";
import { useState } from "react";

/* Очистка полей */
const clearData = {
  file1: "",
  file2: "",
  file3: "",
  file4: "",
};

export default function DocumentsForm() {
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
    const { file1, file2, file3, file4 } = form;
    const newErrors = {};

    if (!file1 || file1 === "")
      newErrors.file1 = "Прикрепите фотографию первого разворота паспорта.";
    if (!file2 || file2 === "")
      newErrors.file2 = "Прикрепите фотографию второго разворота паспорта.";
    if (!file3 || file3 === "")
      newErrors.file3 =
        "Прикрепите фотографию первой стороны водительского удостоверения.";
    if (!file4 || file4 === "")
      newErrors.file4 =
        "Прикрепите фотографию второй стороны водительского удостоверения.";

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
    }
  };

  return (
    <Container className={styles.container}>
      <Form>
        <h4>Личные документы</h4>
        <p style={{ color: "#6c757d" }}>
          Сервис гарантирует конфиденциальность данных. Ваши документы не будут
          отображаться в публичном профиле.
        </p>
        <p className={styles.profiletext}>
          Отправте все документы. После проверки Вы сможете арендовать
          автомобиль.
        </p>
        <Form.Group>
          <h5>Паспорт</h5>
          <Row>
            <Col sm={6}>
              <Form.Label style={{ color: "#6c757d" }}>
                Первый разворот
              </Form.Label>
              <Form.Control
                type="file"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                /* Захват данных при изменении */
                value={form.file1}
                onChange={(e) => setField("file1", e.target.value)}
                /* В случае ошибки, появится красная рамка */
                isInvalid={!!erorrs.file1}
              />
              {/* В случае ошибки отображает ошибку из объекта ошибок для этого поля */}
              <Form.Control.Feedback type="invalid">
                {erorrs.file1}
              </Form.Control.Feedback>
              <Form.Label style={{ color: "#6c757d" }}>
                ФИО и место выдачи
              </Form.Label>
            </Col>
            <Col sm={6}>
              <Form.Label style={{ color: "#6c757d" }}>
                Второй разворот
              </Form.Label>
              <Form.Control
                type="file"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                value={form.file2}
                onChange={(e) => setField("file2", e.target.value)}
                isInvalid={!!erorrs.file2}
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.file2}
              </Form.Control.Feedback>
              <Form.Label style={{ color: "#6c757d" }}>Прописка</Form.Label>
            </Col>
          </Row>

          <h5 className="pt-5">Водительское удостоверение</h5>
          <Row>
            <Col sm={6}>
              <Form.Label style={{ color: "#6c757d" }}>
                Первая сторона
              </Form.Label>
              <Form.Control
                type="file"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                value={form.file3}
                onChange={(e) => setField("file3", e.target.value)}
                isInvalid={!!erorrs.file3}
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.file3}
              </Form.Control.Feedback>
              <Form.Label style={{ color: "#6c757d" }}>
                Личные данные
              </Form.Label>
            </Col>
            <Col sm={6}>
              <Form.Label style={{ color: "#6c757d" }}>
                Вторая сторона
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="Категории ТС"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                value={form.file4}
                onChange={(e) => setField("file4", e.target.value)}
                isInvalid={!!erorrs.file4}
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.file4}
              </Form.Control.Feedback>
              <Form.Label style={{ color: "#6c757d" }}>Категории ТС</Form.Label>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <Button bsPrefix={styles.button} onClick={handleSubmit} className="mt-4">
        Отправить
      </Button>
      <p className={styles.formtext}>
        Мы начинаем проверку Ваших документов автоматически сразу после
        отправки.
      </p>
    </Container>
  );
}
