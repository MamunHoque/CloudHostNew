import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopBannerProps {
  message?: string;
  onDismiss?: () => void;
  isVisible?: boolean;
}

const TopBanner = ({
  message = "🎉 Welcome to the new VPS Dashboard! Explore our improved features and interface.",
  onDismiss = () => {},
  isVisible = true,
}: TopBannerProps) => {
  if (!isVisible) return null;

  return (
    <Alert
      className="w-full bg-primary text-primary-foreground rounded-none border-none"
      role="alert"
    >
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto px-4 py-2">
        <AlertDescription className="text-sm font-medium">
          {message}
        </AlertDescription>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-primary-foreground/10"
          onClick={onDismiss}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss banner</span>
        </Button>
      </div>
    </Alert>
  );
};

export default TopBanner;
