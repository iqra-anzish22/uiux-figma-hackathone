"use client";

import { useEffect, useState } from "react";
import SanityClient from "@sanity/client";
import Image from "next/image";

const sanity = SanityClient({
  projectId: "yfuelo4l", // Replace with your actual project ID
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchItems = async () => {
    try {
      const query = `
        *[_type == "product"]{
          _id,
          title,
          description,
          discountPercentage,
          price,
          "imageUrl": productImage.asset->url,
          tags
        }
      `;
      const data: Product[] = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to the cart!`);
  };

  const truncateDescription = (description: string) => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-4 bg-[#f8f5f1]">
     

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#f8efe2] p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.imageUrl || "/placeholder.png"} // Fallback for missing images
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />

            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>

              <p className="text-slate-700 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">${product.price}</p>

                  {product.discountPercentage > 0 && (
                    <p className="text-start text-green-600">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#f1d6b2] rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="mt-4 w-full py-2 rounded-md bg-[#B88E2F] text-white"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-[#f7eee3] p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-red-400">Cart Summary</h2>

        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-end bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <Image
                  src={item.imageUrl || "/placeholder.png"}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
