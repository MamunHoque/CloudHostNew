import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Invoice {
  id: string;
  date: string;
  dueDate: string;
  amount: string;
  status: "Unpaid" | "Paid" | "Cancelled";
}

const InvoicesPage = () => {
  const [activeTab, setActiveTab] = useState("unpaid");
  const [entriesPerPage, setEntriesPerPage] = useState("10");

  const tabs = [
    { id: "unpaid", label: "Unpaid Invoices" },
    { id: "paid", label: "Paid Invoices" },
    { id: "cancelled", label: "Cancelled Invoices" },
    { id: "all", label: "All Invoices" },
  ];

  const demoInvoices: Invoice[] = [
    {
      id: "8103",
      date: "Monday, December 16th, 2024",
      dueDate: "2024-12-23",
      amount: "5.00 USD",
      status: "Unpaid",
    },
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
      <div className="space-y-6">
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Show</span>
            <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-gray-500">entries</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Search:</span>
            <Input type="search" placeholder="" className="max-w-[200px]" />
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice #</TableHead>
              <TableHead>Invoice Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {demoInvoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.dueDate}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    {invoice.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="default"
                    className="bg-[#2C3E50] hover:bg-[#2C3E50]/90"
                  >
                    View Invoice
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing 1 to 1 of 1 entries
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button variant="outline" className="bg-[#2C3E50] text-white">
              1
            </Button>
            <Button variant="outline" disabled>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicesPage;
