"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const API_URL = "http://localhost:5555/api/categories/admin/";

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [editingId, setEditingId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(API_URL+`getallcategory`);
      setCategories(res.data);
    } catch (err:any) {
      console.error("Fetch error:", err.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL+`updatecategory`}/${editingId}`, formData);
      } else {
        await axios.post(API_URL+`createcategory`, formData);
      }
      setFormData({ name: "", description: "" });
      setEditingId(null);
      fetchCategories();
      setIsDialogOpen(false);
    } catch (err:any) {
      console.error("Submit error:", err.message);
    }
  };

  const handleEdit = (category:any) => {
    setFormData({ name: category.name, description: category.description });
    setEditingId(category._id);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id:any) => {
    try {
      await axios.delete(`${API_URL+'deletecategory'}/${id}`);
      fetchCategories();
    } catch (err:any) {
      console.error("Delete error:", err.message);
    }
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Category Management</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Add Category</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingId ? "Update Category" : "Add New Category"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Category Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <Textarea
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                />
                <Button type="submit" className="w-full">
                  {editingId ? "Update" : "Create"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((cat:any) => (
                <TableRow key={cat._id}>
                  <TableCell>{cat.name}</TableCell>
                  <TableCell>{cat.description}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => handleEdit(cat)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(cat._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryManager;
