import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Order from './Components/Order/Order';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
       { 
        path:'/home', Component:Home
       },
       {
        path:'/about', Component: About
       },
       {
        path:'/contact', Component: Contact
       },
       {
        path: '/products',
        loader: ()=>{
         return fetch("https://fakestoreapi.com/products")
        },
        Component:Products

       },
       {
        path:"/products/:productId",
         loader: ({params})=>{
         return fetch(`https://fakestoreapi.com/products/${params.productId}`)
         },
        Component:ProductDetails
       },

       {
         path:"/products/pro/:orderId",
         loader: ({params})=>{
           return fetch(`https://fakestoreapi.com/products/${params.orderId}`)
         },
         Component:Order

       }

    ]
  },




 
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
