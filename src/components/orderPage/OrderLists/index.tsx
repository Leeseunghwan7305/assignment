"use client";

import React, { useEffect, useState } from "react";
import "./index.scss";
import useOrderStore from "@/store/order";
import { getOrderAPI } from "@/apis/order";
import Loading from "../Loading";
import { OrderListType } from "@/types/order";
import { formatNumberWithCommas } from "@/utils/order";
import { useRouter } from "next/navigation";

const OrderLists = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const { orderLists, setOrderLists, setOrderPlus, setOrderMinus } =
    useOrderStore((state) => state);

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
              <div
                className={`OrderList ${orderList.count && "highlight"}`}
                key={orderList.id}
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
