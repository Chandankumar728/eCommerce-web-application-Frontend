"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Reports = () => {
  const reportSummary = [
    { title: "Total Reports", value: 120 },
    { title: "Pending Reports", value: 15 },
    { title: "Completed Reports", value: 105 },
  ];

  const pieData = [
    { name: "Pending", value: 15, color: "#facc15" },
    { name: "Completed", value: 105, color: "#22c55e" },
  ];

  const lineData = [
    { month: "Jan", reports: 10 },
    { month: "Feb", reports: 15 },
    { month: "Mar", reports: 25 },
    { month: "Apr", reports: 30 },
    { month: "May", reports: 50 },
  ];

  const reports = [
    { id: 1, name: "Monthly Sales", status: "Completed", date: "2024-03-01" },
    { id: 2, name: "Customer Feedback", status: "Pending", date: "2024-03-05" },
    { id: 3, name: "Inventory Status", status: "Completed", date: "2024-03-10" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Reports</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reportSummary.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Report Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Reports Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="reports" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Reports Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Report Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.id}</TableCell>
                  <TableCell>{report.name}</TableCell>
                  <TableCell className={report.status === "Completed" ? "text-green-500" : "text-yellow-500"}>
                    {report.status}
                  </TableCell>
                  <TableCell>{report.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
