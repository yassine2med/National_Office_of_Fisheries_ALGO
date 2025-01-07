import { FiUsers , FiAlertTriangle , FiLock } from 'react-icons/fi';
import {RiLogoutBoxLine , RiHome8Line , RiLogoutCircleLine} from 'react-icons/ri';
import {VscFileSubmodule} from 'react-icons/vsc';
import {TbUpload} from 'react-icons/tb';
import {BiArchive , BiEnvelopeOpen} from 'react-icons/bi';

export const links = [  
{
    title: '',
    links: [

        {
            name: 'Accueil',
            path: '/acceuil',
            icon :<RiHome8Line/>
        },        
        {
            name: 'Gestion des alertes',
            path: '/gestion-alertes',
            icon :<FiAlertTriangle/>
        },
        {
            name: 'Demande d\'information',
            path: '/demande-information',
            icon :<BiEnvelopeOpen/>
        },
        {
            name: 'Récapitulatif des décisions',
            path: '/recapulatif-decisions',
            icon :<VscFileSubmodule/>
        },
        {
            name: 'Historique',
            path: '/historique',
            icon :<BiArchive/>
        },
        {
            name: 'Intégrer un fichier',
            path: '/integrer-fichier',
            icon :<TbUpload/>
        },
    ]
},
{
    title: '',
    links: [

        {
            name: 'Gestion des utilisateurs',
            path: '/gestion-utilisateurs',
            icon :<FiUsers/>,
            dropdown : true,
            dropdownLinks : [
                {
                    name: 'Gestion des utilisateurs',
                    path: '/g-utilisateurs',
                    icon :<FiUsers/>
                },
                {
                    name: 'Changer de mot de passe',
                    path: '/changer-motdepasse',
                    icon :<FiLock/>
                },
            ]
        },        
        {
            name: 'Changer mot de passe',
            path: '/changer-motdepasse',
            icon :<FiLock/>
        },
        {
            name: 'Se déconnecter',
            path: '/login',
            icon :<RiLogoutCircleLine/>
        },
        

    ]
}
]