import React, { useEffect, useState } from "react";
import "./index.scss";
import Nav from "@/components/common/Nav";
import BottomSheet from "@/components/orderPage/BottomSheet";
import OrderLists from "@/components/orderPage/OrderLists";

const Order = () => {
  return (
    <main className="order">
      <Nav />
      <OrderLists />
      <BottomSheet />
    </main>
  );
};

export default Order;
