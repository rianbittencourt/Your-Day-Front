"use client";
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
  width: 100%;
  color: white;

  &:hover {
    opacity: 0.8;
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

export interface ButtonLoginProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}

export default function ButtonLogin({
  title,
  icon,
  color,
  onClick,
}: ButtonLoginProps) {
  return (
    <Button color={color} onClick={onClick}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Button>
  );
}
