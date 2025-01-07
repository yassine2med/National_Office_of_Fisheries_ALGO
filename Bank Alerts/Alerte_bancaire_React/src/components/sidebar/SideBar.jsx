import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import {RiCloseLine} from 'react-icons/ri'
import {links as sideBarLinks} from '../../data/routes/routes'
import { useContextState } from '../../contexts/ContextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Logo from '../../data/assets/img/delubac-logo.png'
const SideBar = () => {
  
  const {activeMenu , setActiveMenu , screenSize, setScreenSize , isModalOpen} = useContextState(); 
  const blur = isModalOpen ? 'blur-sm' : ''

  const linkStyle =  'p-3 flex items-center gap-5 pl-4 pt6 rounded-lg text-black text-md m-2'; 
  const activeLink = linkStyle + 'text-white'
  const inactiveLink = linkStyle + 'text-red-700 dark:text-gray-200 dark:hover:text-black hover:text-white hover:bg-rose-900 m-2';
  const handleCloseSideBar = () => {
    if(activeMenu && screenSize < 1000) setActiveMenu(false)
    else setActiveMenu(true)
  }
  
  return (

    <div style={{width:300}} className={`ml-3 h-screen md:overflow-hidden overflow-auto ${blur}`}>
      {activeMenu && (<>

        <div className='flex justify-between items-center'>
          <Link to='/' onClick={() => handleCloseSideBar()}
          className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold 
                    tracking-tight dark:text-white text-slate-900' >
            <img src={Logo} alt='logo' className='h-50'/>
          </Link>
          <TooltipComponent content='Close' position='BottomCenter'>
            <button type='button' onClick={() => {setActiveMenu((prev) => !prev)}}
            className='rounded-full mr-3 mt-4 flex items-center font-extrabold text-lg
                      tracking-tight hover:bg-light-gray dark:text-white text-slate-900'>
              <RiCloseLine/>
            </button>
          </TooltipComponent>
        </div>

        <div className='mt-10 mx-1'>
        {sideBarLinks.map((section) => (
            <div key={section.title}>
              <p className='text-gray-300 m-3 mt-4 uppercase'>{section.title}</p>
              
              {section.links.map((link) => (
                <NavLink  key={link.name}  onClick ={() => handleCloseSideBar()} to={link.path}
                 className={({isActive}) => isActive ? activeLink : inactiveLink + 'text-xl'}>
                  <span className='text-2xl'>{link.icon}</span>
                  <span className=' text-lg'>{link.name}</span>
                </NavLink>
              ))}

            </div>
          ))}
          
        </div> 

      </>)}
    </div>

  )
}

export default SideBar