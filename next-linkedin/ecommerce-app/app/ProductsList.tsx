"use client";

import Image from "next/image";
import { Product } from "./product-data";
import Link from "next/link";
import { useState } from "react";

export default function ProductsList({
  products,
  initialCartProducts,
}: {
  products: Product[];
  initialCartProducts: Product[];
}) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  const addToCart = async (productId: string) => {
    const response = await fetch("http://localhost:3000/api/users/1/cart", {
      method: "POST",
      body: JSON.stringify({ productId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedCartProducts = await response.json();
    setCartProducts(updatedCartProducts);
  };

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

  const itemIsInCart = (productId: string) => {
    return cartProducts.some((cp) => cp.id === productId);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Link
          key={product.id}
          href={"/products/" + product.id}
          className="bg-white rounded-lg shadow-md p-4 shadow-cyan-500/50 hover:shadow-lg transition duration-300"
        >
          <div className="flex justify-center mb-4 h-32 relative">
            <Image
              src={"/" + product.imageUrl}
              alt="Product image"
              width={150}
              height={100}
              className="object-contain rounded-md"
            />
          </div>

          <h2 className="text-xl text-gray-900 font-semibold mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-3">$ {product.price}</p>
          {itemIsInCart(product.id) ? (
            <button
              className="bg-red-800 p-2 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                // console.log("Removing from cart... (Not implemented)")
                removeFromCart(product.id)
              }}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="bg-green-700 p-2 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                addToCart(product.id);
              }}
            >
              Add to Cart
            </button>
          )}
        </Link>
      ))}
    </div>
  );
}
