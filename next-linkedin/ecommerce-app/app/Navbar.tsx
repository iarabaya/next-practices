import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-gray-600 shadow-md">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="/products" className="pb-2 hover:border-b-2 transition duration-200">Products</Link>
          </li>
          <li>
            <Link href="/cart" className="pb-2 hover:border-b-2 transition duration-200">Cart</Link>
          </li>
          <li>
            <Link href="/checkout" className="pb-2 hover:border-b-2 transition duration-200">Check Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
