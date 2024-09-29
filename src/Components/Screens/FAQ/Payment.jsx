import { Accordion, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../../App.module.scss";

export default function Payment() {
  return (
    <div className={styles.div}>
      <Container className={styles.container} style={{ paddingBottom: 105 }}>
        <Link to="/faq" className={styles.backlink}>
          « Помощь пользователю
        </Link>
        <h1 className={styles.h}>Платежи</h1>
        <Accordion alwaysOpen bsPrefix={styles.accordion}>
          <Accordion.Item eventKey="0">
            <Accordion.Header bsPrefix={styles.accordionheader}>
              Почему я не могу заплатить напрямую владельцу автомобиля?
            </Accordion.Header>
            <Accordion.Body bsPrefix={styles.accordionbody}>
              Вы, естественно, всегда можете напрямую договориться с владельцем
              автомобиля, и, при его согласии, расплатиться с ним напрямую любым
              устраивающим обе стороны способом.
              <br />
              Однако, в этом случае, если потребуется возврат платежа, и, при
              наличии, гарантийного депозита, его получением будете заниматься
              вы самостоятельно.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header bsPrefix={styles.accordionheader}>
              Договор аренды не был заключен (одна из сторон отменила сделку
              либо меня не устроил заказанный автомобиль при личном осмотре) –
              как мне вернуть заблокированные средства?
            </Accordion.Header>
            <Accordion.Body bsPrefix={styles.accordionbody}>
              Вам необходимо отменить сделку. В течение суток блокировка с сумм
              аренды и гарантийного депозита будет снята и вы сможете
              распоряжаться заблокированной суммой без каких-либо ограничений.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header bsPrefix={styles.accordionheader}>
              Сразу после начала эксплуатации я понял, что арендованный
              автомобиль меня не устраивает по качеству. Как мне прекратить
              аренду и вернуть средства?
            </Accordion.Header>
            <Accordion.Body bsPrefix={styles.accordionbody}>
              Вам необходимо в максимально короткий срок связаться с
              арендодателем и договориться о возврате автомобиля, а также
              оформить претензию по сделке на сайте rentride.ru (если у вас в
              этот момент нет доступа к интернету – претензию также возможно
              оформить, позвонив по телефону горячей линии ООО «Бибика» (495)
              120-80-70). Арендная плата переводится владельцу через несколько
              часов после начала эксплуатации но, в случае подтверждения ваших
              претензий, будет вам возвращена по вашему заявлению в полном
              размере. Гарантийный депозит будет разблокирован по возврату
              автомобиля владельцу. Обращаем Ваше внимание, что если оплата
              производилась посредством банковской карты, возврат средств
              возможен только на счет данной банковской карты.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header bsPrefix={styles.accordionheader}>
              Почему блокировка суммы гарантийного депозита будет снята только
              через неделю после завершения аренды?
            </Accordion.Header>
            <Accordion.Body bsPrefix={styles.accordionbody}>
              Информация о штрафах ГИБДД может поступить владельцу с некоторым
              опозданием. Пожалуйста, отнеситесь с пониманием к тому, что
              автовладелец хочет минимизировать риск оплаты не своего штрафа.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header bsPrefix={styles.accordionheader}>
              При осуществлении платежа произошел сбой.
            </Accordion.Header>
            <Accordion.Body bsPrefix={styles.accordionbody}>
              При получении отрицательного результата авторизации банк, отправит
              уведомление об отказе в операции и передаст данную информацию ООО
              «Бибика» и держателю карты, с указанием причин отказа.
              <br />
              Если произошел сбой при осуществлении операции оплаты, попробуйте
              выяснить причину у консультантов Вашего банка. Также вы можете
              обратиться с данным вопросом в клиентскую службу ООО «Бибика» по
              электронной почте info@bibika.ru или телефону горячей линии (495)
              120-80-70.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
