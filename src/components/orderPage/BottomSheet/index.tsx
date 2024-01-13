"use client";

import React, { useState } from "react";
import "./index.scss";
import useOrderStore from "@/store/order";
import {
  formatNumberWithCommas,
  orderListSumCount,
  orderListSumPrice,
} from "@/utils/order";
import { useRouter } from "next/navigation";

const BottomSheet = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const { orderLists } = useOrderStore((state) => state);

  const clickPurchase = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/complete");
    }, 2000);
  };

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
        className={`${
          orderListSumCount(orderLists) > 0 && !loading ? "highlight" : null
        } `}
        onClick={clickPurchase}
      >
        {loading ? "로딩중..." : "주문하기"}
      </button>
    </div>
  );
};

export default BottomSheet;
