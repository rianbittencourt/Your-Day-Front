import StatsCount from "@/components/Stats/StatsCount";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className=" max-w-7xl mx-auto sm:px-5 px-10 mb-[10rem] sm:mb-0">
      <div className="mt-10  ">
        <div className="border-b-2 pb-10 border-primary/20">
          <StatsCount />
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-2xl font-200 text-center">
            Você ainda não escreveu nada, que tal começar?
          </h1>
          <Button variant="outline" className="mt-5">
            Escrever
          </Button>
        </div>
      </div>
    </div>
  );
}