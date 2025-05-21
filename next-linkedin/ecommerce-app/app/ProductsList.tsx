import Image from "next/image";
import { Product } from "./product-data";
import Link from "next/link";

export default function ProductsList({ products }: { products: Product[] }) {
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
          
          <h2 className="text-xl text-gray-900 font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600">$ {product.price}</p>
 
        </Link>
      ))}
    </div>
  );
}
