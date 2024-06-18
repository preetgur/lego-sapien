"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeaderDashboard from "../components/HeaderDashboard";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log({ sidebarOpen });

  return (
    <main className="flex">
      <div className="flex h-screen w-full overflow-hidden bg-white">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-white">
          {/* <!-- ===== Header Start ===== --> */}
          <HeaderDashboard
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl  p-4 md:p-6 2xl:p-10 [&::-webkit-scrollbar]:w-0">
              {children}
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
