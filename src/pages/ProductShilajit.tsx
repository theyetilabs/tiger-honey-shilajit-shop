
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { useCart } from "@/contexts/CartContext";

const ProductShilajit = () => {
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "Double Tiger Shilajit",
    price: 99,
    originalPrice: 130,
    image: "/lovable-uploads/f0feca0d-3612-4043-a70f-e4ba6252bfde.png"
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full rounded-2xl shadow-xl"
            />
            <Badge className="absolute top-4 left-4 bg-red-500 text-white text-lg px-3 py-1">
              {discount}% OFF
            </Badge>
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-4">{product.name}</h1>
              <p className="text-xl text-slate-600">Authentic Pure Shilajit Resin</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-amber-600">${product.price}</span>
              <span className="text-2xl text-slate-400 line-through">${product.originalPrice}</span>
              <Badge variant="destructive" className="text-lg px-3 py-1">Save ${product.originalPrice - product.price}</Badge>
            </div>
            
            <Button 
              onClick={handleAddToCart}
              size="lg" 
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <div className="space-y-4 text-slate-600">
                  <p>
                    Double Tiger Shilajit is 100% pure Shilajit Resin, sourced directly from the pristine mountains. 
                    We guarantee its authenticity and purity.
                  </p>
                  <p>
                    This powerful natural substance is packed with over 85 trace minerals and fulvic acid, 
                    making it a potent supplement for your overall well-being.
                  </p>
                  
                  <h4 className="font-semibold text-slate-800 mt-6 mb-3">Regular use of Double Tiger Shilajit can help:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Boost your stamina and energy levels, helping you feel more vibrant throughout the day
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Strengthen your immune system, providing better protection against everyday challenges
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Reduce stress and anxiety, promoting a sense of calm and focus
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Enhance cognitive function, supporting mental clarity and memory
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Improve nutrient absorption, ensuring your body gets the most out of the food you eat
                    </li>
                  </ul>
                  
                  <p className="mt-6 font-medium text-slate-800">
                    We are committed to providing you with the highest quality, authentic Shilajit. 
                    Experience the difference with Double Tiger Shilajit and unlock your natural vitality!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShilajit;
