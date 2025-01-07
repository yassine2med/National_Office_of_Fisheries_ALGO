import React, { useEffect } from 'react'
import { useContextState } from '../../contexts/ContextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { RiMenuLine , RiNotificationLine , RiChat3Line , RiSettings2Line ,RiArrowDownSLine } from 'react-icons/ri'
import Avatar from '../../data/assets/img/avatar.png';
import Chat from './navbarItems/Chat'
import Notification from './navbarItems/Notification'
import UserProfile from './navbarItems/UserProfile'
import Settings from './navbarItems/Settings';


const NavButton = ({title , customFunc , icon , color , dotColor}) => (
  <TooltipComponent  content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}}
    className='relative text-xl rounded-full p-4 hover:bg-light-gray'>
      <span className='absolute inline-flex rounded-full h-4 w-4 right-2 top-3' 
      style={{background: dotColor}}> 
      {icon}
      </span>
    </button>
  </TooltipComponent> 
)

const NavBar = () => {
  const {activeMenu , setActiveMenu , isClicked , setIsClicked , screenSize , setScreenSize , handleClick ,isModalOpen } = useContextState();
  const blur = isModalOpen ? 'blur-sm' : ''

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [])  

  useEffect(() => {
    if(screenSize < 1000) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  const margin = activeMenu ? 'ml-8' : 'ml-0'
  return (
    <>
      <div className={`flex justify-between p-2 ${margin} my-3 relative ${blur}  bg-gray-200 `}>
        <NavButton title='Menu' customFunc={() => {setActiveMenu((prev) => !prev)}}
        icon={<RiMenuLine/>}/>

        <h2 className='text-2xl text-bold mt-2 ml-60 uppercase'>Déclaration Soupçon TRACFIN </h2>

        <div className='flex space-x-3'>
          <NavButton title='Messages' dotColor='#03C9D7' customFunc={() => handleClick('messages')}
            icon={<RiChat3Line/>}/>
          <NavButton title='Notifications' customFunc={() => handleClick('notifications')}
            icon={<RiNotificationLine/>}/>
          <NavButton title='Settings' customFunc={() => handleClick('settings')}
            icon={<RiSettings2Line/>}/>
          <TooltipComponent content='Profile' position='BottomCenter'>
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-200 rounded-lg'
              onClick={() => handleClick('userProfile')}>
                <img src={Avatar} alt='avatar' className='rounded-full h-8 w-8'/>
                <p>
                  <span className='text-gray-400 text-14'>Hi, </span>
                  <span className='text-gray-400 font-bold ml-1 text-14'>Mehdi</span>
                </p>
                <RiArrowDownSLine className='text-gray-500 text-16'/>
            </div>
          </TooltipComponent>

          {isClicked.messages && <Chat/>}
          {isClicked.notifications && <Notification/>}
          {isClicked.settings && <Settings/>}
          {isClicked.userProfile && <UserProfile/>}

        </div>
      </div>
    </>
  )
}
 
export default NavBar