import { useEffect, useState } from "react";
import { cars } from "./cars.data";
import CarItem from "./CarItem";
import "./Filter1.css";
import { Container, Pagination } from "react-bootstrap";

export default function Filter1() {
  /* Состояние выбранных фильтров */
  const [selectedFilters, setSelectedFilters] = useState([]);

  /* Состояние отфильтрованных элементов */
  const [filteredItems, setFilteredItems] = useState(cars);

  /* Категории */
  let filters = [
    "Premium",
    "Exclusive",
    "Business",
    "Tuning",
    "Minivan",
    "Retro",
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

  /* Обновление отображаемых автомобилей */
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
        let temp = cars.filter((cars) => cars.class === selectedCategory);
        return temp;
      });
      /* Массив областей сводится в один массив */
      setFilteredItems(tempItems.flat());
    } else {
      /* Иначе обновится массивы отфильтрованных элементов с помощью массива элементов */
      setFilteredItems([...cars]);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredItems.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredItems.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  return (
    <div>
      {/* Отображение категорий */}
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button-filter ${
              selectedFilters?.includes(category) ? "active-filter" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>
      <Container className="text-bb">
        <n style={{ marginLeft: 80 }}>От 9.000 ₽</n>
        <n>От 50.000 ₽</n>
        <n>От 5.000 ₽</n>
        <n>От 12.000 ₽</n>
        <n>От 10.000 ₽</n>
        <n>От 4.000 ₽</n>
      </Container>

      {/* Отображение найденых автомобилей */}
      <p style={{ fontSize: 12, color: "#6c757d", marginTop: 20 }}>
        Найдено: {filteredItems.length}
      </p>

      {/* Отображение автомобилей */}
      {records.length
        ? records.map((car, idx) => <CarItem car={car} key={`cars-${idx}`} />)
        : // eslint-disable-next-line no-restricted-globals
          location.reload()}
      {/* Пагинация */}
      <Container className="pag-cont">
        <Pagination>
          <Pagination.Prev linkClassName="page-item-prev" onClick={prevPage} />
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
          <Pagination.Next linkClassName="page-item-next" onClick={nextPage} />
        </Pagination>
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
