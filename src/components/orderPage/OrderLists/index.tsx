import React from "react";
import "./index.scss";
import { OrderListType } from "@/types/order";

type Props = {
  orderLists: OrderListType[];
  setOrderLists: React.Dispatch<React.SetStateAction<OrderListType[]>>;
};

const OrderLists = ({ orderLists, setOrderLists }: Props) => {
  return (
    <div>
      {orderLists?.map((orderList) => {
        return (
          <div className="OrderLists" key={orderList.id}>
            <div className="picture" />
            <div>
              <div>
                <p>A 벽지</p>
              </div>
              <div className="count">
                <button>-</button>
                <div>1</div>
                <button>+</button>
              </div>
            </div>
            <div className="price">100,000원</div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderLists;
