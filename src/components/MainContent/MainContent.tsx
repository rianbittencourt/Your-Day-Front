import React from "react";
import StatsCount from "../Stats/StatsCount";

interface Stat {
  label: string;
  value: string;
}

const stats: Stat[] = [
  { label: "Total de Escritas", value: "3980" },
  { label: "Total de Leituras", value: "4122" },
  { label: "Acessos", value: "28074" },
];

export default function MainContent() {
  return (
    <div className="mt-10 ">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl border-l-[5px] border-[cyan] pl-2">
          Nossa Missão
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-10 lg:flex-row pl-5 ">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto ">
            <p className="text-xl leading-8 text-primary">
              Nossa missão é proporcionar um espaço seguro e acolhedor onde
              indivíduos possam expressar livremente seus pensamentos,
              sentimentos e experiências do dia a dia. Acreditamos na
              importância da autenticidade e da conexão humana genuína, e é por
              isso que nos dedicamos a criar o Your Day.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-primary">
              <p>
                Nosso compromisso é criar um ambiente onde todos se sintam
                bem-vindos e valorizados, independentemente de sua origem,
                cultura ou experiências pessoais. Queremos promover a empatia, a
                compreensão e a solidariedade entre nossos usuários, construindo
                uma comunidade global de apoio mútuo.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-auto   ">
            <StatsCount />
          </div>
        </div>
      </div>
    </div>
  );
}
