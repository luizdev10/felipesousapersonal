export default function Phone({ children, className = '' }) {
  return (
    <div className={`relative mx-auto aspect-[9/18.5] w-full max-w-[250px] rounded-[2.6rem] border-[7px] border-tinta bg-papel shadow-2xl overflow-hidden ${className}`}>
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-tinta" />
      <div className="h-full w-full">{children}</div>
    </div>
  )
}
