import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useEffect } from "react";
import { foodListData } from "../action";
import "./style.css";

const FoodList = () => {
    const dispatch = useDispatch();
    const foodblog = useSelector((state) =>state.food?.data )
    const isLoading = useSelector((state) => state.food.loading)

    useEffect(() => {
      dispatch(foodListData)
    },[])

    if (isLoading) {
        return <div>Loading...</div>;
      }
  return <div>FoodList</div>;
};

export default FoodList;
