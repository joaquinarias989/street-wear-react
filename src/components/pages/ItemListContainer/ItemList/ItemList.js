import Item from "../Item/Item";

function ItemList({ items }) {
  return (
    <div className="products__list d-flex">
      {items.map((prod) => (
        <Item
          key={prod.id}
          title={prod.title}
          price={prod.price}
          img={prod.img}
          stock={prod.stock}
          quantity={prod.quantity}
        />
      ))}
    </div>
  );
}

export default ItemList;
