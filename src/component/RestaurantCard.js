import { Link } from "react-router-dom";
import { IMG_URL } from "../config";

import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRating,
  cuisines,
  id,
}) => {
  const { user } = useContext(UserContext);
  // const RestaurantCard = (props) => {
  // if (!restaurants) return null;

  // console.log(restaurants[0]?.info);
  return (
    <div className="border-2 shadow-xl m-6 p-3 h-96 w-72 hover:shadow-pink-500">
      {/* <p>User: {user.fname}</p> */}
      <img
        className="w-64 h-64"
        src={`${IMG_URL}/${cloudinaryImageId}`}
        alt=""
      />
      <h2 className="mt-2">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
