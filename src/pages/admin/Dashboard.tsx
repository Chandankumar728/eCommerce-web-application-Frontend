import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import { useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "Editor" },
    { id: 3, name: "Alice Johnson", role: "Viewer" },
  ]);

  const pieData = [
    { name: "Admins", value: 5, color: "#8884d8" },
    { name: "Editors", value: 10, color: "#82ca9d" },
    { name: "Viewers", value: 20, color: "#ffc658" },
  ];

  const lineData = [
    { month: "Jan", users: 10 },
    { month: "Feb", users: 15 },
    { month: "Mar", users: 25 },
    { month: "Apr", users: 30 },
  ];



  const data = [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 1500 },
    { name: "Mar", total: 1800 },
    { name: "Apr", total: 2200 },
    { name: "May", total: 2500 },
    { name: "Jun", total: 2800 },
  ]



  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      


      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,345</div>
          <p className="text-xs text-muted-foreground">+20% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8,765</div>
          <p className="text-xs text-muted-foreground">+15% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Sign-ups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-xs text-muted-foreground">+10% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">User Retention</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">85%</div>
          <p className="text-xs text-muted-foreground">+5% from last month</p>
        </CardContent>
      </Card>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>User Growth</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div> */}


          {/* =================================================== */}
      

      
      {/* Charts Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
        <Card>
          <CardHeader>
            <CardTitle>User Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

       
        <Card>
          <CardHeader>
            <CardTitle>Monthly Growth</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div> */}
      
      {/* Calendar */}
      {/* <div className="bg-white shadow-md rounded-lg p-4">
        <Calendar />
      </div> */}
      
      {/* Action Button */}
      <Button>Add User</Button>
    </div>
  );
};

export default Dashboard;
