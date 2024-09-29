import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../../App.module.scss";
import HeaderLogin from "../Forms/HeaderLogin";
import HeaderReg from "../Forms/HeaderReg";
import { useContext } from "react";
import { AuthContext } from "../Layout/AuthContext";

export default function Header() {
  // Получаем юзера для входа
  const { user } = useContext(AuthContext);
  return (
    <>
      {/* Основное меню */}
      <Navbar collapseOnSelect expand="sm" variant="dark" className="bg-dark">
        <Container>
          <Navbar.Brand href="/">
            <img className={styles.navbarbrand} src="/image/logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/rent"> Аренда авто </Nav.Link>
              <Nav.Link href="/sdat"> Сдать авто </Nav.Link>
              <Nav.Link href="/about"> О нас </Nav.Link>
              <Nav.Link href="/contacts"> Контакты </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Если юзер есть в бд - кнопка с профилем, иначе - кнопки входа/регистрации */}
          {user ? (
            <Nav.Link className={styles.icon} href="/profile" />
          ) : (
            <>
              <HeaderLogin />
              <HeaderReg />
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
}
