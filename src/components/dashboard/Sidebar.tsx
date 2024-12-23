import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Home,
  Server,
  Globe,
  CreditCard,
  TicketCheck,
  Users,
  ChevronDown,
  ChevronRight,
  Cloud,
} from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface NavCategory {
  label: string;
  items: NavItem[];
}

interface SidebarProps {
  categories?: NavCategory[];
  onNavigate?: (href: string) => void;
}

const defaultCategories: NavCategory[] = [
  {
    label: "Services",
    items: [
      { icon: <Home size={20} />, label: "Dashboard", href: "/" },
      { icon: <Server size={20} />, label: "VPS Servers", href: "/servers" },
    ],
  },
  {
    label: "Domains",
    items: [
      { icon: <Globe size={20} />, label: "My Domains", href: "/domains" },
      {
        icon: <Globe size={20} />,
        label: "Domain Search",
        href: "/domains/search",
      },
    ],
  },
  {
    label: "Billing",
    items: [
      {
        icon: <CreditCard size={20} />,
        label: "Invoices",
        href: "/billing/invoices",
      },
      {
        icon: <CreditCard size={20} />,
        label: "Payment Methods",
        href: "/billing/payment",
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        icon: <TicketCheck size={20} />,
        label: "Tickets",
        href: "/support/tickets",
      },
      {
        icon: <TicketCheck size={20} />,
        label: "Knowledge Base",
        href: "/support/kb",
      },
    ],
  },
  {
    label: "Affiliate",
    items: [
      { icon: <Users size={20} />, label: "Overview", href: "/affiliate" },
      {
        icon: <Users size={20} />,
        label: "Referrals",
        href: "/affiliate/referrals",
      },
    ],
  },
];

const Sidebar = ({
  categories = defaultCategories,
  onNavigate = () => {},
}: SidebarProps) => {
  const [openCategories, setOpenCategories] = useState<string[]>([
    categories[0].label,
  ]);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  return (
    <div className="w-[280px] min-h-screen bg-[#2C3E50] text-white p-4 flex flex-col gap-2 flex-shrink-0">
      <div className="flex items-center gap-2 mb-6 px-2">
        <Cloud size={24} className="text-teal-400" />
        <span className="text-xl font-bold">HostCloud</span>
      </div>

      {categories.map((category) => (
        <Collapsible
          key={category.label}
          open={openCategories.includes(category.label)}
          onOpenChange={() => toggleCategory(category.label)}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full flex items-center justify-between p-2 hover:bg-white/10 rounded-lg"
            >
              <span className="font-medium">{category.label}</span>
              {openCategories.includes(category.label) ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-2">
            {category.items.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full flex items-center gap-2 justify-start p-2 hover:bg-white/10 rounded-lg"
                onClick={() => onNavigate(item.href)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default Sidebar;
