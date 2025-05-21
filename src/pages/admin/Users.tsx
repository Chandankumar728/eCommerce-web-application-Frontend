"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash, Edit } from "lucide-react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "Editor" },
    { id: 3, name: "Alice Johnson", role: "Viewer" },
  ]);

  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<{ id: number | null; name: string; role: string }>({
    id: null,
    name: "",
    role: "",
  });

  // Open Add/Edit Modal
  const openModal = (user:any = { id: null, name: "", role: "" }) => {
    setEditingUser(user);
    setOpen(true);
  };

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
  };

  // Save User (Add or Edit)
  const saveUser = () => {
    if (editingUser.id) {
      setUsers(users.map((user:any) => (user.id === editingUser.id ? editingUser : user)));
    } else {
      setUsers([...users, { ...editingUser, id: users.length + 1 }]);
    }
    setOpen(false);
  };

  // Delete User
  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Manage Users</h1>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>User List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className="space-x-2">
                    <Button size="sm" onClick={() => openModal(user)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => deleteUser(user.id)}>
                      <Trash className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add User Button */}
      <Button onClick={() => openModal()}>Add User</Button>

      {/* User Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingUser.id ? "Edit User" : "Add User"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input name="name" value={editingUser.name} onChange={handleChange} placeholder="Enter name" />
            </div>
            <div>
              <Label>Role</Label>
              <Input name="role" value={editingUser.role} onChange={handleChange} placeholder="Enter role" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={saveUser}>{editingUser.id ? "Update" : "Save"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Users;
