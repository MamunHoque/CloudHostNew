import React, { useState } from "react";
import TopBanner from "./dashboard/TopBanner";
import Header from "./dashboard/Header";
import Sidebar from "./dashboard/Sidebar";
import StatisticsGrid from "./dashboard/StatisticsGrid";
import QuickLinksGrid from "./dashboard/QuickLinksGrid";
import { useTheme } from "@/lib/theme-provider";

const Home = () => {
  const { theme } = useTheme();
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className={`min-h-screen ${theme}`}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <TopBanner
            isVisible={showBanner}
            onDismiss={() => setShowBanner(false)}
          />
          <Header />

          <main className="flex-1 overflow-y-auto">
            <div className="p-4 max-w-[1200px] mx-auto">
              <div className="space-y-6">
                <StatisticsGrid />
                <QuickLinksGrid />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
