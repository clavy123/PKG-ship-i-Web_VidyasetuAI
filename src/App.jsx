import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router";

function App() {
  return (
    <>
      <div className="flex justify-center">Hello World</div>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
