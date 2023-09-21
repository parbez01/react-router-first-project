/* eslint-disable no-unused-vars */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import myCreatedRoute from './Route/Route'




// const myCreatedRoute = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>This is my Home Route</div>
//   },
//   {
//     path: '/products',
//     element: <div>Product Route Hitt</div>
//   },
//   {
//     path: '/about',
//     element: <div>About Route hitted</div>
//   }
// ])

// const myCreatedRoute = createBrowserRouter([
//   {
//     path: '/',
//     element: <section>
//       <div>This is fixed item</div>
//       <Outlet></Outlet>
//     </section>,
//   children: [
//     {
//       path: '/',
//       element: <div>This is fixed route</div>
//     },
//     {
//       path: '/product',
//       element: <div>This is product</div>
//     }
//   ]
//   }
// ])

// const myCreatedRoute = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayouts></MainLayouts>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: '/products',
//         element: <Products></Products>
//       }
//     ]
//   }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
