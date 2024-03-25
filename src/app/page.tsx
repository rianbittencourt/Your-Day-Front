import SwitchTheme from "@/components/SwitchTheme/SwitchTheme";
import styles from "./page.module.css";
import LoginRegister from "@/components/LoginRegister/LoginRegister";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-20 bg-primary">
      <LoginRegister />

      {/* <ButtonLogin
          title="Entrar com o Google"
          icon={<FcGoogle />}
          color="#ea4335"
          onClick={() => {}}
        /> */}
    </main>
  );
}
