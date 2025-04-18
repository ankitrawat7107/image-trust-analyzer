
import { Outlet } from "react-router-dom";
import { MainNavigation } from "../navigation/MainNavigation";
import Footer from "../navigation/Footer";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
