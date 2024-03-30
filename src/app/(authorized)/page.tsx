import LoginRegister from "@/components/LoginRegister/LoginRegister";
import { useSession, getSession } from "next-auth/react";
export default function Home() {
  return (
    <div className="  h-screen flex justify-center items-center py-10 ">
      <h1>logado</h1>
    </div>
  );
}
