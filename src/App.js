import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/HomePage/HomePage";
import { Router, RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import FormPage from "./components/FormPage/FormPage";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "HomePage/",
        element: <HomePage />,
      },
      {
        path: "FormPage/",
        element: <FormPage />,
      },
      {
        path: "Contact/",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {

  return (
        <div className="App">
          <RouterProvider router={router} />
        </div>
  );
}

export default App;
