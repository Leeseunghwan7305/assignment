"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./index.scss";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("./order");
    }, 3000);
  }, []);

  return (
    <div className="Error">
      <p>주문에 실패하였습니다.</p>
      <p>다시 시도해주세요.</p>
    </div>
  );
};

export default Error;
