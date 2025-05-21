import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Link } from 'react-router-dom'; 
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Home = () => {
  const products = Array(5).fill({
    image: "https://i.ibb.co/vC3RmnPj/ecommerce.jpg",
    name: "Sample Product",
    description: "High-quality product with advanced features."
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const [title, setTitle] = useState("Innovate with Us");
  const [subtitle, setSubtitle] = useState("Empowering your business with modern solutions.");

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-sky-200 to-purple-200 p-6">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 mb-6">{subtitle}</p>
        <Link to="/client/products">
          <Button className="bg-sky-600 hover:bg-sky-700 text-white text-lg px-6 py-3 rounded-full">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      {/* Carousel Section */}
      <section className="relative max-w-6xl mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Top Picks</h2>
        <div className="relative flex items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 320}px)` }}
              ref={carouselRef}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="min-w-[300px] mx-2 rounded-xl shadow-lg bg-white overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt="Product"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
          >
            <ArrowRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sky-700">
                <ArrowRight className="h-5 w-5" /> Speed & Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Handle tasks swiftly with optimized tools.</CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sky-700">
                <ArrowRight className="h-5 w-5" /> Security First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Your data is protected with top-grade security layers.</CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sky-700">
                <ArrowRight className="h-5 w-5" /> Seamless UX
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Easy navigation and clear layouts for everyone.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Customer Feedback</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["John", "Alice", "Mark"].map((name, idx) => (
            <Card key={idx} className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "{name} says this is one of the most effective platforms they've used."
                </CardDescription>
              </CardContent>
              <CardFooter className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center mt-16">
        <p className="text-xl text-gray-700 mb-6">Take your experience to the next level!</p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full">
          Join Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </div>
  );
};

export default Home;