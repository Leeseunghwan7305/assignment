"use client";

import React from "react";
import "./index.scss";
import useOrderStore from "@/store/order";

const BottomSheet = () => {
  const { orderLists } = useOrderStore((state) => state);

  console.log(orderLists);
  return (
    <div className="BottomSheet">
      <div>
        <p>총 수량 :{orderLists.reduce((pre, cur) => pre + cur.count, 0)}개</p>
        <p>
          총 수량 :{" "}
          {orderLists.reduce((pre, cur) => {
            if (cur.count) {
              return pre + cur.count * cur.price;
            } else {
              return pre;
            }
          }, 0)}
          원
        </p>
      </div>
      <button>주문하기</button>
    </div>
  );
};

export default BottomSheet;
