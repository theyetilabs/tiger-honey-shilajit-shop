
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";

const Index = () => {
  const { cartItems } = useCart();

  const products = [
    {
      id: 1,
      name: "Double Tiger Shilajit",
      price: 99,
      originalPrice: 130,
      image: "/lovable-uploads/f0feca0d-3612-4043-a70f-e4ba6252bfde.png",
      shortDescription: "Authentic Pure Shilajit Resin - 100% pure from pristine mountains"
    },
    {
      id: 2,
      name: "Double Tiger Mad Honey",
      price: 99,
      originalPrice: 130,
      image: "/lovable-uploads/1e652eb3-a10c-45cb-ab43-55a70b5cd2b4.png",
      shortDescription: "Wild Purity from high-altitude regions of Nepal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Double Tiger
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Authentic natural products from pristine mountains. Experience the power of pure Shilajit and wild honey.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Premium Natural Products</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our collection of authentic, high-quality natural supplements sourced from the mountains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Mountain Heritage</h3>
              <p className="text-lg mb-6 text-slate-300">
                Double Tiger sources the finest natural products from pristine mountain regions, 
                ensuring authenticity and purity in every jar. Our commitment to quality and 
                sustainable harvesting practices guarantees you receive nature's most potent offerings.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  100% Authentic & Pure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Sustainably Sourced
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Premium Quality Guaranteed
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 shadow-2xl">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">85+</div>
                    <div className="text-xl">Trace Minerals</div>
                    <div className="text-sm opacity-80 mt-2">In our Shilajit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
