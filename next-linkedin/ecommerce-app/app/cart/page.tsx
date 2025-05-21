"use client";
import { useState } from "react";
import { products } from "../product-data";
import Link from "next/link";

export default function CartPage() {
  const [cartIds, setCartIds] = useState(["123", "234"]);

  const cartProducts = cartIds.map((id) => products.find((p) => p.id === id)!);
  const totalPrice = cartProducts.reduce((total, p) => total + p.price, 0);
  return (
    <>
      <h1>Shopping Cart</h1>
      <div className="flex gap-3 py-3">
        {cartProducts.map((product) => (
          <Link
            key={product.id}
            href={"/products/" + product.id}
            className=" border-2 border-solid p-3"
          >
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
      <div>
        <h2>Total: ${totalPrice}</h2>
      </div>
    </>
  );
}
