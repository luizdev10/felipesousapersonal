const estilos = {
  acento: 'bg-acento text-tinta hover:bg-tinta hover:text-acento',
  escuro: 'bg-tinta text-papel hover:bg-acento hover:text-tinta',
  claro: 'bg-papel text-tinta hover:bg-acento',
}

export default function Button({ href, variante = 'acento', pequeno = false, className = '', children, ...rest }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 ${
        pequeno ? 'px-4 py-2 text-xs min-h-11' : 'px-7 py-3.5 text-sm min-h-11'
      } ${estilos[variante]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
