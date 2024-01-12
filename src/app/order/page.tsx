"use client";

import React, { useEffect, useState } from "react";
import "./index.scss";
import Nav from "@/components/common/Nav";
import { getOrderApi } from "@/api/order";
import BottomSheet from "@/components/orderPage/BottomSheet";
import Loading from "@/components/orderPage/Loading";
import OrderLists from "@/components/orderPage/OrderLists";
import useOrderStore from "@/store/order";

const Order = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const setOrderLists = useOrderStore((state) => state.setOrderLists);

  useEffect(() => {
    (async () => {
      const res = await getOrderApi();
      setLoading(false);
      setOrderLists(res);
    })();
  }, []);

  return (
    <main className="order">
      <Nav />
      {loading ? <Loading /> : <OrderLists />}

      <BottomSheet />
    </main>
  );
};

export default Order;
