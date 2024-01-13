"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import checkIcon from "../../../public/checkIcon.png";
import { useRouter } from "next/navigation";
import "./index.scss";

const Complete = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("./order");
    }, 3000);
  }, []);

  return (
    <div className="Complete">
      <Image src={checkIcon} alt="checkIcon" />
      <p>주문이 완료되었습니다.</p>
    </div>
  );
};

export default Complete;
