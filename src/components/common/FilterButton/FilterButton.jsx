import { forwardRef } from 'react'

import './FilterButton.css'

function joinClassNames(...clases) {
  return clases.filter(Boolean).join(' ')
}

export const FilterButton = forwardRef(function FilterButton(
  { children, isActive = false, className = '', type = 'button', ...props },
  ref,
) {
  const classes = joinClassNames('boton-filtro', className, isActive && 'activo')

  return (
    <button ref={ref} type={type} className={classes} {...props}>
      {children}
    </button>
  )
})
