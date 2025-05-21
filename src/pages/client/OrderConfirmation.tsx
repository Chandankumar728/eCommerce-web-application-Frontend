import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OrderConfirmation() {
  const navigate = useNavigate();

  // Redirect to home after a few seconds if needed
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate("/"); // Uncomment if you want to redirect to home
    }, 8000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="max-w-xl mx-auto my-20 px-4">
      <Card>
        <CardContent className="p-8 text-center space-y-6">
          <h2 className="text-2xl font-bold text-green-600">🎉 Order Confirmed!</h2>
          <p className="text-gray-600">
            Thank you for your purchase. We’ve received your order and it’s being processed.
          </p>
          <p className="text-sm text-gray-500">
            You’ll receive a confirmation email shortly with your order details.
          </p>
          {/* Optional: Show fake order ID */}
          <p className="text-md font-medium">Order ID: <span className="font-mono">#ORD-{Math.floor(100000 + Math.random() * 900000)}</span></p>
          <Button onClick={() => navigate("/client")}>Back to Home</Button>
        </CardContent>
      </Card>
    </div>
  );
}
