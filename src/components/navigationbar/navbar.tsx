import { SelectedPage } from "../pages/types";
import Link from './link'

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <header className="bg-popclr">
      <nav className="mx-auto flex max-w-7xl items-center justify-center p-2" aria-label="Global">
        <div className="flex gap-x-6">
          <ul className="text-sm font-semibold leading-6 text-text-color h-fit w-22 rounded-md px-5 py-1.5 shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">
          <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          </ul>
          <ul className="text-sm font-semibold leading-6 text-text-color h-fit w-22 rounded-md px-5 py-1.5 shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">
          <Link page="Login" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          </ul>
          <ul className="text-sm font-semibold leading-6 text-text-color h-fit w-22 rounded-md px-5 py-1.5 shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">
          <Link page="Sign Up" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar