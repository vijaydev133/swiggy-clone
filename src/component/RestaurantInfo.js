import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_URL, RESTA_INFO_API } from "../config";
import RestaurantCard from "./RestaurantCard";
import useRestaInfo from "../utils/useRestaInfo";

const RestaurantInfo = () => {
  const { id } = useParams();

  const restaurant = useRestaInfo(id);

  return (
    <div className="resta-detail">
      <h1>Restaurant Info</h1>
      <h2>Restaurant id : {id}</h2>
      <div className="resta-info">
        <h2>{restaurant?.name}</h2>
        <img src={IMG_URL + restaurant?.cloudinaryImageId} alt="" />
        <h4>{restaurant?.cuisines?.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestaurantInfo;
