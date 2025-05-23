import { products } from "@/app/product-data";
import { NextRequest } from "next/server";
import { connectToDb } from "@/app/api/db";

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
  "1": ["123", "234", "456"],
  "2": ["345", "456"],
  "3": ["234"],
};

type Params = {
  id: string;
};
//old
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

// export async function GET(
//   request: NextRequest,
//   { params }: { params: Params }
// ) {
//   const { db } = await connectToDb();

//   const userId = params.id;

//   const userCart = await db.collection("carts").findOne({ userId: userId });

//   if (!userCart === undefined) {
//     return new Response(JSON.stringify([]), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }

//   const cartIds = userCart?.cartIds;
//   const cartProducts = await db
//     .collection("products")
//     .find({ id: { $in: cartIds } })
//     .toArray();

//   return new Response(JSON.stringify(cartProducts), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

type CartBody = { productId: string };

//old
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

// export async function POST(
//   request: NextRequest,
//   { params }: { params: Params }
// ) {
//   const { db } = await connectToDb();

//   const userId = params.id;
//   const body: CartBody = await request.json();
//   const productId = body.productId;

//   //if there is no user creates array, else adds the product
//   const updatedCart = await db
//     .collection("cart")
//     .findOneAndUpdate(
//       { userId },
//       { $push: { cartIds: productId } },
//       { upsert: true, returnDocument: "after" }
//     );

//   const cartProducts = await db
//     .collection("products")
//     .find({ id: { $in: updatedCart.cartIds } })
//     .toArray();

//   return new Response(JSON.stringify(cartProducts), {
//     status: 201,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

//old
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

  carts[userId] = carts[userId]
    ? carts[userId].filter((id) => id !== productId)
    : [];

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

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: Params }
// ) {
//   const { db } = await connectToDb();
//   const userId = params.id;
//   const body: CartBody = await request.json();
//   const productId = body.productId;

//   const updatedCart = await db
//     .collection("carts")
//     .findOneAndUpdate(
//       { userId },
//       { $pull: { cartIds: productId } },
//       { returnDocument: "after" }
//     );

//   if (!updatedCart) {
//     return new Response(JSON.stringify([]), {
//       status: 202,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }

//   const cartProducts = await db
//     .collection("products")
//     .find({ id: { $in: updatedCart.cartIds } })
//     .toArray();

//   return new Response(JSON.stringify(cartProducts), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }
