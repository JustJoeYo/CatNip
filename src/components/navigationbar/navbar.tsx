import { SelectedPage } from "../pages/types";
import Link from './link'

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <header className="bg-popclr">
      <nav className="mx-auto flex w-full items-center justify-center p-2" aria-label="Global">
        <div className="flex gap-x-6">
          
          <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
         
          <Link page="Login" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
         
          <Link page="Sign Up" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

        </div>
      </nav>
    </header>
  )
}

export default Navbar