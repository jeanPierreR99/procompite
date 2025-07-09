import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Route";

function App() {
  const router = createBrowserRouter(Routes);

  return <RouterProvider router={router} />;
}

export default App
