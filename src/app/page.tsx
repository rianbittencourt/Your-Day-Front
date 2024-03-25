"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ButtonLogin from "@/components/LoginRegister/components/ButtonLogin";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="flex w-[500px]">
        <ButtonLogin
          title="Entrar com o Google"
          icon={<FcGoogle />}
          color="#ea4335"
          onClick={() => {}}
        />
      </div>
    </main>
  );
}
