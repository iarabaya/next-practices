import { products } from "@/app/product-data";
import { NextRequest } from "next/server";

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
  "1": ["123", "234"],
  "2": ["345", "456"],
  "3": ["234"],
};

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const productIds = carts[userId];

  if (productIds === undefined) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const cartProducts = productIds.map((id) =>
    products.find((p) => p.id === id)
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

type CartBody = { productId: string };

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  //if there is no user creates array, else adds the product

  carts[userId] = carts[userId] ? carts[userId].concat(productId) : [productId];

  const cartProducts = carts[userId].map((id) =>
    products.find((p) => p.id === id)
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // return new Response(`Product ${body.productId} added correctly.`, {
  //   status: 200,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  //if there is no user
  // if (carts[userId] === undefined) {
  //   return new Response("User not found", {
  //     status: 404,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }
  
  carts[userId] = carts[userId] ? carts[userId].filter( id => id !== productId) : [] ;

  const cartProducts = carts[userId].map((id) =>
    products.find((p) => p.id === id)
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
