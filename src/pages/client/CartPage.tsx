import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummyCart = [
  { id: 1, name: "Apple iPhone 14", price: 999, quantity: 1, image: "https://baccabucci.com/cdn/shop/products/15_45a10698-3148-4359-ab89-a8fdd3b0633e_800x.jpg?v=1640074238" },
  { id: 2, name: "Samsung Galaxy S23", price: 899, quantity: 2, image: "https://baccabucci.com/cdn/shop/products/15_45a10698-3148-4359-ab89-a8fdd3b0633e_800x.jpg?v=1640074238" },
  { id: 3, name: "Google Pixel 7", price: 799, quantity: 1, image: "https://baccabucci.com/cdn/shop/products/15_45a10698-3148-4359-ab89-a8fdd3b0633e_800x.jpg?v=1640074238" }
];

export default function CartPage() {

  const navigate = useNavigate(); // 


  const [cart, setCart] = useState(dummyCart);

  const updateQuantity = (id: number, change: number) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);


  const handleCheckout = () => {
    // You can also pass state here if needed like navigate("/checkout", { state: { cart } });
    navigate("/client/checkout");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <Card key={item.id} className="flex flex-row items-center p-4 gap-4">
            <img src={item.image} alt={item.name} className="w-32 h-32 rounded" />
            <CardContent className="flex-grow">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price} x {item.quantity}</p>
              <div className="flex gap-2 mt-2">
                <Button size="sm" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                <span className="px-3">{item.quantity}</span>
                <Button size="sm" onClick={() => updateQuantity(item.id, 1)}>+</Button>
              </div>
            </CardContent>
            <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
              <Trash2 size={18} />
            </Button>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex justify-between text-lg font-bold">
        <span>Total:</span>
        <span>${totalPrice}</span>
      </div>
      <Button className="w-full mt-4" onClick={handleCheckout}>Proceed to Checkout</Button>
    </div>
  );
}
