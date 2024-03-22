"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ButtonLogin from "@/components/LoginRegister/components/ButtonLogin";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import SwitchTheme from "@/components/SwitchTheme/SwitchTheme";

const Container = styled.div`
  display: flex;

  background-color: ${(props) => props.theme.colors.background};
  width: 500px;
`;

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <ButtonLogin
          title="Entrar com o Google"
          icon={<FcGoogle />}
          color="#ea4335"
          onClick={() => {}}
        />
     
      </Container>
    </main>
  );
}
