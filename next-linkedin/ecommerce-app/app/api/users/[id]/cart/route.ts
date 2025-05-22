import { products } from "@/app/product-data";
import { NextRequest } from "next/server";

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
  '1': ['123', '234'],
  '2': ['345', '456'],
  '3': ['234'],
}

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {

  const userId = params.id;
  const productIds = carts[userId];

  const cartProducts = productIds.map( id => products.find( p => p.id === id));

  if (!productIds) {
    return new Response("User not found.", {
      status: 404,
    });
  }

  if (cartProducts.length === 0 ) {
    return new Response("User has no products.", {
      status: 404,
    });
  }

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
