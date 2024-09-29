import { Button, Container, Form } from "react-bootstrap";
import styles from "../../App.module.scss";
import { useState } from "react";

/* Очистка полей */
const clearData = {
  nick: "",
  name: "",
  sname: "",
  number: "",
  email: "",
  stazh: "",
  grazh: "",
  inn: "",
  newpass: "",
  newpass2: "",
};

export default function ProfileForm() {
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
    const { nick, number, email, stazh, grazh, inn, newpass, newpass2 } = form;
    const newErrors = {};

    if (!nick || nick === "") newErrors.nick = "Введите nickname.";
    else if (nick.length < 4)
      newErrors.nick = "Nickname должен составлять минимум 4 символа.";
    if (!number || number === "") newErrors.number = "Введите номер телефона.";
    else if (number.length !== 11)
      newErrors.number = "Телефон должен содержать 11 цифр.";
    if (!email || email === "") newErrors.email = "Введите почту.";
    if (!stazh || stazh === "") newErrors.stazh = "Введите cтаж вождения.";
    if (!grazh || grazh === "") newErrors.grazh = "Введите гражданство.";
    if (!inn || inn === "") newErrors.inn = "Введите ИНН.";
    else if (inn.length !== 12)
      newErrors.inn = "ИНН должен содержать минимум 12 цифр.";
    if (!newpass || newpass === "") newErrors.newpass = "Введите новый пароль.";
    else if (newpass.length < 4)
      newErrors.newpass = "Новый пароль должен составлять минимум 4 символа.";
    if (!newpass2 || newpass2 === "")
      newErrors.newpass2 = "Повторите новый пароль.";
    else if (newpass2 !== newpass)
      newErrors.newpass2 = "Новый пароль не соответствует паролю выше.";

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
      <h4>Личная информация</h4>
      <img className={styles.iconrent} src="/image/renticon4.png" alt="" />{" "}
      <n className="me-5">{form.nick ? `${form.nick}` : "Nickname"}</n>
      <img className={styles.iconrent} src="/image/iconsdat6.png" alt="" />{" "}
      <n>{form.number ? `${form.number}` : "Number"}</n>
      <Form.Control
        type="text"
        placeholder="Nickname"
        className={styles.formcontrol}
        style={{ marginTop: 20 }}
        /* Захват данных при изменении */
        value={form.nick}
        onChange={(e) => setField("nick", e.target.value)}
        /* В случае ошибки, появится красная рамка */
        isInvalid={!!erorrs.nick}
      />
      {/* В случае ошибки отображает ошибку из объекта ошибок для этого поля */}
      <Form.Control.Feedback type="invalid">
        {erorrs.nick}
      </Form.Control.Feedback>
      <Form.Control
        type="text"
        placeholder="Имя"
        className={styles.formcontrol}
        style={{ marginTop: 20 }}
        value={form.name}
        onChange={(e) => setField("name", e.target.value)}
        isInvalid={!!erorrs.name}
      />
      <Form.Control.Feedback type="invalid">
        {erorrs.text}
      </Form.Control.Feedback>
      <Form.Control
        type="text"
        placeholder="Фамилия"
        className={styles.formcontrol}
        style={{ marginTop: 20 }}
        value={form.sname}
        onChange={(e) => setField("sname", e.target.value)}
        isInvalid={!!erorrs.sname}
      />
      <Form.Control.Feedback type="invalid">
        {erorrs.sname}
      </Form.Control.Feedback>
      <h4 className="pt-5">Дополнительная информация</h4>
      <Form.Control
        type="number"
        placeholder="Номер телефона"
        className={styles.formcontrol}
        style={{ marginTop: 20 }}
        value={form.number}
        onChange={(e) => setField("number", e.target.value)}
        isInvalid={!!erorrs.number}
      />
      <Form.Control.Feedback type="invalid">
        {erorrs.number}
      </Form.Control.Feedback>
      <Form.Control
        type="email"
        placeholder="Почта"
        className={styles.formcontrol}
        style={{ marginTop: 20 }}
        value={form.email}
        onChange={(e) => setField("email", e.target.value)}
        isInvalid={!!erorrs.email}
      />
      <Form.Control.Feedback type="invalid">
        {erorrs.email}
      </Form.Control.Feedback>
      <Form.Control
        type="text"
        placeholder="Стаж вождения"
        className={styles.formcontrol}
        style={{ marginTop: 20 }}
        value={form.stazh}
        onChange={(e) => setField("stazh", e.target.value)}
        isInvalid={!!erorrs.stazh}
      />
      <Form.Control.Feedback type="invalid">
        {erorrs.stazh}
      </Form.Control.Feedback>
      <Form.Control
        type="text"
        placeholder="Гражданство"
        className={styles.formcontrol}
        style={{ marginTop: 20 }}
        value={form.grazh}
        onChange={(e) => setField("grazh", e.target.value)}
        isInvalid={!!erorrs.grazh}
      />
      <Form.Control.Feedback type="invalid">
        {erorrs.grazh}
      </Form.Control.Feedback>
      <Form.Control
        type="number"
        placeholder="ИНН"
        className={styles.formcontrol}
        style={{ marginTop: 20 }}
        value={form.inn}
        onChange={(e) => setField("inn", e.target.value)}
        isInvalid={!!erorrs.inn}
      />
      <Form.Control.Feedback type="invalid">{erorrs.inn}</Form.Control.Feedback>
      <h4 className="pt-5">Изменение пароля</h4>
      <Form.Control
        type="password"
        placeholder="Новый пароль"
        className={styles.formcontrol}
        style={{ marginTop: 20 }}
        value={form.newpass}
        onChange={(e) => setField("newpass", e.target.value)}
        isInvalid={!!erorrs.newpass}
      />
      <Form.Control.Feedback type="invalid">
        {erorrs.newpass}
      </Form.Control.Feedback>
      <Form.Control
        type="password"
        placeholder="Повторите новый пароль"
        className={styles.formcontrol}
        style={{ marginTop: 20 }}
        value={form.newpass2}
        onChange={(e) => setField("newpass2", e.target.value)}
        isInvalid={!!erorrs.newpass2}
      />
      <Form.Control.Feedback type="invalid">
        {erorrs.newpass2}
      </Form.Control.Feedback>
      <Button bsPrefix={styles.button} onClick={handleSubmit} className="mt-4">
        Изменить
      </Button>
    </Container>
  );
}
