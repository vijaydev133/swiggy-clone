import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { MAIN_API } from "../config";
import { Link } from "react-router-dom";
// impo;/
import { filteredData } from "../utils/helper";
import useOffline from "../utils/useOffline";

// getData();

// const filteredData = (src, res) => {
//   return res.filter((d) =>
//     d?.info?.name?.toLowerCase()?.includes(src?.toLowerCase())
//   );

// };

// const tii = () => {
//   const [we, setWe] = useState();
//   return <h1>hello world</h1>;
// };

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [allrestaurants, allsetRestaurants] = useState([]);
  const [srchText, setSrchText] = useState();

  useEffect(() => {
    getData();
    console.log("useEffect");
  }, []);
  async function getData() {
    const data = await fetch(MAIN_API);

    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    allsetRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  let isOffline = useOffline();
  if (isOffline) {
    console.log("offline");
    return <h1>You are Offlijne</h1>;
  }
  // console.log("render");
  return (
    <div className="body">
      {/* <tii /> */}
      <input
        type="text"
        className="m-1 ml-32 hover:bg-slate-100  px-3 py-2 bg-white border border-slate-500 rounded-md focus:outline-none focus:border-sky-500"
        value={srchText}
        onChange={(e) => {
          setSrchText(e.target.value);
          // console.log(e.target.value);
        }}
      />
      <button
        className="hover:bg-slate-100 px-6 py-2 border-2 border-slate-500 rounded-md"
        onClick={() => {
          const data = filteredData(srchText, allrestaurants);
          // console.log(allrestaurants);
          setRestaurants(data);
        }}
      >
        search
      </button>
      <div className="flex flex-wrap text-center justify-center">
        {allrestaurants?.length == 0 ? (
          // Array(20)?.fill(
          <Shimmer />
        ) : // )
        restaurants?.length == 0 ? (
          <h1>No data Found</h1>
        ) : (
          restaurants?.map((res, ind) => {
            // console.log(res?.info);
            return (
              <Link key={ind} to={"restaurant/" + res?.info?.id}>
                {" "}
                <RestaurantCard key={ind} {...res?.info} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
