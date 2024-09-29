import { Badge, Card, Col, Modal, Row } from "react-bootstrap";
import styles from "../../../App.module.scss";
import { useState } from "react";

export default function NewsItem({ news }) {
  /* Изначальное состояние модального окна - закрыто */
  const [show, setShow] = useState(false);

  /* handleClose переводит состояние окна в 'закрыто' */
  /* handleShow переводит состояние окна в 'открыто' */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card key={news.id} className={styles.cardnews}>
        <div className="d-flex justify-content-end">
          <Badge className={styles.badgenews}>{news.category}</Badge>
        </div>
        <Card.Img className={styles.cardnewsimg} src={news.img} />
        <Card.ImgOverlay>
          <Card.Body className="mt-3 text-start">
            <Card.Text style={{ color: "#6c757d" }}>{news.date}</Card.Text>
            <Card.Title>{news.label}</Card.Title>
            <Card.Link className={styles.cardnewslink} onClick={handleShow}>
              Подробнее
            </Card.Link>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        className={styles.modal}
      >
        <Modal.Header className={styles.modalheadernews}>
          <Modal.Title>{news.label}</Modal.Title>
          <div className={styles.newsdate}>Опубликовано: {news.date}</div>
        </Modal.Header>
        <Modal.Body className={styles.modalbodynews}>
          <Row>
            <Col sm={4}>
              <Card.Img className={styles.cardnewsimg2} src={news.img} />
            </Col>
            <Col sm={8}>{news.text}</Col>
          </Row>
          <Modal.Title className="mt-4 mb-4">{news.label2}</Modal.Title>
          {news.text2}
        </Modal.Body>
      </Modal>
    </>
  );
}
