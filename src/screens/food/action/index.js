import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../../redux/api";

const foodListData = createAsyncThunk('food', async () => { 
  const response = await fetchData('/api/json/v1/1/categories.php', 'GET');
  console.log("response",response)
  return response;
})

export {foodListData}