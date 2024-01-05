import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ContactPage from './components/ContactPage/ContactPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "MainPage/",
        element: <MainPage />,
      },
      {
        path: "Contact/",
        element: <ContactPage />,
      },
    ]
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <MainPage /> */}
    </div>
  );
}

export default App;
