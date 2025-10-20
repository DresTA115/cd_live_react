import { Link } from 'react-router-dom'

import './Logo.css'

const logoSrc = new URL('../../../assets/images/logo/logo1.png', import.meta.url).href

export function Logo({ className = '', to = '/', brandText = 'CD.Live', imageAlt = 'CD.Live', ...linkProps }) {
  const mergedClassName = className ? `logo ${className}` : 'logo'

  return (
    <Link to={to} className={mergedClassName} {...linkProps}>
      <img src={logoSrc} alt={imageAlt} />
      <span className="brand-text">{brandText}</span>
    </Link>
  )
}
