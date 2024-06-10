import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROOT } from "./routes/ROOT";

function App() {
  const rooter = createBrowserRouter(ROOT);

  return (
    <>
      <RouterProvider router={rooter} />
    </>
  )
}

export default App
