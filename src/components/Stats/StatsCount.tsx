import React from "react";

interface Stat {
  name: string;
  stat: string;
}

const stats: Stat[] = [
  { name: "Escritas", stat: "3980" },
  { name: "Leituras", stat: "4122" },
  { name: "Acessos", stat: "9875" },
];

export default function StatsCount() {
  return (
    <div className=" w-full ">
      <h3 className="text-base font-semibold leading-6 text-primary/25">
        Last 30 days
      </h3>
      <dl className="mt-5 grid  grid-cols-3 gap-5 lg:grid-cols-1">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-primary px-4 py-5 sm:p-6 shadow-2xl"
          >
            <dt className="truncate text-sm font-medium text-primary">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-text-primary">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
