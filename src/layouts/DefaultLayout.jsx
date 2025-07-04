import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
