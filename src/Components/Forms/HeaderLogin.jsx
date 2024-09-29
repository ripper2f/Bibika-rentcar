import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "../../App.module.scss";
import { AuthContext } from "../Layout/AuthContext";

/* Очистка полей */
const clearData = {
  text: "",
  password: "",
};

export default function HeaderLogin() {
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
    const { text, password } = form;
    const newErrors = {};

    if (!text || text === "") newErrors.text = "Введите nickname.";
    else if (text.length < 4)
      newErrors.text = "Nickname должен составлять минимум 4 символа.";
    if (!password || password === "") newErrors.password = "Введите пароль.";
    else if (password.length < 4)
      newErrors.password = "Пароль должен составлять минимум 4 символов.";

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

      /* Вход в аккаунт */
      setUser([]);
    }
  };

  /* setUser для входа юзера */
  const { setUser } = useContext(AuthContext);
  return (
    <>
      {/* onClick переводит состояние окна в 'открыто' */}
      <Button onClick={handleShow} className="me-4" bsPrefix={styles.button}>
        Вход
      </Button>

      {/* onHide переводит состояние окна в 'закрыто' */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="sm"
        className={styles.modal}
      >
        <Modal.Header className={styles.modalheader}>
          <Modal.Title>Вход</Modal.Title>
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
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                className={styles.formcontrol}
                type="password"
                placeholder="Введите пароль"
                /* Захват данных при изменении */
                value={form.password}
                onChange={(e) => setField("password", e.target.value)}
                /* В случае ошибки, появится красная рамка */
                isInvalid={!!erorrs.password}
              />
              {/* В случае ошибки отображает ошибку из объекта ошибок для этого поля */}
              <Form.Control.Feedback type="invalid">
                {erorrs.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={styles.modalfooter}>
          {/* onClick вызывает функцию отправки дескриптора */}
          <Button onClick={handleSubmit} bsPrefix={styles.button}>
            Войти
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
