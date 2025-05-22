import Link from "next/link";
import ShoppingCartList from "./ShoppingCartList";

export default async function CartPage() {
  // "http://localhost:3000/api/users/" + params.id + "/cart"

  const response = await fetch("http://localhost:3000/api/users/1/cart", {
    cache: "no-cache",
  });
  const cartProducts = await response.json();

  return <ShoppingCartList initialCartProducts={cartProducts} />;
}
