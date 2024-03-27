"use client";
import ButtonLogin from "./components/ButtonLogin";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";
import { Locale } from "@/config/i18n.config";

export default function LoginRegister({
  params,
}: {
  params: { lang: Locale };
}) {
  const t = getDictionaryUseClient(params.lang);
  return (
    <div className="flex items-center justify-center relative flex-grow  rounded-md shadow-2xl max-w-7xl sm:max-w-2xl w-full h-full bg-secondary ">
      <div className="absolute top-5 right-5">
        <SwitchTheme />
      </div>
      <div className="flex flex-col  mx-auto px-2  ">
        <div className="mr-14">
          <h2 className="text-3xl text-primary">{t.register.welcome}</h2>
          <h2 className="text-6xl font-semibold text-[#1CC0A9] ">
            {t.register.title}
          </h2>
        </div>
        <p className="mt-10 text-center text-xl font-medium text-primary ">
          {t.register.paragrafe}
        </p>
        <div className="flex  flex-col">
          <ButtonLogin
            title={t.register.googleButtonText}
            icon={<FaGoogle />}
            color="#ea4335"
            onClick={() => {}}
          />
          <ButtonLogin
            title={t.register.facebookButtonText}
            icon={<FaFacebook />}
            color="#0866ff"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
