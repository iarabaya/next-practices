"use client";
import { useState } from "react";
import Link from "next/link";
import { Product } from "../product-data";

export default function ShoppingCartList({
  initialCartProducts,
}: {
  initialCartProducts: Product[];
}) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  const removeFromCart = async (productId: string) => {
    const response = await fetch("http://localhost:3000/api/users/1/cart", {
      method: "DELETE",
      body: JSON.stringify({ productId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedCartProducts = await response.json();
    setCartProducts(updatedCartProducts);
  };

  const totalPrice = cartProducts.reduce((total, p) => total + p.price, 0);
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl my-8 font-bold">Shopping Cart</h1>
      <div className="flex gap-3 py-3">
        {cartProducts.map((product) => (
          <Link
            key={product.id}
            href={"/products/" + product.id}
            className=" border-2 border-solid p-3 rounded-lg flex flex-col items-center"
          >
            <h3 className="text-2xl font-semibold">{product.name}</h3>
            <p className="mb-3">$ {product.price}</p>
            <button
              className="bg-red-800 p-2 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                // console.log("Removing from cart... (Not implemented)")
                removeFromCart(product.id);
              }}
            >
              Remove from Cart
            </button>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-semibold my-3">Total: ${totalPrice}</h2>
    </div>
  );
}
