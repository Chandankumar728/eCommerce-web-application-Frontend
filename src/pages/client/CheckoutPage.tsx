import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [address, setAddress] = useState({
    fullName: "",
    email: "",
    phone: "",
    alternatePhone: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    instructions: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Order Placed:", { address, paymentMethod });
    navigate("/client/order-confirmation");
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-4 space-y-8">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Shipping Address</h2>

          {[
            { label: "Full Name", key: "fullName", placeholder: "John Doe" },
            { label: "Email", key: "email", placeholder: "john@example.com" },
            { label: "Phone Number", key: "phone", placeholder: "123-456-7890" },
            { label: "Alternate Phone", key: "alternatePhone", placeholder: "098-765-4321" },
            { label: "Street Address", key: "street", placeholder: "123 Main St" },
            { label: "Apartment/Suite", key: "apartment", placeholder: "Apt 4B" },
            { label: "City", key: "city", placeholder: "New York" },
            { label: "State", key: "state", placeholder: "NY" },
            { label: "Zip Code", key: "zip", placeholder: "10001" },
            { label: "Country", key: "country", placeholder: "USA" },
            { label: "Delivery Instructions", key: "instructions", placeholder: "Leave at door" },
          ].map(({ label, key, placeholder }) => (
            <div key={key} className="space-y-2">
              <Label>{label}</Label>
              <Input
                placeholder={placeholder}
                value={address[key as keyof typeof address]}
                onChange={(e) =>
                  setAddress({ ...address, [key]: e.target.value })
                }
              />
            </div>
          ))}

          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold">Payment Method</h3>
            <RadioGroup
              defaultValue="cod"
              onValueChange={(value) => setPaymentMethod(value)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod">Cash on Delivery</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Credit/Debit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi">UPI</Label>
              </div>
            </RadioGroup>
          </div>

          <Button className="mt-6 w-full" onClick={handleSubmit}>
            Place Order
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
