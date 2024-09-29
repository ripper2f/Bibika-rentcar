import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import styles from "../../App.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

/* Очистка полей */
const clearData = {
  name: "",
  model: "",
  year: "",
  body: "",
  drive: "",
  probeg1: "",
  insurance: "",
  engine: "",
  mest: "",
  transmission: "",
  wheel: "",
  price: "",
  probeg2: "",
  deposit: "",
  minyear: "",
  minst: "",
  doplata: "",
  opisanie: "",
  img: "",
  gos: "",
};

export default function CreateCar() {
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
    const {
      name,
      model,
      year,
      body,
      drive,
      probeg1,
      insurance,
      engine,
      mest,
      transmission,
      wheel,
      price,
      probeg2,
      deposit,
      minyear,
      minst,
      doplata,
      img,
      gos,
    } = form;
    const newErrors = {};

    if (!name || name === "") newErrors.name = "Введите марку автомобиля.";
    if (!model || model === "") newErrors.model = "Введите модель автомобиля.";
    if (!year || year === "") newErrors.year = "Введите год сборки автомобиля.";
    if (!body || body === "") newErrors.body = "Введите кузов автомобиля.";
    if (!drive || drive === "") newErrors.drive = "Введите привод автомобиля.";
    if (!probeg1 || probeg1 === "")
      newErrors.probeg1 = "Введите общий пробег автомобиля(км).";
    if (!insurance || insurance === "")
      newErrors.insurance = "Введите страховку автомобиля.";
    if (!engine || engine === "")
      newErrors.engine = "Введите тип двигателя и его объём.";
    if (!mest || mest === "")
      newErrors.mest = "Введите количество посадочных мест в автомобиле.";
    if (!transmission || transmission === "")
      newErrors.transmission = "Введите вид коробки передач автомобиля.";
    if (!wheel || wheel === "")
      newErrors.wheel = "Введите с какой стороны руль автомобиля.";
    if (!price || price === "")
      newErrors.price = "Введите цену за сутки, без учёта скидок.";
    if (!probeg2 || probeg2 === "")
      newErrors.probeg2 = "Введите ограниченный пробег за сутки(км).";
    if (!deposit || deposit === "")
      newErrors.deposit = "Введите депозит за автомобиль.";
    if (!minyear || minyear === "")
      newErrors.minyear = "Введите минимальный возраст для аренды.";
    if (!minst || minst === "")
      newErrors.minst = "Введите минимальный стаж вождения для аренды.";
    if (!doplata || doplata === "")
      newErrors.doplata =
        "Введите доплату за превышение пробега в сутки, за 1 км.";
    if (!img || img === "")
      newErrors.img = "Прикрепите минимум одну фотографию автомобиля.";
    if (!gos || gos === "")
      newErrors.gos = "Введите государственный номер автомобиля(A 000 AA 000).";

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
      <Link to="/profile" className={styles.backlink}>
        « Профиль
      </Link>
      <Container className={styles.container}>
        <Row>
          <Col sm={5} className={styles.profilecard2}>
            <h2>Характеристики автомобиля</h2>
            <Form.Control
              type="text"
              placeholder="Марка"
              className={styles.formcontrol}
              style={{ marginTop: 20 }}
              /* Захват данных при изменении */
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              /* В случае ошибки, появится красная рамка */
              isInvalid={!!erorrs.name}
            />
            {/* В случае ошибки отображает ошибку из объекта ошибок для этого поля */}
            <Form.Control.Feedback type="invalid">
              {erorrs.name}
            </Form.Control.Feedback>
            <Form.Control
              type="text"
              placeholder="Модель"
              className={styles.formcontrol}
              style={{ marginTop: 20 }}
              value={form.model}
              onChange={(e) => setField("model", e.target.value)}
              isInvalid={!!erorrs.model}
            />
            <Form.Control.Feedback type="invalid">
              {erorrs.model}
            </Form.Control.Feedback>
            <Form.Control
              type="number"
              placeholder="Год"
              className={styles.formcontrol}
              style={{ marginTop: 20 }}
              value={form.year}
              onChange={(e) => setField("year", e.target.value)}
              isInvalid={!!erorrs.year}
            />
            <Form.Control.Feedback type="invalid">
              {erorrs.year}
            </Form.Control.Feedback>
            <Form.Control
              type="text"
              placeholder="Кузов"
              className={styles.formcontrol}
              style={{ marginTop: 20 }}
              value={form.body}
              onChange={(e) => setField("body", e.target.value)}
              isInvalid={!!erorrs.body}
            />
            <Form.Control.Feedback type="invalid">
              {erorrs.body}
            </Form.Control.Feedback>
            <Form.Control
              type="text"
              placeholder="Привод"
              className={styles.formcontrol}
              style={{ marginTop: 20 }}
              value={form.drive}
              onChange={(e) => setField("drive", e.target.value)}
              isInvalid={!!erorrs.drive}
            />
            <Form.Control.Feedback type="invalid">
              {erorrs.drive}
            </Form.Control.Feedback>
            <Form.Control
              type="number"
              placeholder="Пробег автомобиля(км)"
              className={styles.formcontrol}
              style={{ marginTop: 20 }}
              value={form.probeg1}
              onChange={(e) => setField("probeg1", e.target.value)}
              isInvalid={!!erorrs.probeg1}
            />
            <Form.Control.Feedback type="invalid">
              {erorrs.probeg1}
            </Form.Control.Feedback>
            <Form.Control
              type="text"
              placeholder="Страховка"
              className={styles.formcontrol}
              style={{ marginTop: 20 }}
              value={form.insurance}
              onChange={(e) => setField("insurance", e.target.value)}
              isInvalid={!!erorrs.insurance}
            />
            <Form.Control.Feedback type="invalid">
              {erorrs.insurance}
            </Form.Control.Feedback>
            <Form.Control
              type="text"
              placeholder="Двигатель и объём"
              className={styles.formcontrol}
              style={{ marginTop: 20 }}
              value={form.engine}
              onChange={(e) => setField("engine", e.target.value)}
              isInvalid={!!erorrs.engine}
            />
            <Form.Control.Feedback type="invalid">
              {erorrs.engine}
            </Form.Control.Feedback>
            <Form.Control
              type="number"
              placeholder="Мест в автомобиле"
              className={styles.formcontrol}
              style={{ marginTop: 20 }}
              value={form.mest}
              onChange={(e) => setField("mest", e.target.value)}
              isInvalid={!!erorrs.mest}
            />
            <Form.Control.Feedback type="invalid">
              {erorrs.mest}
            </Form.Control.Feedback>
            <Form.Control
              type="text"
              placeholder="Коробка передач"
              className={styles.formcontrol}
              style={{ marginTop: 20 }}
              value={form.transmission}
              onChange={(e) => setField("transmission", e.target.value)}
              isInvalid={!!erorrs.transmission}
            />
            <Form.Control.Feedback type="invalid">
              {erorrs.transmission}
            </Form.Control.Feedback>
            <Form.Control
              type="text"
              placeholder="Расположение руля"
              className={styles.formcontrol}
              style={{ marginTop: 20 }}
              value={form.wheel}
              onChange={(e) => setField("wheel", e.target.value)}
              isInvalid={!!erorrs.wheel}
            />
            <Form.Control.Feedback type="invalid">
              {erorrs.wheel}
            </Form.Control.Feedback>
          </Col>
          <Col sm={1}></Col>
          <Col sm={6}>
            <Col className={styles.profilecard2}>
              <h2>Правила аренда</h2>
              <Form.Control
                type="number"
                placeholder="Цена за сутки(без скидок)"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                value={form.price}
                onChange={(e) => setField("price", e.target.value)}
                isInvalid={!!erorrs.price}
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.price}
              </Form.Control.Feedback>
              <Form.Control
                type="number"
                placeholder="Максимальный пробег за сутки(км)"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                value={form.probeg2}
                onChange={(e) => setField("probeg2", e.target.value)}
                isInvalid={!!erorrs.probeg2}
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.probeg2}
              </Form.Control.Feedback>
              <Form.Control
                type="number"
                placeholder="Депозит"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                value={form.deposit}
                onChange={(e) => setField("deposit", e.target.value)}
                isInvalid={!!erorrs.deposit}
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.deposit}
              </Form.Control.Feedback>
              <Form.Control
                type="number"
                placeholder="Минимальный возраст"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                value={form.minyear}
                onChange={(e) => setField("minyear", e.target.value)}
                isInvalid={!!erorrs.minyear}
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.minyear}
              </Form.Control.Feedback>
              <Form.Control
                type="number"
                placeholder="Минимальный стаж"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                value={form.minst}
                onChange={(e) => setField("minst", e.target.value)}
                isInvalid={!!erorrs.minst}
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.minst}
              </Form.Control.Feedback>
              <Form.Control
                type="number"
                placeholder="Доплата за превышение пробега за сутки"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                value={form.doplata}
                onChange={(e) => setField("doplata", e.target.value)}
                isInvalid={!!erorrs.doplata}
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.doplata}
              </Form.Control.Feedback>
            </Col>
            <Col className={styles.profilecard2} style={{ marginTop: 10 }}>
              <h2>Дополнительно</h2>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Описание автомобиля по желанию"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                value={form.opisanie}
                onChange={(e) => setField("opisanie", e.target.value)}
                isInvalid={!!erorrs.opisanie}
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.opisanie}
              </Form.Control.Feedback>
              <Form.Label style={{ marginTop: 30, color: "#6c757d" }}>
                Фотографии
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="Фотографии(url)"
                className={styles.formcontrol}
                value={form.img}
                onChange={(e) => setField("img", e.target.value)}
                isInvalid={!!erorrs.img}
                multiple
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.img}
              </Form.Control.Feedback>
              <Form.Control
                type="text"
                placeholder="Гос. номер"
                className={styles.formcontrol}
                style={{ marginTop: 20 }}
                value={form.gos}
                onChange={(e) => setField("gos", e.target.value)}
                isInvalid={!!erorrs.gos}
              />
              <Form.Control.Feedback type="invalid">
                {erorrs.gos}
              </Form.Control.Feedback>
            </Col>
            <Row>
              <Col sm={2}>
                <Button
                  bsPrefix={styles.button}
                  onClick={handleSubmit}
                  className="mt-4"
                >
                  Отправить
                </Button>
              </Col>
              <Col sm={10}>
                <p className={styles.formtext} style={{ marginTop: 20 }}>
                  После отправления заявки мы с вами свяжемся и <br /> расскажем
                  про дальнейшие шаги.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Container className={styles.container}> </Container>
      </Container>
      <Modal show={show} onHide={handleClose} centered className={styles.modal}>
        <Modal.Header className={styles.modalheader}>
          <Modal.Title>
            <img
              className={styles.iconrent2}
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
