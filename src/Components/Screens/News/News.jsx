import { Col, Container, Pagination, Row } from "react-bootstrap";
import styles from "../../../App.module.scss";
import { useEffect, useState } from "react";
import { news } from "./news.data";
import NewsItem from "./NewsItem";
import "./News.css";

export default function News() {
  /* Состояние выбранных фильтров */
  const [selectedFilters, setSelectedFilters] = useState([]);

  /* Состояние отфильтрованных элементов */
  const [filteredItems, setFilteredItems] = useState(news);

  /* Категории */
  let filters = [
    "Мнение автоэкспертов",
    "ПДД",
    "Рекомендации автолюбителя",
    "Российский автопром",
    "Зарубежный автопром",
  ];

  /* Если категория присутствует в массиве, фильтруется и обновляется массив, чтобы он не содержал эту категорию
  Иначе просто добавляет в массив */
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([selectedCategory]);
    }
  };

  /* Обновление отображаемых новостей */
  useEffect(() => {
    filterItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters]);

  /* Фильтрация
    Если массив фильтров имеет какие-либо категории, то сопоставляется выбранный массив фильтров,
    а также .map фильтрует имеющую категорию с выбранной категорией
    в которой будут храниться элементы фильтра, temp хранит и возвращает массив */
  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = news.filter((news) => news.category === selectedCategory);
        return temp;
      });
      /* Массив областей сводится в один массив */
      setFilteredItems(tempItems.flat());
    } else {
      /* Иначе обновится массивы отфильтрованных элементов с помощью массива элементов */
      setFilteredItems([...news]);
    }
  };
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredItems.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredItems.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  return (
    <div className={styles.div}>
      <Container className={styles.container}>
        <h2 className={styles.h}>Новости</h2>
        <Row>
          <Col sm={1}>
            {/* Отображение категорий */}
            <div className="buttons-container-news">
              {filters.map((category, idx) => (
                <button
                  onClick={() => handleFilterButtonClick(category)}
                  className={`button-filter-news ${
                    selectedFilters?.includes(category)
                      ? "active-filter-news"
                      : ""
                  }`}
                  key={`filters-${idx}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Col>

          <Col sm={11}>
            {/* Отображение новостей */}
            <div className="text-center">
              {records.length
                ? records.map((news, idx) => (
                    <NewsItem news={news} key={`news-${idx}`} />
                  ))
                : // eslint-disable-next-line no-restricted-globals
                  location.reload()}
              <Container className="d-flex justify-content-center mt-5">
                <Pagination>
                  <Pagination.Prev
                    linkClassName="page-item-prev"
                    onClick={prevPage}
                  />
                  {numbers.map((n, i) => (
                    <Pagination.Item
                      linkClassName={`page-item ${
                        currentPage === n ? "active-page" : ""
                      }`}
                      key={i}
                      onClick={() => changeCPage(n)}
                    >
                      {n}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    linkClassName="page-item-next"
                    onClick={nextPage}
                  />
                </Pagination>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
}
