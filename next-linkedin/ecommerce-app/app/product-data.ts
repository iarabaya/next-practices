export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: "123",
    name: "Hat",
    imageUrl: "hat.jpg",
    description: "Cheer the team on in style with our unstructured, low crown, six-panel baseball cap made of 100% organic cotton twill. Featuring our original Big Star Collectibles artwork, screen-printed with PVC- and phthalate-free inks. Complete with matching sewn ventilation eyelets, and adjustable fabric closure.",
    price: 29,
  },
  {
    id: "234",
    name: "Mug",
    imageUrl: "mug.jpg",
    description: "Enjoy your morning coffee or tea in the company of your...",
    price: 16,
  },
  {
    id: "456",
    name: "Shirt",
    imageUrl: "shirt.jpg",
    description: "Our t-shirts are made from ring-spun, long-staple organiza...",
    price: 29,
  },
  {
    id: "678",
    name: "Apron",
    imageUrl: "apron.jpg",
    description: "Everyone's a chef in our eco-friendly apron made from 55%...",
    price: 29,
  },
];
