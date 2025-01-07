import { FiUsers , FiAlertTriangle , FiLock } from 'react-icons/fi';
import {RiLogoutBoxLine , RiHome8Line , RiLogoutCircleLine} from 'react-icons/ri';
import {VscFileSubmodule} from 'react-icons/vsc';
import {TbUpload} from 'react-icons/tb';
import {BiArchive , BiEnvelopeOpen} from 'react-icons/bi';

export const links = [  


        {
            name: 'Non Traité',
            path: '/traitement-alerte',
        },        
        {
            name: 'Analyse',
            path: '/alerte-analyse',
        },
        {
            name: 'Investigation',
            path: '/investigation-alerte',
        },
        {
            name: 'Attente décision 2éme niveau',
            path: '/alerte-deuxieme-decision',
        },
        {
            name: 'Attente déclaration Tracfin',
            path: '/attente-declaration-tracfin',
        },
        {
            name: 'Attente envoi à Tracfin',
            path: '/filed',
        },
        {
            name: 'Attente retour Tracfin',
            path: '/attente-retour-tracfin',
        },


]