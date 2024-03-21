"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ButtonLogin from "@/components/LoginRegister/components/ButtonLogin";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

const Container = styled.div`
  display: flex;

  background-color: black;
  width: 500px;
`;

export default function Home() {
  return <main className={styles.main}></main>;
}
