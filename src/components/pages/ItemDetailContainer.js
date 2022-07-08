import { useContext, useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import Loading from "../Loading";
import { CartContext } from "../../context/cartContext";
import { getProds } from "../../firebase/querys";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState({});
  const [loading, setLoading] = useState(Boolean);
  const { id } = useParams();
  const { updateProdQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getProds(id)
      .then((resp) => {
        console.log(resp.data());
        resp._document
          ? setProd({
              id: resp.id,
              quantity: updateProdQuantity(resp),
              ...resp.data(),
            })
          : navigate("/404");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id, updateProdQuantity, navigate]);

  return (
    <section className="product container" id="product">
      <div className="section__header">
        <h1 className="title-underlined">
          {loading ? "Cargando producto..." : prod.title}
        </h1>

        <ol className="breadcrumb">
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/Productos"}>Productos</NavLink>
          </li>
          <li>
            <NavLink to={"/Productos/Categorias"}>Categorias</NavLink>
          </li>
          <li>
            <NavLink to={`/Productos/Categorias/${prod.category}`}>
              {prod.category}
            </NavLink>
          </li>
          <li>{prod.title}</li>
        </ol>
      </div>
      {loading ? <Loading /> : <ItemDetail key={prod.id} item={prod} />}
    </section>
  );
};

export default ItemDetailContainer;
