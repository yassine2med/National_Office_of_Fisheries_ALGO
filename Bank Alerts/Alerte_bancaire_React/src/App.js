import React , { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import "./App.css"
import AjouterUtilisateur from './pages/AjouterUtilisateur'
import NavBar from './components/navbar/NavBar'
import SideBar from './components/sidebar/SideBar'
import {useContextState} from './contexts/ContextProvider'
import ModifierUtilisateur from './pages/ModifierUtilisateur'
import GestionUtilisateurs from './pages/GestionUtilisateurs'
import Login from './pages/Login'
import ChangerMotdepasse from './pages/ChangerMotdepasse'
import IntergerFichier from './pages/IntegerFichier'
import InvestigationAlerte from './pages/InvestigationAlerte'
import TraitementAlert from './pages/TraitementAlert'
import AlerteAnalyse from './pages/AlerteAnalyse'
import AlerteDeuxiemeDecision from './pages/AlerteDeuxiemeDecision'
import AttenteDeclarationTracfin from './pages/AttenteDeclarationTracfin'
import AttenteRetourTracfin from './pages/AttenteRetourTracfin'
import GestionAlertes from './pages/GestionAlertes'
import { useCookies } from "react-cookie";

function App() {

  const {activeMenu , connected , currentUser , setConnected } = useContextState();
  const [cookie, setCookie] = useCookies(["user"]);
  const [user , setUser] = useState(currentUser);     
  const login = window.location.pathname === '/login'; 

  console.log(login);

  useEffect(() => {
    if(window.location.pathname === '/login'){
      setConnected(false);
      //remove cookie when login page is loaded
      setCookie("user", "", { path: "/" });
    }
  } , [window.location.pathname]);



  return (  
    <div>
      <Router>
        { connected || (( cookie.user && (cookie.user.username === user.username) ) && !login ) ?  
            <div  className='flex relative dark:bg-main-dark-bg'>
                  {
                    activeMenu ? 
                    <div style={{width:320}}  className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'> <SideBar/> </div>
                    : 
                    <div className='w-0 dark:bg-secondary-dark-bg'> </div>
                  }

              <div className={'dark:bg-main-bg bg-gray-200 min-h-screen w-full'
              + (activeMenu ? ' md:ml-72' : ' flex-2')}>
                {
                  !login ? (
                    <div className="fixed md:static bg-main-bg dark-bg-main-dark-bg navbar w-full"> 
                      <NavBar/>
                    </div>   
                  ) : ( null )
                }
                  
              <div>
                <Routes>
                  <Route path='/' element={<AjouterUtilisateur/>} />
                  <Route path='/ajouter-utilisateur' element={<AjouterUtilisateur/>} />
                  <Route path='/modifier-utilisateur' element={<ModifierUtilisateur/>} />
                  <Route path='/gestion-utilisateurs' element={<GestionUtilisateurs/>} />
                  <Route path='/traitement-alerte' element={<TraitementAlert/>} /> {/* alerte non analysé */}
                  <Route path='/changer-motdepasse' element={<ChangerMotdepasse/>} />
                  <Route path='/integrer-fichier' element={<IntergerFichier/>} />
                  <Route path='/investigation-alerte' element={<InvestigationAlerte/>} />
                  <Route path='/alerte-analyse' element={<AlerteAnalyse/>} />
                  <Route path='/alerte-deuxieme-decision' element={<AlerteDeuxiemeDecision/>} />
                  <Route path='/attente-declaration-tracfin' element={<AttenteDeclarationTracfin/>} />
                  <Route path='/attente-retour-tracfin' element={<AttenteRetourTracfin/>} />
                  <Route path='/gestion-alertes' element={<GestionAlertes/>} />
                </Routes>
              </div>
              </div>
            </div>
          : 
          <>
          <Login/>
          </>
        }
      </Router>
    </div>
    
  )
}

export default App