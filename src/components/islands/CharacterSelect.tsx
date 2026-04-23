import { useMemo, useState } from "react";

type Clip = {
  title: string;
  url: string;
  thumbnail: string;
};

type Character = {
  id: string;
  name: string;
  role: string;
  image: string;
  accent: string;
  bio: string;
  moments: string[];
  clips: Clip[];
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
    role: "El Líder / Miembro de la Mesa Negra",
    image: "/images/cast/ale-cabeza-profile-pic.webp",
    accent: "from-cyan-400/30 via-sky-400/20 to-fuchsia-500/20",
    bio: "PLACEHOLDER: Aquí va la biografía de Ale. Describe su personalidad, energía en el show, estilo de humor, presencia escénica y su papel dentro del universo de Los Pichy Boys.",
    moments: [
      "PLACEHOLDER: Mejor momento o segmento icónico de Ale.",
      "PLACEHOLDER: Momento viral, frase o intervención destacada.",
      "PLACEHOLDER: Anécdota, clip o sello característico de Ale.",
    ],
    clips: [
      {
        title: "Ale en modo leyenda",
        url: "https://www.instagram.com/reel/REEMPLAZAR_1/",
        thumbnail: "/images/clips/ale-clip-1.webp",
      },
      {
        title: "Momento viral de Ale",
        url: "https://www.instagram.com/reel/REEMPLAZAR_2/",
        thumbnail: "/images/clips/ale-clip-2.webp",
      },
      {
        title: "Ale rompiéndola en vivo",
        url: "https://www.instagram.com/reel/REEMPLAZAR_3/",
        thumbnail: "/images/clips/ale-clip-3.webp",
      },
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
    role: "Carponio / Miembro de la Mesa Negra",
    image: "/images/cast/maykito-carponio-profile-pic.webp",
    accent: "from-fuchsia-500/30 via-violet-400/20 to-cyan-400/20",
    bio: "PLACEHOLDER: Aquí va la biografía de Maykito. Puedes hablar de su tono, química con el resto, estilo, momentos fuertes y qué lo hace reconocible.",
    moments: [
      "PLACEHOLDER: Mejor momento o segmento icónico de Maykito.",
      "PLACEHOLDER: Momento viral, frase o intervención destacada.",
      "PLACEHOLDER: Anécdota, clip o sello característico de Maykito.",
    ],
    clips: [
      {
        title: "Maykito sin filtro",
        url: "https://www.instagram.com/reel/REEMPLAZAR_4/",
        thumbnail: "/images/clips/maykito-clip-1.webp",
      },
      {
        title: "Carponio en acción",
        url: "https://www.instagram.com/reel/REEMPLAZAR_5/",
        thumbnail: "/images/clips/maykito-clip-2.webp",
      },
      {
        title: "Reel destacado de Maykito",
        url: "https://www.instagram.com/reel/REEMPLAZAR_6/",
        thumbnail: "/images/clips/maykito-clip-3.webp",
      },
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
    role: "Botija / Productor Creativo",
    image: "/images/cast/machete-botija-profile-pic.webp",
    accent: "from-amber-300/30 via-fuchsia-500/20 to-cyan-400/20",
    bio: "PLACEHOLDER: Aquí va la biografía de Machete. Explica el tipo de presencia que aporta, su identidad dentro del show y por qué conecta con la audiencia.",
    moments: [
      "PLACEHOLDER: Mejor momento o segmento icónico de Machete.",
      "PLACEHOLDER: Momento viral, frase o intervención destacada.",
      "PLACEHOLDER: Anécdota, clip o sello característico de Machete.",
    ],
    clips: [
      {
        title: "Machete al máximo",
        url: "https://www.instagram.com/reel/REEMPLAZAR_7/",
        thumbnail: "/images/clips/machete-clip-1.webp",
      },
      {
        title: "Botija desatado",
        url: "https://www.instagram.com/reel/REEMPLAZAR_8/",
        thumbnail: "/images/clips/machete-clip-2.webp",
      },
      {
        title: "Clip top de Machete",
        url: "https://www.instagram.com/reel/REEMPLAZAR_9/",
        thumbnail: "/images/clips/machete-clip-3.webp",
      },
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
    role: "El Monito / Productor Técnico",
    image: "/images/cast/lopez-monito-profile-pic.webp",
    accent: "from-sky-400/30 via-indigo-400/20 to-fuchsia-500/20",
    bio: "PLACEHOLDER: Aquí va la biografía de Lopez. Puedes contar su estilo, timing, rol en el grupo y aquello que lo hace único dentro del crew.",
    moments: [
      "PLACEHOLDER: Mejor momento o segmento icónico de Lopez.",
      "PLACEHOLDER: Momento viral, frase o intervención destacada.",
      "PLACEHOLDER: Anécdota, clip o sello característico de Lopez.",
    ],
    clips: [
      {
        title: "Lopez con timing perfecto",
        url: "https://www.instagram.com/reel/REEMPLAZAR_10/",
        thumbnail: "/images/clips/lopez-clip-1.webp",
      },
      {
        title: "El Monito en escena",
        url: "https://www.instagram.com/reel/REEMPLAZAR_11/",
        thumbnail: "/images/clips/lopez-clip-2.webp",
      },
      {
        title: "Clip viral de Lopez",
        url: "https://www.instagram.com/reel/REEMPLAZAR_12/",
        thumbnail: "/images/clips/lopez-clip-3.webp",
      },
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
    role: "El Fumeta / Productor de Contenido",
    image: "/images/cast/chucho-no-folla-profile-pic.webp",
    accent: "from-cyan-300/30 via-fuchsia-500/20 to-amber-300/20",
    bio: "PLACEHOLDER: Aquí va la biografía de Chucho. Incluye personalidad, papel dentro del show, tipo de humor y conexión con la comunidad.",
    moments: [
      "PLACEHOLDER: Mejor momento o segmento icónico de Chucho.",
      "PLACEHOLDER: Momento viral, frase o intervención destacada.",
      "PLACEHOLDER: Anécdota, clip o sello característico de Chucho.",
    ],
    clips: [
      {
        title: "Chucho en modo caos",
        url: "https://www.instagram.com/reel/REEMPLAZAR_13/",
        thumbnail: "/images/clips/chucho-clip-1.webp",
      },
      {
        title: "Clip icónico de Chucho",
        url: "https://www.instagram.com/reel/REEMPLAZAR_14/",
        thumbnail: "/images/clips/chucho-clip-2.webp",
      },
      {
        title: "Reel top de Chucho",
        url: "https://www.instagram.com/reel/REEMPLAZAR_15/",
        thumbnail: "/images/clips/chucho-clip-3.webp",
      },
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
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[rgb(var(--color-text-secondary))] sm:text-xs">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,rgb(var(--color-electric-blue)),rgb(var(--color-vivid-magenta)),rgb(var(--color-warm-spark)))]"
          style={{ width: value }}
        />
      </div>
    </div>
  );
}

function ClipCard({ clip }: { clip: Clip }) {
  return (
    <a
      href={clip.url}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/30 hover:shadow-[0_0_30px_rgba(255,47,179,0.16)]"
      aria-label={`Abrir reel: ${clip.title}`}
    >
      <div className="relative aspect-[9/16] overflow-hidden">
        <img
          src={clip.thumbnail}
          alt={clip.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,6,18,0.88)_0%,rgba(3,6,18,0.2)_50%,rgba(3,6,18,0.08)_100%)]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-white/15 sm:h-14 sm:w-14">
            <span className="ml-1 text-base text-white sm:text-lg">▶</span>
          </div>
        </div>

        <div className="absolute left-3 right-3 top-3 flex items-center justify-between sm:left-4 sm:right-4 sm:top-4">
          <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md sm:px-3 sm:text-[10px]">
            Reel
          </span>

          <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md sm:px-3 sm:text-[10px]">
            Instagram
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
          <p className="text-sm font-semibold leading-5 text-white sm:leading-6">
            {clip.title}
          </p>
        </div>
      </div>
    </a>
  );
}

function CharacterDetail({ selected }: { selected: Character }) {
  return (
    <div className="relative w-full max-w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_0_40px_rgba(37,199,255,0.12)] backdrop-blur-xl sm:rounded-[2rem] sm:p-5 md:p-6 xl:p-7">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${selected.accent} opacity-40`}
      />

      <div className="relative min-w-0">
        <div className="grid min-w-0 gap-5 md:gap-6 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0b102d]/70 sm:rounded-[1.6rem]">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src={selected.image}
                alt={selected.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="mt-1 text-3xl text-white sm:mt-2 sm:text-4xl md:text-5xl">
              {selected.name}
            </h3>

            <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[rgb(var(--color-text-secondary))] sm:text-sm sm:tracking-[0.18em]">
              {selected.role}
            </p>

            <p className="mt-5 text-sm leading-6 text-[rgb(var(--color-text-secondary))] sm:mt-6 md:text-[15px] md:leading-7">
              {selected.bio}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2">
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

        <div className="hidden mt-6 rounded-[1.2rem] border border-white/10 bg-black/20 p-4 sm:mt-8 sm:rounded-[1.5rem] sm:p-5 md:hidden xl:block lg:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--color-neon-cyan))] sm:text-sm sm:tracking-[0.2em]">
              Clips destacados
            </p>

            <span className="text-[10px] uppercase tracking-[0.14em] text-[rgb(var(--color-text-secondary))] sm:text-xs sm:tracking-[0.16em]">
              Click para ver en Instagram
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 2xl:grid-cols-3 md:grid-cols-3">
            {selected.clips.map((clip, index) => (
              <ClipCard key={`${selected.id}-clip-${index}`} clip={clip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileCharacterSlider({
  characters,
  selectedId,
  onSelect,
}: {
  characters: Character[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="w-full max-w-full overflow-hidden lg:hidden">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--color-neon-cyan))] sm:text-sm">
          Selecciona un personaje
        </p>

        <span className="shrink-0 text-[10px] uppercase tracking-[0.14em] text-[rgb(var(--color-text-secondary))] sm:text-xs">
          Desliza
        </span>
      </div>

      <div className="scrollbar-none flex w-full snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden pb-2 pr-1">
        {characters.map((character) => {
          const isActive = selectedId === character.id;

          return (
            <button
              key={character.id}
              type="button"
              onClick={() => onSelect(character.id)}
              className={[
                "group relative w-[148px] shrink-0 snap-start overflow-hidden rounded-[1.25rem] border p-2 text-left transition duration-300 sm:w-[168px]",
                "bg-white/[0.04] backdrop-blur-md",
                isActive
                  ? "border-cyan-300/40 shadow-[0_0_30px_rgba(37,199,255,0.18)]"
                  : "border-white/10",
              ].join(" ")}
              aria-pressed={isActive}
              aria-label={`Seleccionar a ${character.name}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${character.accent} opacity-70`}
              />

              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-[1rem] bg-white/5">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="px-1.5 pb-1.5 pt-3">
                  <p className="text-sm font-bold text-white sm:text-base">
                    {character.name}
                  </p>
                  <p className="mt-1 line-clamp-2 text-[10px] uppercase tracking-[0.12em] text-[rgb(var(--color-text-secondary))]">
                    {character.role}
                  </p>
                </div>
              </div>

              {isActive && (
                <div className="pointer-events-none absolute inset-x-4 bottom-0 h-1 rounded-full bg-[linear-gradient(90deg,rgb(var(--color-electric-blue)),rgb(var(--color-vivid-magenta)),rgb(var(--color-warm-spark)))]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DesktopCharacterGrid({
  characters,
  selectedId,
  onSelect,
}: {
  characters: Character[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="hidden lg:block">
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-6 md:grid-cols-2">
        {characters.map((character, index) => {
          const isActive = selectedId === character.id;
          const isLastOddItem =
            characters.length % 3 !== 0 && index === characters.length - 1;

          return (
            <button
              key={character.id}
              type="button"
              onClick={() => onSelect(character.id)}
              className={[
                "group relative overflow-hidden rounded-[1.5rem] border p-2.5 text-left transition duration-300",
                "bg-white/[0.04] backdrop-blur-md",
                isLastOddItem ? "xl:col-start-2" : "",
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
                <div className="aspect-square overflow-hidden rounded-[1.1rem] bg-white/5">
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
                  <p className="mt-1 line-clamp-2 text-xs uppercase tracking-[0.16em] text-[rgb(var(--color-text-secondary))]">
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
    <div className="grid min-w-0 gap-6 overflow-x-clip lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:grid-cols-[0.88fr_1.12fr]">
      <DesktopCharacterGrid
        characters={characters}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <div className="min-w-0 space-y-5 sm:space-y-6">
        <CharacterDetail selected={selected} />

        <MobileCharacterSlider
          characters={characters}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>
    </div>
  );
}