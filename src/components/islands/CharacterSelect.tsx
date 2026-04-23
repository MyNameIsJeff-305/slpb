import { useMemo, useState } from "react";

type Character = {
  id: string;
  name: string;
  role: string;
  image: string;
  accent: string;
  bio: string;
  moments: string[];
  stats: {
    energia: string;
    caos: string;
    sarcasmo: string;
    improvisacion: string;
  };
};

const characters: Character[] = [
  {
    id: "ale",
    name: "Ale",
    role: "Host / Personalidad del show",
    image: "/images/cast/ale.webp",
    accent: "from-cyan-400/30 via-sky-400/20 to-fuchsia-500/20",
    bio: "PLACEHOLDER: Aquí va la biografía de Ale. Describe su personalidad, energía en el show, estilo de humor, presencia escénica y su papel dentro del universo de Los Pichy Boys.",
    moments: [
      "PLACEHOLDER: Mejor momento o segmento icónico de Ale.",
      "PLACEHOLDER: Momento viral, frase o intervención destacada.",
      "PLACEHOLDER: Anécdota, clip o sello característico de Ale.",
    ],
    stats: {
      energia: "95%",
      caos: "82%",
      sarcasmo: "88%",
      improvisacion: "91%",
    },
  },
  {
    id: "maykito",
    name: "Maykito",
    role: "Host / Personalidad del show",
    image: "/images/cast/maykito.webp",
    accent: "from-fuchsia-500/30 via-violet-400/20 to-cyan-400/20",
    bio: "PLACEHOLDER: Aquí va la biografía de Maykito. Puedes hablar de su tono, química con el resto, estilo, momentos fuertes y qué lo hace reconocible.",
    moments: [
      "PLACEHOLDER: Mejor momento o segmento icónico de Maykito.",
      "PLACEHOLDER: Momento viral, frase o intervención destacada.",
      "PLACEHOLDER: Anécdota, clip o sello característico de Maykito.",
    ],
    stats: {
      energia: "92%",
      caos: "86%",
      sarcasmo: "90%",
      improvisacion: "89%",
    },
  },
  {
    id: "machete",
    name: "Machete",
    role: "Figura del universo Pichy",
    image: "/images/cast/machete.webp",
    accent: "from-amber-300/30 via-fuchsia-500/20 to-cyan-400/20",
    bio: "PLACEHOLDER: Aquí va la biografía de Machete. Explica el tipo de presencia que aporta, su identidad dentro del show y por qué conecta con la audiencia.",
    moments: [
      "PLACEHOLDER: Mejor momento o segmento icónico de Machete.",
      "PLACEHOLDER: Momento viral, frase o intervención destacada.",
      "PLACEHOLDER: Anécdota, clip o sello característico de Machete.",
    ],
    stats: {
      energia: "89%",
      caos: "94%",
      sarcasmo: "75%",
      improvisacion: "87%",
    },
  },
  {
    id: "lopez",
    name: "Lopez",
    role: "Figura del universo Pichy",
    image: "/images/cast/lopez.webp",
    accent: "from-sky-400/30 via-indigo-400/20 to-fuchsia-500/20",
    bio: "PLACEHOLDER: Aquí va la biografía de Lopez. Puedes contar su estilo, timing, rol en el grupo y aquello que lo hace único dentro del crew.",
    moments: [
      "PLACEHOLDER: Mejor momento o segmento icónico de Lopez.",
      "PLACEHOLDER: Momento viral, frase o intervención destacada.",
      "PLACEHOLDER: Anécdota, clip o sello característico de Lopez.",
    ],
    stats: {
      energia: "84%",
      caos: "79%",
      sarcasmo: "93%",
      improvisacion: "85%",
    },
  },
  {
    id: "chucho",
    name: "Chucho",
    role: "Figura del universo Pichy",
    image: "/images/cast/chucho.webp",
    accent: "from-cyan-300/30 via-fuchsia-500/20 to-amber-300/20",
    bio: "PLACEHOLDER: Aquí va la biografía de Chucho. Incluye personalidad, papel dentro del show, tipo de humor y conexión con la comunidad.",
    moments: [
      "PLACEHOLDER: Mejor momento o segmento icónico de Chucho.",
      "PLACEHOLDER: Momento viral, frase o intervención destacada.",
      "PLACEHOLDER: Anécdota, clip o sello característico de Chucho.",
    ],
    stats: {
      energia: "90%",
      caos: "88%",
      sarcasmo: "80%",
      improvisacion: "92%",
    },
  },
];

