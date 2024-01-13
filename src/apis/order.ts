import { OrderListType } from "@/types/order";
import { api } from "./apiCustom";

export const getOrderAPI = async () => {
  try {
    const res = await api.get("items");
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
