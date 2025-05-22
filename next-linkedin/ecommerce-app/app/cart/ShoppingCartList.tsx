"use client"
import { useState } from "react";
import Link from "next/link";
import { Product } from "../product-data";

export default function ShoppingCartList({ initialCartProducts } : { initialCartProducts: Product[]}) {
  const [cartProducts] = useState(initialCartProducts);
  
  const totalPrice = cartProducts.reduce((total, p) => total + p.price, 0);
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl my-8 font-bold">Shopping Cart</h1>
      <div className="flex gap-3 py-3">
        {cartProducts.map((product) => (
          <Link
            key={product.id}
            href={"/products/" + product.id}
            className=" border-2 border-solid p-3"
          >
            <h3>{product.name}</h3>
            <p>$ {product.price}</p>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-semibold my-3">Total: ${totalPrice}</h2>
    </div>
  );
}
