import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Order from './Components/Order/Order';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { AuthProvider } from './Context/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { 
        path: '/',
        element: <Home />
      },
      { 
        path: '/home', 
        element: <Home />
      },
      {
        path: '/about', 
        element: <About />
      },
      {
        path: '/contact', 
        element: <Contact />
      },
      {
        path: '/login', 
        element: <Login />
      },
      {
        path: '/register', 
        element: <Register />
      },
      {
        path: '/dashboard', 
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      },
      {
        path: '/products',
        loader: () => {
          return fetch("https://fakestoreapi.com/products")
        },
        element: <PrivateRoute><Products /></PrivateRoute>
      },
      {
        path: "/products/:productId",
        loader: ({ params }) => {
          return fetch(`https://fakestoreapi.com/products/${params.productId}`)
        },
        element: <PrivateRoute><ProductDetails /></PrivateRoute>
      },
      {
        path: "/products/pro/:orderId",
        loader: ({ params }) => {
          return fetch(`https://fakestoreapi.com/products/${params.orderId}`)
        },
        element: <PrivateRoute><Order /></PrivateRoute>
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
