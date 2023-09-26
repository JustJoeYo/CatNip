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
    path: "/Project-Website/",
    children: [
        {
          path: "/Project-Website/",
          element: <Home />,
        },
        {
          path: "/Project-Website/signup",
          element: <Register/>,
        },
        {
          path: "/Project-Website/login",
          element: <Login/>,
        },
        {
          path: "/Project-Website/*",
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