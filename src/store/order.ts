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
      const targetItemIndex = updatedOrderLists.findIndex(
        (item) => item.id === id
      );
      if (targetItemIndex !== -1) {
        const targetItem = updatedOrderLists[targetItemIndex];
        if (targetItem.count < 999) {
          targetItem.count += 1;
        }
        updatedOrderLists[targetItemIndex] = targetItem;
      }
      return { orderLists: updatedOrderLists };
    }),

  setOrderMinus: (id: string) =>
    set((state) => {
      const updatedOrderLists = [...state.orderLists];
      const targetItemIndex = updatedOrderLists.findIndex(
        (item) => item.id === id
      );
      if (targetItemIndex !== -1) {
        const targetItem = updatedOrderLists[targetItemIndex];
        if (targetItem.count > 0) {
          targetItem.count -= 1;
        }
        updatedOrderLists[targetItemIndex] = targetItem;
      }
      return { orderLists: updatedOrderLists };
    }),
}));

export default useOrderStore;
