
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { useCart } from "@/contexts/CartContext";

const ProductMadHoney = () => {
  const { addToCart } = useCart();

  const product = {
    id: 2,
    name: "Double Tiger Mad Honey",
    price: 99,
    originalPrice: 130,
    image: "/lovable-uploads/1e652eb3-a10c-45cb-ab43-55a70b5cd2b4.png"
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
              <p className="text-xl text-slate-600">Experience the Wild Purity</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-amber-600">${product.price}</span>
              <span className="text-2xl text-slate-400 line-through">${product.originalPrice}</span>
              <Badge variant="destructive" className="text-lg px-3 py-1">Save ${product.originalPrice - product.price}</Badge>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-sm text-yellow-800">
                  <p className="font-semibold mb-1">Important Notice</p>
                  <p>Please consume responsibly and consult healthcare professionals before use.</p>
                </div>
              </div>
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
                    Complementing our authentic Shilajit, Double Tiger also brings you pure Mad Honey, 
                    harvested from the wild, high-altitude regions of Nepal. This rare and potent honey 
                    is known for its unique properties and has been traditionally used for centuries.
                  </p>
                  <p>
                    Our Mad Honey is gathered with sustainable practices, ensuring its natural potency and purity. 
                    It's a truly unique product for those seeking a remarkable natural experience.
                  </p>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Please Note:
                    </h4>
                    <p className="text-red-700 text-sm">
                      Mad Honey has specific traditional uses and effects. It is important to consume it 
                      responsibly and in moderation. We recommend researching its properties and consulting 
                      with a healthcare professional before use, especially if you have any pre-existing health conditions.
                    </p>
                  </div>
                  
                  <h4 className="font-semibold text-slate-800 mt-6 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Harvested from wild, high-altitude regions of Nepal
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Sustainably gathered with traditional methods
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Rare and potent with unique properties
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Used traditionally for centuries
                    </li>
                  </ul>
                  
                  <p className="mt-6 font-medium text-slate-800">
                    Are you curious about the specific benefits of Shilajit or the unique aspects of Mad Honey for your lifestyle?
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

export default ProductMadHoney;
