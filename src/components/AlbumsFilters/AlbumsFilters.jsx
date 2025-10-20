import { FilterButton } from '@components/common/FilterButton/FilterButton'

export function AlbumsFilters({
  refEdicion,
  refPrecio,
  edicionSeleccionada,
  ordenPrecio,
  filtroEspecial,
  menuEdicionVisible,
  menuPrecioVisible,
  onToggleEdicionMenu,
  onTogglePrecioMenu,
  onSeleccionarEdicion,
  onSeleccionarPrecio,
  onAlternarFiltroEspecial,
}) {
  return (
    <section className="filtros">
      <div className="contenedor-filtros">
        <div className="filtro-desplegable" ref={refEdicion}>
          <FilterButton
            className="boton-desplegable"
            isActive={Boolean(edicionSeleccionada)}
            onClick={onToggleEdicionMenu}
          >
            Edición
          </FilterButton>
          <ul className={`menu-desplegable${menuEdicionVisible ? ' mostrar' : ''}`}>
            <li>
              <button type="button" onClick={() => onSeleccionarEdicion('Estandar')} data-edicion="Estandar">
                Estándar
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onSeleccionarEdicion('Limitada')} data-edicion="Limitada">
                Limitada
              </button>
            </li>
          </ul>
        </div>

        <div className="filtro-desplegable" ref={refPrecio}>
          <FilterButton
            className="boton-desplegable-precio"
            isActive={Boolean(ordenPrecio)}
            onClick={onTogglePrecioMenu}
          >
            Precio
          </FilterButton>
          <ul className={`menu-desplegable-precio${menuPrecioVisible ? ' mostrar' : ''}`}>
            <li>
              <button type="button" onClick={() => onSeleccionarPrecio('asc')} data-precio="asc">
                Menor a Mayor
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onSeleccionarPrecio('desc')} data-precio="desc">
                Mayor a Menor
              </button>
            </li>
          </ul>
        </div>

        <FilterButton
          isActive={filtroEspecial === 'Promocion'}
          onClick={() => onAlternarFiltroEspecial('Promocion')}
          data-filtro="Promocion"
        >
          Promoción
        </FilterButton>

        <FilterButton
          isActive={filtroEspecial === 'Preventa'}
          onClick={() => onAlternarFiltroEspecial('Preventa')}
          data-filtro="Preventa"
        >
          Preventa
        </FilterButton>
      </div>
    </section>
  )
}
