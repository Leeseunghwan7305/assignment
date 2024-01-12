"use client";

import Image from "next/image";
import logo from "../../../public/main-logo.png";
import "./index.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToOrder = () => {
    router.push("/order");
  };

  return (
    <main className="Home">
      <Image width={151} height={51} src={logo} alt="logo" />
      <button onClick={goToOrder} className="button">
        주문하러 가기
      </button>
    </main>
  );
}
