export function OrderAmountSetter({
  decreaseQuantity,
  increaseQuantity,
  quantity,
}) {
  return (
    <div className="menu-item-quantity">
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
}
