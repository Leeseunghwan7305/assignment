import { OrderListType } from "@/types/order";
import { create } from "zustand";

type State = {
  orderLists: OrderListType[];
};

type Actions = {
  setOrderLists: (newOrderLists: OrderListType[]) => void;
  setOrderPlus: (id: string) => void;
  setOrderMinus: (id: string) => void;
};

const useOrderStore = create<State & Actions>((set) => ({
  orderLists: [],
  setOrderLists: (newOrderLists: OrderListType[]) =>
    set(() => ({ orderLists: newOrderLists })),
  setOrderPlus: (id: string) =>
    set((state) => {
      const updatedOrderLists = [...state.orderLists];

      const targetItem = updatedOrderLists.find((item) => item.id === id);
      if (targetItem) {
        if (targetItem.count >= 999) return state;
        targetItem.count += 1;
        return { orderLists: [...updatedOrderLists, targetItem] };
      }

      return state;
    }),
  setOrderMinus: (id: string) =>
    set((state) => {
      const updatedOrderLists = [...state.orderLists];

      const targetItem = updatedOrderLists.find((item) => item.id === id);
      if (targetItem) {
        if (targetItem.count === 0) return state;
        targetItem.count -= 1;
        return { orderLists: [...updatedOrderLists, targetItem] };
      }

      return state;
    }),
}));

export default useOrderStore;
