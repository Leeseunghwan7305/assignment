"use client";

import React, { useEffect, useState } from "react";
import "./index.scss";
import useOrderStore from "@/store/order";
import { getOrderAPI } from "@/apis/order";
import Loading from "../Loading";
import { OrderListType } from "@/types/order";
import { formatNumberWithCommas } from "@/utils/order";

const OrderLists = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const orderLists = useOrderStore((state) => state.orderLists);
  const setOrderLists = useOrderStore((state) => state.setOrderLists);
  const setOrderPlus = useOrderStore((state) => state.setOrderPlus);
  const setOrderMinus = useOrderStore((state) => state.setOrderMinus);

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
          {orderLists?.map((orderList, idx) => {
            return (
              <div
                className={`OrderList ${orderList.count && "highlight"}`}
                key={idx}
              >
                <div className="picture" />
                <div>
                  <div className="name-event">
                    <p>{orderList.name}</p>
                    {orderList.event && <div>이벤트</div>}
                  </div>
                  <div className="count">
                    <button onClick={() => setOrderMinus(orderList.id)}>
                      -
                    </button>
                    <div>{orderList.count}</div>
                    <button onClick={() => setOrderPlus(orderList.id)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="price">
                  {formatNumberWithCommas(orderList.price)}원
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default OrderLists;
