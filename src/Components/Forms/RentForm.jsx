import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import styles from "../../App.module.scss";

/* Очистка полей */
const clearData = {
  date1: "",
  date2: "",
  text: "",
};

export default function RentForm() {
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
    const { date1, date2, text } = form;
    const newErrors = {};

    if (!date1 || date1 === "") newErrors.number = "Выберите дату.";
    if (!date2 || date2 === "") newErrors.number = "Выберите дату.";
    if (!text || text === "") newErrors.text = "Введите место поездки.";

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
      handleShow();
    }
  };

  /* Изначальное состояние модального окна - закрыто */
  const [show, setShow] = useState(false);

  /* handleClose переводит состояние окна в 'закрыто' */
  /* handleShow переводит состояние окна в 'открыто' */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.div}>
      <h4 className={styles.h}>Период аренды</h4>
      <Container className={styles.container}>
        <Form>
          <Form.Group controlId="date1">
            <Form.Label>Начало аренды</Form.Label>
            <Form.Control
              type="date"
              className={styles.formcontrol}
              /* Захват данных при изменении */
              value={form.date1}
              onChange={(e) => setField("date1", e.target.value)}
              /* В случае ошибки, появится красная рамка */
              isInvalid={!!erorrs.date1}
            />
            {/* В случае ошибки отображает ошибку из объекта ошибок для этого поля */}
            <Form.Control.Feedback type="invalid">
              {erorrs.text}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="date2">
            <Form.Label className="pt-4">Завершение аренды</Form.Label>
            <Form.Control
              type="date"
              className={styles.formcontrol}
              /* Захват данных при изменении */
              value={form.date2}
              onChange={(e) => setField("date2", e.target.value)}
              /* В случае ошибки, появится красная рамка */
              isInvalid={!!erorrs.date2}
            />
            {/* В случае ошибки отображает ошибку из объекта ошибок для этого поля */}
            <Form.Control.Feedback type="invalid">
              {erorrs.text}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="text">
            <Form.Label className="pt-4">Куда поедете?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Город, область"
              className={styles.formcontrol}
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
        </Form>
        <Container className={styles.container} style={{ textAlign: "center" }}>
          {/* onClick вызывает функцию отправки дескриптора */}
          <Button bsPrefix={styles.button} onClick={handleSubmit}>
            Забронировать
          </Button>
        </Container>
      </Container>

      <Modal show={show} onHide={handleClose} centered className={styles.modal}>
        <Modal.Header className={styles.modalheader}>
          <Modal.Title>
            <img
              className={styles.iconrent}
              src="/image/renticon6.png"
              alt=""
            />
            Заявка отправленa
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalbody}>
          Мы перезвоним Вам в ближайшее время, для уточнения деталей.
        </Modal.Body>
      </Modal>
    </div>
  );
}
