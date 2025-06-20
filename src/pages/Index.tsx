
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Shield, Mountain, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
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
      
      {/* Hero Section with Authentic Image */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/41a9dee9-9580-4be0-8621-0591c74c1295.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            DoubleTiger.com
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Honey, Herbs & Shilajit - Authentic natural products from pristine mountains
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-amber-600 mb-3" />
              <h3 className="font-semibold text-slate-800">100% Pure</h3>
              <p className="text-sm text-slate-600">Authentic & Tested</p>
            </div>
            <div className="flex flex-col items-center">
              <Mountain className="w-12 h-12 text-amber-600 mb-3" />
              <h3 className="font-semibold text-slate-800">Mountain Sourced</h3>
              <p className="text-sm text-slate-600">Pristine Himalayas</p>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="w-12 h-12 text-amber-600 mb-3" />
              <h3 className="font-semibold text-slate-800">Natural</h3>
              <p className="text-sm text-slate-600">No Additives</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-amber-600 mb-3" />
              <h3 className="font-semibold text-slate-800">Premium Quality</h3>
              <p className="text-sm text-slate-600">Hand Selected</p>
            </div>
          </div>
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

      {/* Authentic Sourcing Section with Image */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-100 to-amber-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/867324c3-4bf4-407c-b9f3-8b26ad82eb37.png" 
                alt="Authentic mountain sourcing of Shilajit"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-800">Authentic Mountain Heritage</h3>
              <p className="text-lg mb-6 text-slate-600">
                Our products are sourced directly from the pristine mountains of Nepal and the Himalayas, 
                where traditional harvesting methods have been preserved for generations. Every jar contains 
                the pure essence of these sacred mountains.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-slate-800">Traditional Harvesting</h4>
                    <p className="text-slate-600 text-sm">Methods passed down through generations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-slate-800">High Altitude Purity</h4>
                    <p className="text-slate-600 text-sm">Sourced from 3000+ meters elevation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-slate-800">Sustainable Practices</h4>
                    <p className="text-slate-600 text-sm">Supporting local communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Choose Double Tiger?</h3>
              <p className="text-lg mb-6 text-slate-300">
                Double Tiger is committed to bringing you the finest natural products from the world's 
                most pristine environments. Our dedication to quality, authenticity, and sustainable 
                sourcing ensures you receive nature's most potent offerings.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500">85+</div>
                  <div className="text-sm text-slate-300">Trace Minerals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500">100%</div>
                  <div className="text-sm text-slate-300">Pure & Natural</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500">3000+</div>
                  <div className="text-sm text-slate-300">Meters Altitude</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500">24/7</div>
                  <div className="text-sm text-slate-300">Customer Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 shadow-2xl">
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <div className="text-6xl mb-4">🏔️</div>
                    <div className="text-2xl font-bold mb-2">Himalayan</div>
                    <div className="text-lg">Heritage</div>
                    <div className="text-sm opacity-80 mt-2">Since Ancient Times</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">What Our Customers Say</h2>
            <div className="flex justify-center mb-6">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-6 h-6 text-amber-500 fill-current" />
              ))}
              <span className="ml-2 text-slate-600">4.9/5 from 500+ reviews</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">"The quality of Double Tiger Shilajit is exceptional. I've tried many brands, but this one truly stands out."</p>
              <div className="font-semibold text-slate-800">- Sarah M.</div>
            </Card>
            
            <Card className="p-6">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">"Amazing energy boost and mental clarity. The mad honey is also incredible - very unique taste!"</p>
              <div className="font-semibold text-slate-800">- Michael R.</div>
            </Card>
            
            <Card className="p-6">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">"Fast shipping, excellent packaging, and authentic products. Highly recommend Double Tiger!"</p>
              <div className="font-semibold text-slate-800">- Jennifer L.</div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
