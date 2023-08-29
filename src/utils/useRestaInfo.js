import { useEffect, useState } from "react";
import { RESTA_INFO_API } from "../config";

const useRestaInfo = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(RESTA_INFO_API + id);
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  console.log("rendered in useresta info");
  return restaurant;
};

export default useRestaInfo;