function StatBar({ label, value }: { label: string; value: string }) {
  const width = value;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[rgb(var(--color-text-secondary))]">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,rgb(var(--color-electric-blue)),rgb(var(--color-vivid-magenta)),rgb(var(--color-warm-spark)))]"
          style={{ width }}
        />
      </div>
    </div>
  );
}

export default function CharacterSelect() {
  const [selectedId, setSelectedId] = useState("ale");

  const selected = useMemo(
    () =>
      characters.find((character) => character.id === selectedId) ??
      characters[0],
    [selectedId],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--color-neon-cyan))]">
          Character Select
        </p>

        <div className="grid grid-cols-3 gap-4">
          {characters.map((character, index) => {
            const isActive = selected.id === character.id;
            const isLastOddItem =
              characters.length % 2 !== 0 && index === characters.length - 1;

            return (
              <button
                key={character.id}
                type="button"
                onClick={() => setSelectedId(character.id)}
                className={[
                  "group relative overflow-hidden rounded-[1.5rem] border p-2 text-left transition duration-300",
                  "bg-white/[0.04] backdrop-blur-md",
                  isLastOddItem ? "col-span-1 mx-auto w-full max-w-[260px]" : "",
                  isActive
                    ? "border-cyan-300/40 shadow-[0_0_40px_rgba(37,199,255,0.18)] -translate-y-1"
                    : "border-white/10 hover:border-fuchsia-300/30 hover:-translate-y-1",
                ].join(" ")}
                aria-pressed={isActive}
                aria-label={`Seleccionar a ${character.name}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${character.accent} opacity-70`}
                />
                <div className="relative">
                  <div className="aspect-[1/1] overflow-hidden rounded-[1.1rem] bg-white/5">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="px-2 pb-2 pt-4">
                    <p className="text-lg font-bold text-white">
                      {character.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[rgb(var(--color-text-secondary))]">
                      {character.role}
                    </p>
                  </div>
                </div>

                {isActive && (
                  <div className="pointer-events-none absolute inset-x-6 bottom-0 h-1 rounded-full bg-[linear-gradient(90deg,rgb(var(--color-electric-blue)),rgb(var(--color-vivid-magenta)),rgb(var(--color-warm-spark)))]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl shadow-[0_0_40px_rgba(37,199,255,0.12)] md:p-7">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${selected.accent} opacity-40`}
        />
        <div className="relative">
          <div className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr] xl:items-start">
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b102d]/70">
              <div className="aspect-[9/15] h-full w-full overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--color-neon-cyan))]">
                Seleccionado
              </p>

              <h3 className="mt-3 text-4xl text-white md:text-5xl">
                {selected.name}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[rgb(var(--color-text-secondary))]">
                {selected.role}
              </p>

              <p className="mt-6 text-base leading-8 text-[rgb(var(--color-text-secondary))]">
                {selected.bio}
              </p>

              <div className="mt-8 grid gap-4">
                <StatBar label="Energía" value={selected.stats.energia} />
                <StatBar label="Caos" value={selected.stats.caos} />
                <StatBar label="Sarcasmo" value={selected.stats.sarcasmo} />
                <StatBar
                  label="Improvisación"
                  value={selected.stats.improvisacion}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--color-neon-cyan))]">
              Mejores momentos
            </p>

            <ul className="mt-5 grid grid-cols-3 gap-3">
              {selected.moments.map((moment, index) => (
                <li
                  key={`${selected.id}-moment-${index}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-[rgb(var(--color-text-secondary))]"
                >
                  <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {moment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
