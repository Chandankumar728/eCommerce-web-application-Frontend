"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Toaster, toast } from "sonner";

const Settings = () => {
  const [user, setUser] = useState({
    name: "Chandan",
    email: "Chandan@example.com",
    password: "",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    theme: "light",
    twoFactorAuth: false,
  });

  const handleSave = () => {
    toast.success("Settings Saved!", {
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <Toaster position="top-right" />
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* User Profile Settings */}
      <Card>
        <CardHeader>
          {/* <CardTitle>Profile Settings</CardTitle> */}
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
          </div>
          <div>
            <Label>New Password</Label>
            <Input type="password" placeholder="Enter new password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
          </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Email Notifications</Label>
            <Switch checked={user.notifications.email} onCheckedChange={(val) => setUser({ ...user, notifications: { ...user.notifications, email: val } })} />
          </div>
          <div className="flex items-center justify-between">
            <Label>SMS Notifications</Label>
            <Switch checked={user.notifications.sms} onCheckedChange={(val) => setUser({ ...user, notifications: { ...user.notifications, sms: val } })} />
          </div>
          <div className="flex items-center justify-between">
            <Label>Push Notifications</Label>
            <Switch checked={user.notifications.push} onCheckedChange={(val) => setUser({ ...user, notifications: { ...user.notifications, push: val } })} />
          </div>
        </CardContent>
      </Card>

      {/* Theme Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Theme</Label>
          <Select value={user.theme} onValueChange={(val) => setUser({ ...user, theme: val })}>
            <SelectTrigger>
              <SelectValue placeholder="Select Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light Mode</SelectItem>
              <SelectItem value="dark">Dark Mode</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <Label>Two-Factor Authentication</Label>
          <Switch checked={user.twoFactorAuth} onCheckedChange={(val) => setUser({ ...user, twoFactorAuth: val })} />
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button className="w-full" onClick={handleSave}>
        Save Changes
      </Button>
    </div>
  );
};

export default Settings;
