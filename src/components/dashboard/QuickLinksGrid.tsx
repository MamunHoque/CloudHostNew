import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Server,
  Globe,
  HardDrive,
  Shield,
  Settings,
  Database,
  Network,
  Terminal,
} from "lucide-react";

interface QuickLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

interface QuickLinksGridProps {
  links?: QuickLinkProps[];
}

const defaultLinks: QuickLinkProps[] = [
  {
    icon: <Server className="h-6 w-6" />,
    title: "Manage VPS",
    description: "Control your virtual servers",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "DNS Management",
    description: "Configure domain name settings",
  },
  {
    icon: <HardDrive className="h-6 w-6" />,
    title: "Storage",
    description: "Manage storage allocation",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security",
    description: "Configure security settings",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Server Config",
    description: "Adjust server configurations",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Backups",
    description: "Manage server backups",
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Network",
    description: "Configure network settings",
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "Console",
    description: "Access server console",
  },
];

const QuickLinkCard = ({
  icon,
  title,
  description,
  onClick,
}: QuickLinkProps) => (
  <Card className="bg-white dark:bg-gray-800 p-4 hover:shadow-lg transition-shadow cursor-pointer">
    <Button
      variant="ghost"
      className="w-full h-full flex flex-col items-center justify-center gap-2 p-4"
      onClick={onClick}
    >
      <div className="text-primary dark:text-primary">{icon}</div>
      <h3 className="font-semibold text-lg text-foreground dark:text-foreground">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground dark:text-muted-foreground text-center line-clamp-2">
        {description}
      </p>
    </Button>
  </Card>
);

const QuickLinksGrid = ({ links = defaultLinks }: QuickLinksGridProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-foreground">
        Quick Links
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {links.map((link, index) => (
          <QuickLinkCard
            key={index}
            icon={link.icon}
            title={link.title}
            description={link.description}
            onClick={
              link.onClick || (() => console.log(`Clicked ${link.title}`))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default QuickLinksGrid;
