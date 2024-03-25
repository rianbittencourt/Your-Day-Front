"use client";
import ButtonLogin from "./components/ButtonLogin";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

export default function LoginRegister() {
  return (
    <div className="flex items-center justify-center relative flex-grow  rounded-md shadow-2xl max-w-7xl sm:max-w-2xl w-full h-full bg-secondary ">
      <div className="absolute top-5 right-5">
        <SwitchTheme />
      </div>
      <div className="flex flex-col  mx-auto px-2  ">
        <div className="mr-14">
          <h2 className="text-3xl text-primary">Olá !</h2>
          <h2 className="text-6xl font-semibold text-[#1CC0A9] ">Bem Vindo!</h2>
        </div>
        <p className="mt-10 text-center text-xl font-medium text-primary ">
          Entre na sua Conta
        </p>
        <div className="flex  flex-col">
          <ButtonLogin
            title="Entrar com o Google"
            icon={<FaGoogle />}
            color="#ea4335"
            onClick={() => {}}
          />
          <ButtonLogin
            title="Entrar com o Facebook"
            icon={<FaFacebook />}
            color="#0866ff"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
