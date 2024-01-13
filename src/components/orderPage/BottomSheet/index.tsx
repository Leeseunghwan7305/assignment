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

  console.log(orderLists);

  return (
    <div className="BottomSheet">
      <div>
        <p>총 수량 :{orderListSumCount(orderLists)}개</p>
        <p>
          총 가격 :{formatNumberWithCommas(orderListSumPrice(orderLists))}원
        </p>
      </div>
      <button>주문하기</button>
    </div>
  );
};

export default BottomSheet;
