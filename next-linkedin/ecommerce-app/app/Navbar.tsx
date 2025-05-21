import Link from "next/link";

export default function Navbar () {
  return (
    <nav className="w-full sticky top-0 z-10 flex justify-evenly py-4 bg-gray-600">
      <Link href="/products">Products</Link>
      <Link href="/cart">Shopping Cart</Link>
      <Link href="/checkout">Checkout</Link>
    </nav>
  )
}