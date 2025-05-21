"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const AutoScroller = ({ products }:any) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 2; // Adjust speed
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0; // Reset scrolling
        }
        scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const interval = setInterval(scroll, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-6xl py-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <motion.div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap scrollbar-hide flex px-6 space-x-6"
        whileHover={{ scale: 1.02 }}
      >
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="basis-auto">
                <Card className="w-[280px] h-56 shadow-lg rounded-xl">
                  <CardContent className="h-full flex items-center justify-center p-2">
                    <img
                      src={product.image}
                      alt="Product"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default AutoScroller;
