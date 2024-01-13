import { OrderListType } from "@/types/order";

export const formatNumberWithCommas = (number: number) => {
  const parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

export const orderListSumCount = (orderLists: OrderListType[]) => {
  const sum = orderLists.reduce((pre, cur) => pre + cur.count, 0);
  return sum;
};

export const orderListSumPrice = (orderLists: OrderListType[]) => {
  const price = orderLists.reduce((pre, cur) => {
    if (cur.count) {
      return pre + cur.count * cur.price;
    } else {
      return pre;
    }
  }, 0);
  return price;
};
