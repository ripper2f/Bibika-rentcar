import { useParams } from "react-router";
import CarItem2 from "../Rent/CarItem2";
import NotFounded from "./NotFounded";
import { cars } from "./cars.data";
import { useMemo } from "react";

export default function CarsInfo() {
  const { id } = useParams();

  const filter = useMemo(
    // eslint-disable-next-line eqeqeq
    () => cars.filter((carInfo) => carInfo.id == id),
    [id]
  );
  console.log(filter);
  return (
    <div style={{ background: "#212529" }}>
      {filter.length ? (
        filter.map((carInfo) => <CarItem2 key={carInfo.id} carInfo={carInfo} />)
      ) : (
        <NotFounded />
      )}
    </div>
  );
}
