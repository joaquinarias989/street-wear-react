import ItemCount from "./ItemCount";
import sizes from ".././img/medidas.svg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ item }) => {
  const [continueBuy, setContinueBuy] = useState(true);
  const [sizeSelected, setSizeSelected] = useState(Array.prototype.indexOf());
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    if (sizeSelected === -1) {
      return Swal.fire({
        icon: "error",
        title: "No seleccionaste el talle che!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3000,
        timerProgressBar: true,
      });
    }
    addToCart(item, quantity, sizeSelected);
    setContinueBuy(!continueBuy);
  };

  const askContinue = () => {
    setContinueBuy(!continueBuy);
  };

  return (
    <>
      <div className="product__header row justify-content-between align-items-end">
        <div className="col-12">
          <h2>$ {item.price}</h2>
        </div>
        <div className="product__discount col-md-6">
          <h3 className="mt-3 mb-2">
            <i className="fa fa-credit-card">
              <span></span>
            </i>
            <span className="text-accent"> 3 cuotas sin interés </span>
            de $ {(item.price / 3).toFixed(2)}
          </h3>
          <h3>
            <i className="fa fa-money-bill-alt">
              <span></span>
            </i>
            <span className="text-accent"> 15% de descuento </span>
            pagando en efectivo
          </h3>
        </div>
        <div className="product__ship col-md-6 d-flex justify-content-end">
          <input type="number" placeholder="Cód. Postal" />
          <button aria-label="Calcular envio">
            <i className="fa fa-truck"></i>
          </button>
        </div>
      </div>

      <div className="product__main row justify-content-between w-100">
        <div className="product__slide col-md-6 col-lg-5 d-flex justify-content-center mb-4 mb-md-0 pe-md-5 pe-lg-0">
          <div
            id="carouselProductImg"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={item.img}
                  className="d-block w-100"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={item.img}
                  className="d-block w-100"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={item.img}
                  className="d-block w-100"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselProductImg"
              data-bs-slide="prev"
              aria-label="Anterior"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselProductImg"
              data-bs-slide="next"
              aria-label="Siguiente"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="product__details col-md-6 flex-column">
          <p className="product__description">{item.description}</p>
          <div className="product__preferences d-flex justify-content-between align-items-center mt-3 flex-wrap flex-md-nowrap">
            <select name="color" className="w-100" defaultValue={item.color}>
              <option value={"Color"} disabled>
                Color
              </option>
              <option value={item.color}>{item.color}</option>;
            </select>
            <select
              name="talle"
              className="w-100 ms-md-3 mt-3 mt-md-0"
              defaultValue={"Talle"}
              onChange={(e) =>
                setSizeSelected(item.size.indexOf(e.target.value))
              }
            >
              <option value={"Talle"} disabled>
                Talle
              </option>
              {item.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="product__sizes my-4">
            <img
              src={sizes}
              alt="Tabla de medidas de cada talle del producto"
              className="img-fluid"
              loading="lazy"
            />
          </div>
          {!continueBuy ? (
            <div className="d-flex">
              <button
                className="btn-secondary w-25"
                aria-label="Continuar comprando"
                onClick={askContinue}
              >
                <i className="fa fa-paintbrush"></i> Seguir comprando
              </button>
              <Link to="/Carrito" className="btn-principal w-75">
                <i className="fa fa-cart-plus"></i> Terminar Compra
              </Link>
            </div>
          ) : (
            <ItemCount
              page={"detail"}
              stock={sizeSelected > -1 ? item.stock[sizeSelected] : 1}
              onAdd={onAdd}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
