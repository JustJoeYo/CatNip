import { SelectedPage } from "../pages/types";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

function Link({ page, selectedPage, setSelectedPage, }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (

      <a className={`${selectedPage === lowerCasePage ? "text-font-color-2" : "text-font-color"}
      transition duration-500 hover:text-font-color-3
      `}
      href={`/${"CatNip/"+lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
        <div className="text-sm font-semibold leading-6 text-text-color h-fit w-32 text-center rounded-md px-5 py-1.5 shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">
          {page}
        </div>
      </a>

  )
}

export default Link