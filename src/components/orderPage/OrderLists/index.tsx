"use client";

import React, { useEffect, useState } from "react";
import "./index.scss";
import useOrderStore from "@/store/order";
import { getOrderAPI } from "@/apis/order";
import Loading from "../Loading";
import { OrderListType } from "@/types/order";

const OrderLists = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const orderLists = useOrderStore((state) => state.orderLists);
  const setOrderLists = useOrderStore((state) => state.setOrderLists);

  useEffect(() => {
    (async () => {
      let res = await getOrderAPI();
      res = res?.map((item: OrderListType) => {
        return { ...item, count: 0 };
      });
      setOrderLists(res);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="OrderLists">
          {orderLists?.map((orderList) => {
            return (
              <div className="OrderList" key={orderList.id}>
                <div className="picture" />
                <div>
                  <div className="name-event">
                    <p>{orderList.name}</p>
                    {orderList.event && <div>이벤트</div>}
                  </div>
                  <div className="count">
                    <button>-</button>
                    <div>{orderList.count}</div>
                    <button>+</button>
                  </div>
                </div>
                <div className="price">{orderList.price}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default OrderLists;
