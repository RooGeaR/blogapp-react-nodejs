import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Single from "./pages/Single";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-[1024px]">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
