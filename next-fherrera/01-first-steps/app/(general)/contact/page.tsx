import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Contact Description',
 keywords: ['Contacto', 'direccion']
};

export default function ContactPage() {
    return (
      <>
        <span className="text-7xl">Contact Page</span>
      </>
    );
  }
  