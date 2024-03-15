import 'tailwindcss/tailwind.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from "react";
import Navbar from './components/navigationbar/navbar';
import Particles from './components/particles/Particles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Login, Register, PageNotFound, SelectedPage} from "./components/pages/types";

const router = createBrowserRouter([
  {
    path: "/CatNip/",
    children: [
        {
          path: "/CatNip/Home",
          element: <Home />,
        },
        {
          path: "/CatNip/signup",
          element: <Register/>,
        },
        {
          path: "/CatNip/login",
          element: <Login/>,
        },
        {
          path: "/CatNip/*",
          element: <PageNotFound />,
        },
    ]
  }
]);

function HeaderFix() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <Navbar
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage}
    />
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <div className='box-content w-screen h-screen'>
      <HeaderFix/>
      <div className='flex px-6 py-6 w-full h-maincontent justify-center items-center'>
        <Particles/>
        
        <RouterProvider router={router} />

      </div>
    </div>

  </React.StrictMode>,
)