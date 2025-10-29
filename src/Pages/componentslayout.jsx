import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ComponentSidebar from '../components/ComponentSidebar';
import { TocContext } from "../contexts/TocContext";
import { useState } from "react";
import { componentsCatalog } from '../data/componentsCatalog';
import { CatalogContext } from '../contexts/CatalogContext';


function ComponentsLayout() {
  const [tocItems, setTocItems] = useState([]);
  return (
    <CatalogContext.Provider value={{ items: componentsCatalog }}>
      <TocContext.Provider value={{ items: tocItems, setItems: setTocItems }}>
        <div className='grid grid-cols-4 justify-between py-10'>

          <div className="col-span-1">
            <Sidebar />
          </div>

          <div className='col-span-2'>
            <Outlet />
          </div>

          <div className="col-span-1 hidden lg:flex lg:flex-col lg:items-end">
            <ComponentSidebar />
          </div>

        </div>
      </TocContext.Provider>
    </CatalogContext.Provider>
  );
}

export default ComponentsLayout;