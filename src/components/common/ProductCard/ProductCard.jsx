import './ProductCard.css'

export function ProductCard({
  imageSrc,
  imageAlt,
  children,
  className = '',
  imageClassName = '',
  bodyClassName = '',
  imageProps = {},
}) {
  const cardClass = className ? `productCard card ${className}` : 'productCard card'
  const mergedImageClass = imageClassName ? `productCard-image ${imageClassName}` : 'productCard-image'
  const mergedBodyClass = bodyClassName ? `productCard-body card-body ${bodyClassName}` : 'productCard-body card-body'

  return (
    <article className={cardClass}>
      <img src={imageSrc} alt={imageAlt} className={mergedImageClass} loading="lazy" {...imageProps} />
      <div className={mergedBodyClass}>{children}</div>
    </article>
  )
}
