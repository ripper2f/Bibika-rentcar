import { Container, Tab, Row, Col, Nav, Button } from "react-bootstrap";
import Documents from "../../Forms/DocumentsForm";
import ProfileHistory from "./ProfileHistory";
import ProfileActive from "./ProfileActive";
import ProfileForm from "../../Forms/ProfileForm";
import styles from "../../../App.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../Layout/AuthContext";
import { Link } from "react-router-dom";

export default function Profile() {
  const { setUser } = useContext(AuthContext);
  return (
    <div className={styles.div}>
      <Container className={styles.container}>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className={styles.tabsnav}>
                <Nav.Item>
                  <Nav.Link eventKey="first" bsPrefix={styles.tabslink}>
                    Мой профиль
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" bsPrefix={styles.tabslink}>
                    Документы
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" bsPrefix={styles.tabslink}>
                    История аренд
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" bsPrefix={styles.tabslink}>
                    Мои автомобили
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Link to="/">
                <Button
                  bsPrefix={styles.button}
                  className="mt-5"
                  onClick={() => setUser(false)}
                >
                  Выйти
                </Button>
              </Link>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <ProfileForm />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Documents />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <ProfileHistory />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <ProfileActive />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}
