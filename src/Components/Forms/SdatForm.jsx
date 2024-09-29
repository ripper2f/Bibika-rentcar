import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "../../App.module.scss";

/* Очистка полей */
const clearData = {
  text: "",
  number: "",
  textarea: "",
};

export default function SdatForm() {
  /* Изначальное состояние модального окна - закрыто */
  const [show, setShow] = useState(false);

  /* handleClose переводит состояние окна в 'закрыто' */
  /* handleShow переводит состояние окна в 'открыто' */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      handleClose();
    }
  };
  return (
    <>
      {/* onClick переводит состояние окна в 'открыто' */}
      <Button bsPrefix={styles.button} className="mt-5" onClick={handleShow}>
        Перезвоните мне
      </Button>

      {/* onHide переводит состояние окна в 'закрыто' */}
      <Modal show={show} onHide={handleClose} centered className={styles.modal}>
        <Modal.Header className={styles.modalheader}>
          <Modal.Title>
            Мы перезвоним и расскажем, как вы будете зарабатывать
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalbody}>
          <Form>
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
            <Form.Group className="mb-3" controlId="number">
              <Form.Control
                className={styles.formcontrol}
                type="number"
                placeholder="Введите номер телефона"
                /* Захват данных при изменении */
                value={form.number}
                onChange={(e) => setField("number", e.target.value)}
                /* В случае ошибки, появится красная рамка */
                isInvalid={!!erorrs.number}
              />

              {/* В случае ошибки отображает ошибку из объекта ошибок для этого поля */}
              <Form.Control.Feedback type="invalid">
                {erorrs.number}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="textarea">
              <Form.Control
                className={styles.formcontrol}
                as="textarea"
                placeholder="Коментарий по желанию"
                /* Захват данных при изменении */
                value={form.textarea}
                onChange={(e) => setField("textarea", e.target.value)}
                /* В случае ошибки, появится красная рамка */
                isInvalid={!!erorrs.textarea}
              />

              {/* В случае ошибки отображает ошибку из объекта ошибок для этого поля */}
              <Form.Control.Feedback type="invalid">
                {erorrs.text}
              </Form.Control.Feedback>
              <p className={styles.formtext}>
                Нажимая на кнопку, я соглашаюсь на обработку персональных данных
              </p>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={styles.modalfooter}>
          {/* onClick вызывает функцию отправки дескриптора */}
          <Button bsPrefix={styles.modalbutton} onClick={handleSubmit}>
            Перезвоните мне
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
