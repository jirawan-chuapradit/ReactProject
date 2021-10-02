import axios from "axios";
import { ORDERS_FETCH } from "./types";
export const ordersFetch = () => {
  //ส่งบอกว่าให้เปลี่ยนแปลงข้อมูล order
  //  return only object
  // ต้องใช้ redux-thunk เพื่อให้สามารถ return func ออกไปได้
  // .then จะทำงานเป็น async เมื่อได้รับข้อมูลจาก server ถึงจะทำงาน

  return (dispatch) => {
    axios.get(process.env.REACT_APP_APT_URL + "/orders").then((res) => {
      dispatch({ type: ORDERS_FETCH, payload: res.data });
    });
  };
};

export const orderDelete = (id) => {
  return (dispatch) => {
    axios
      .delete(process.env.REACT_APP_APT_URL + "/orders/" + id)
      .then((res) => {
        axios.get(process.env.REACT_APP_APT_URL + "/orders").then((res) => {
          dispatch({ type: ORDERS_FETCH, payload: res.data });
        });
      });
  };
};
