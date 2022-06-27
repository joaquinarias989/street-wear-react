const FilterProducts = ({ onChange }) => {
  return (
    <div className="col-md-2 d-flex justify-content-end align-items-start">
      <div className="btn-group">
        <button
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-label="Filtrar productos"
        >
          <i className="fa fa-filter"></i>
        </button>
        <div className="dropdown-menu p-4">
          <h5 className="text-center mb-4">¿Qué estás buscando?</h5>
          <input
            className="form__input mt-3"
            type="search"
            placeholder="Producto, Categoría, Color..."
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;