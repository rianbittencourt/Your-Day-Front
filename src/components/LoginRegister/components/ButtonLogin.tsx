"use client";
import React from "react";
import styled from "styled-components";

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const Icon = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export default function ButtonLogin({
  title,
  icon,
  color,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}) {
  return (
    <Button color={color} onClick={onClick}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Button>
  );
}
