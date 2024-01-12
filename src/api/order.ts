import { api } from "./apiCustom";

export const getOrderApi = async () => {
  try {
    const res = await api.get("items");
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
