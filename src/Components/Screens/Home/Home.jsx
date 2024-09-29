import CarouselBox from "./CarouselBox";
import { Container } from "react-bootstrap";
import { useMemo } from "react";
import { cars } from "../Rent/cars.data";
import CarItemHome from "./CarItemHome";
import NotFounded from "../Rent/NotFounded";
import styles from "../../../App.module.scss";
import HomeAdvantages from "./HomeAdvantages";
import { news } from "../News/news.data";
import NewsItemHome from "./NewsItemHome";
import { Link } from "react-router-dom";

export default function Home() {
  const filter1 = useMemo(
    () => cars.filter((carHome) => carHome.otziv === "Новинка"),
    []
  );
  const filter2 = useMemo(
    () => cars.filter((carHome2) => carHome2.star === 5),
    []
  );
  const filter3 = useMemo(
    () => news.filter((news1) => news1.id > news.length - 4),
    []
  );
  return (
    <div className={styles.div}>
      {/* Импортирован блок 'карусель' */}

      <CarouselBox />

      {/* Блок новости */}

      <Container className={styles.container} style={{ maxWidth: 1300 }}>
        <h2 className={styles.h}>
          <Link className={styles.linkhome} to="/news">
            Новости →
          </Link>
        </h2>
        {filter3.length ? (
          filter3.map((news) => <NewsItemHome key={news.id} news={news} />)
        ) : (
          <NotFounded />
        )}
      </Container>

      {/* Блок новые автомобили, filter1 фильтрует 4 новых автомобиля */}

      <Container className={styles.container} style={{ maxWidth: 1300 }}>
        <h2 className={styles.h}>Новые автомобили</h2>
        {filter1.length ? (
          filter1.map((carHome) => (
            <CarItemHome key={carHome.id} carHome={carHome} />
          ))
        ) : (
          <NotFounded />
        )}
      </Container>

      {/* Импортирован блок 'наши приемущества' */}

      <HomeAdvantages />

      {/* Блок популярные автомобили, filter2 фильтрует 4 самых популярных автомобиля */}

      <Container className={styles.container} style={{ maxWidth: 1300 }}>
        <h2 className={styles.h}>Популярные автомобили</h2>
        {filter2.length ? (
          filter2.map((carHome) => (
            <CarItemHome key={carHome.id} carHome={carHome} />
          ))
        ) : (
          <NotFounded />
        )}
      </Container>
    </div>
  );
}
