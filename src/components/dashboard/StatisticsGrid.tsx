import React from "react";
import { Card } from "@/components/ui/card";
import { Server, Globe, TicketCheck, Receipt } from "lucide-react";

interface StatisticCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  change?: string;
}

const StatisticCard = ({
  icon = <Server />,
  label = "Statistic",
  value = 0,
  change = "+0% from last month",
}: StatisticCardProps) => {
  return (
    <Card className="p-6 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-full bg-teal-100 dark:bg-teal-900">
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{change}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

interface StatisticsGridProps {
  statistics?: {
    activeItems: number;
    domains: number;
    supportTickets: number;
    dueInvoices: number;
  };
}

const StatisticsGrid = ({
  statistics = {
    activeItems: 12,
    domains: 5,
    supportTickets: 3,
    dueInvoices: 2,
  },
}: StatisticsGridProps) => {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatisticCard
          icon={<Server className="text-teal-600 dark:text-teal-400" />}
          label="Active Items"
          value={statistics.activeItems}
          change="+5% from last month"
        />
        <StatisticCard
          icon={<Globe className="text-teal-600 dark:text-teal-400" />}
          label="Domains"
          value={statistics.domains}
          change="+2% from last month"
        />
        <StatisticCard
          icon={<TicketCheck className="text-teal-600 dark:text-teal-400" />}
          label="Support Tickets"
          value={statistics.supportTickets}
          change="-10% from last month"
        />
        <StatisticCard
          icon={<Receipt className="text-teal-600 dark:text-teal-400" />}
          label="Due Invoices"
          value={statistics.dueInvoices}
          change="+0% from last month"
        />
      </div>
    </div>
  );
};

export default StatisticsGrid;
