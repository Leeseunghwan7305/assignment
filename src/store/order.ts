import { OrderListType } from "@/types/order";
import { create } from "zustand";

type State = {
  orderLists: OrderListType[];
};

type Actions = {
  setOrderLists: (newOrderLists: OrderListType[]) => void;
};

const useOrderStore = create<State & Actions>((set) => ({
  orderLists: [],
  setOrderLists: (newOrderLists: OrderListType[]) =>
    set((state) => ({ orderLists: newOrderLists })),
}));

export default useOrderStore;
