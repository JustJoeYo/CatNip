import 'tailwindcss/tailwind.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from "react";
import Header from './components/navigationbar/Header';
import Particles from './components/particles/Particles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, Resume, PageNotFound, SelectedPage} from "./components/pages/types";

const router = createBrowserRouter([
  {
    path: "/Project-Website/",
    children: [
        {
          path: "/Project-Website/",
          element: <About />,
        },
        {
          path: "/Project-Website/about",
          element: <About />,
        },
        {
          path: "/Project-Website/resume",
          element: <Resume />,
        },
        {
          path: "/Project-Website/*",
          element: <PageNotFound />,
        },
    ]
  }
]);

function HeaderFix() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.About);
  return (
    <Header
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage}
    />
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderFix/>
    <Particles/>

    <RouterProvider router={router} />

  </React.StrictMode>,
)