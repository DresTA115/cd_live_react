const recursosEstaticos = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,svg,mp4,webm,mp3}', {
  eager: true,
  import: 'default',
})

export function obtenerAsset(ruta, { optional = false } = {}) {
  const clave = `../assets/${ruta}`
  const recurso = recursosEstaticos[clave]

  if (!recurso) {
    if (!optional) {
      console.warn(`[assets] No se encontró el recurso: ${ruta}`)
    }
    return ''
  }

  return recurso
}
