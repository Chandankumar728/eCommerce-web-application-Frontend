"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Eye, Pencil, Trash, Plus } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; // Import ShadCN UI components



const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);


  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    image: "",
    title: "",
    price: "",
    category: "",
    discount: "",
    stock: "",
    date: "",
    rating: "",
  });


  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5555/api/products/user/getproducts");
      const data = await res.json();
      if (data.status === "success") {
        setProducts(data.products);
      }
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {

    fetchProducts();
  }, []);



  useEffect(() => {
    // Replace this URL with your actual API endpoint
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5555/api/categories/admin/getallcategory");
        const data = await res.json();
        setCategories(data); // Assuming the response is an array of strings or objects with "name"
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);




  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    if (sortKey) {
      filtered = filtered.sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }
    return filtered;
  }, [products, search, sortKey, sortOrder]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = key => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };


  const handleView = (id:any) => {
    console.log("view")
   
    navigate(`/admin/products/view/${id}`)
    // Open a modal or route to /product/:id
  };

  const handleEdit = (id:any) => {

    navigate(`/admin/products/edit/${id}`)
    // toast(product.title + " selected for editing (modal or page)");
    // Open an edit modal or navigate to edit page
  };

  const handleDelete = async (id:any) => {
    try {
      const res = await fetch(`http://localhost:5555/api/products/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.status === "success") {
        toast.success("Product deleted");
        fetchProducts(); // Refresh product list
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      toast.error("Server error during delete");
    }
  };

  const handleAddProduct = async() => {
    toast("Redirect to Add Product form or open a modal");
    try {
      const res = await fetch("http://localhost:5555/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();

      if (data.status === "success") {
        toast.success("Product added successfully!");
        setIsAddModalOpen(false);
        setNewProduct({
          image: "",
          title: "",
          price: "",
          category: "",
          discount: "",
          stock: "",
          date: "",
          rating: "",
        });
        fetchProducts();
      } else {
        toast.error(data.message || "Failed to add product");
      }
    } catch (err) {
      toast.error("Server error while adding product");
    }
  };





  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Report</h1>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2 w-4 h-4" />
          Add Product
        </Button>
      </div>

      <Input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md"
      />

      <div className="overflow-auto rounded-lg shadow-md border">
        <Table>
          <TableCaption>A list of available products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead onClick={() => handleSort("title")} className="cursor-pointer">Title</TableHead>
              <TableHead onClick={() => handleSort("price")} className="cursor-pointer">Price</TableHead>
              <TableHead onClick={() => handleSort("category")} className="cursor-pointer">Category</TableHead>
              <TableHead>Discount</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading
              ? Array.from({ length: itemsPerPage }).map((_, i) => (
                  <TableRow key={i}>
                    {Array.from({ length: 9 }).map((_, j) => (
                      <TableCell key={j}>
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : paginatedProducts.map((product:any) => (
                  <TableRow key={product._id}>
                    <TableCell>
                      <img src={product.image} alt={product.title} className="w-12 h-12 object-cover rounded" />
                    </TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>
                      <Badge>{product.category}</Badge>
                    </TableCell>
                    <TableCell>{product.discount}%</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product?.createdAt}</TableCell>
                    <TableCell>{product.rating}</TableCell>
                    <TableCell className="space-x-2">
                      <Button size="sm" variant="outline"  onClick={() => handleView(product._id)}><Eye size={16} /></Button>
                      <Button size="sm" variant="outline" onClick={() => handleEdit(product._id)} ><Pencil size={16} /></Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(product._id)}><Trash size={16} /></Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <Button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>
          <ChevronLeft size={16} /> Prev
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>
          Next <ChevronRight size={16} />
        </Button>
      </div>




   {/* Add Product Modal */}
<Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add New Product</DialogTitle>
    </DialogHeader>
    <div className="space-y-4">
      <div>
        <Label>Image URL</Label>
        <Input
          required
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
      </div>
      <div>
        <Label>Title</Label>
        <Input
          required
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
        />
      </div>
      <div>
        <Label>Price</Label>
        <Input
          required
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
      </div>
      {/* <div>
        <Label>Category</Label>
        <Input
          required
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
      </div> */}


<div className="w-full">
      <Label className="mb-2 block">Category</Label>
      <Select
        value={newProduct.category}
        onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}
        required
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>

        <SelectContent>
  {categories.map((category:any) => (
    <SelectItem
      key={category._id}
      value={category.name}
    >
      {category.name}
    </SelectItem>
  ))}
</SelectContent>
      </Select>
    </div>

    
      <div>
        <Label>Discount (%)</Label>
        <Input
          required
          type="number"
          value={newProduct.discount}
          onChange={(e) => setNewProduct({ ...newProduct, discount: e.target.value })}
        />
      </div>
      <div>
        <Label>Stock</Label>
        <Input
          required
          type="number"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
        />
      </div>
      <div>
        <Label>Date</Label>
        <Input
          required
          type="date"
          value={newProduct.date}
          onChange={(e) => setNewProduct({ ...newProduct, date: e.target.value })}
        />
      </div>
      <div>
        <Label>Rating (0-5)</Label>
        <Input
          required
          type="number"
          step="0.1"
          max={5}
          min={0}
          value={newProduct.rating}
          onChange={(e) => setNewProduct({ ...newProduct, rating: e.target.value })}
        />
      </div>
      <div>
        <Label>Description</Label>
        <Textarea
          required
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
      </div>

      <Button className="w-full" onClick={handleAddProduct}>
        Save Product
      </Button>
    </div>
  </DialogContent>
</Dialog>


    </div>
  );
};

export default Products;