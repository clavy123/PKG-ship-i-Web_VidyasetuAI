import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* You can add a navbar/header here */}
      Navbar
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      Footer
      {/* You can add a footer here */}
    </div>
  );
}
