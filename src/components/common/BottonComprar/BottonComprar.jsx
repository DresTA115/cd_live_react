import './BottonComprar.css'

export function BottonComprar({ children = 'Comprar', className = '', type = 'button', onClick }) {
  const classes = className ? `btn-comprar ${className}` : 'btn-comprar'
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
