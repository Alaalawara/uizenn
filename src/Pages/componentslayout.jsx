import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function ComponentsLayout() {
  return (
    //normal formal design
    <div className='flex py-10'>
      <Sidebar />
      <div className='flex-1'>
      <Outlet/>
      </div>
    </div>

    //another design
    // <div className='grid grid-cols-3 py-10'>
    //   <Sidebar />
    //   <div className='col-span-2'>
    //     <Outlet />
    //   </div>
    // </div>
  );
}

export default ComponentsLayout;