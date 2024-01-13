"use client";

import React from "react";
import "./index.scss";
import useOrderStore from "@/store/order";
import {
  formatNumberWithCommas,
  orderListSumCount,
  orderListSumPrice,
} from "@/utils/order";

const BottomSheet = () => {
  const { orderLists } = useOrderStore((state) => state);

  return (
    <div className="BottomSheet">
      <div>
        <p>총 수량 :{orderListSumCount(orderLists)}개</p>
        <p>
          총 가격 :{formatNumberWithCommas(orderListSumPrice(orderLists))}원
        </p>
      </div>
      <button
        disabled={orderListSumCount(orderLists) === 0 ? true : false}
        className={`${orderListSumCount(orderLists) > 0 ? "highlight" : null}`}
      >
        주문하기
      </button>
    </div>
  );
};

export default BottomSheet;
