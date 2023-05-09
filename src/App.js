import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Authen from "./pages/Authen";
import ForgotPassword from "./pages/ForgotPassword";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authen />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
