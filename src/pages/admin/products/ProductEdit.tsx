"use client";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    discount: "",
    stock: "",
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5555/api/products/admin/getproducts/${id}`);
        const data = await res.json();
        if (data.status === "success") {
          const { title, price, category, discount, stock, image } = data.product;
          setForm({ title, price, category, discount, stock, image });
        } else {
          toast.error("Product not found");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5555/api/products/admin/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.status === "success") {
        toast.success("Product updated successfully!");
        navigate(-1);
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Something went wrong");
    }
  };

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

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold mb-4">Edit Product</h2>

      {/* Product Image Preview */}
      {form.image && (
        <div className="mb-4">
          <img
            src={form.image}
            alt="Product"
            className="w-full h-64 object-cover rounded-md border"
          />
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input name="title" value={form.title} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="price">Price</Label>
          <Input type="number" name="price" value={form.price} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Input name="category" value={form.category} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="discount">Discount (%)</Label>
          <Input type="number" name="discount" value={form.discount} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="stock">Stock</Label>
          <Input type="number" name="stock" value={form.stock} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input name="image" value={form.image} onChange={handleChange} required />
        </div>

        <div className="flex justify-between">
          <Button type="submit">Update Product</Button>
          <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
