"use client";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5555/api/products/admin/getproducts/${id}`);
        const data = await res.json();
        if (data.status === "success") {
          setProduct(data.product);
        }
      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 space-y-4">
        <Skeleton className="h-8 w-[300px]" />
        <Skeleton className="h-60 w-full" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-6 w-1/4" />
      </div>
    );
  }

  if (!product) {
    return <div className="p-6 text-red-500">Product not found</div>;
  }

  return (
    <div className="p-6 space-y-6">

        {/* Back Button */}
      <Button variant="outline" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <h1 className="text-3xl font-bold">Product Details</h1>

      <Card className="flex flex-col md:flex-row gap-6 p-4 shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-xl shadow w-[300px] h-[300px] object-cover"
        />

        <CardContent className="space-y-3">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-muted-foreground text-sm">Category: <Badge>{product.category}</Badge></p>
          <p className="text-lg font-bold text-green-600">${product.price}</p>
          <p>Discount: <Badge variant="outline">{product.discount}%</Badge></p>
          <p>Stock: <span className="font-medium">{product.stock}</span></p>
          <p>Rating: ⭐ {product.rating}</p>
          <p>Date Added: {new Date(product.dateAdded).toLocaleDateString()}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductView;
