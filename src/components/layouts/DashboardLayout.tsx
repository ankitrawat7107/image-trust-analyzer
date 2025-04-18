
import { Outlet } from "react-router-dom";
import { DashboardNavigation } from "../navigation/DashboardNavigation";

export function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNavigation />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
