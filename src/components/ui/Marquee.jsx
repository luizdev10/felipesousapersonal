export default function Marquee({ itens }) {
  const lista = [...itens, ...itens]
  return (
    <div className="overflow-hidden border-y border-tinta/10 bg-acento py-4" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {lista.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.2em]">
            {t}
            <span className="size-1.5 rounded-full bg-tinta" />
          </span>
        ))}
      </div>
    </div>
  )
}
