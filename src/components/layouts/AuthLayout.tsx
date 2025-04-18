
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-8 border-b">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-deepfake-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold">DT</span>
            </div>
            <span className="text-xl font-bold">DeepTrust</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex justify-center items-center p-6">
        <Outlet />
      </main>
    </div>
  );
}
