import React from "react";
import "./index.scss";
import useOrderStore from "@/store/order";

const OrderLists = () => {
  const orderLists = useOrderStore((state) => state.orderLists);
  const setOrderLists = useOrderStore((state) => state.setOrderLists);

  return (
    <div className="OrderLists">
      {orderLists?.map((orderList) => {
        return (
          <div className="OrderList" key={orderList.id}>
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
