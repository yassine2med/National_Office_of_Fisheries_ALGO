import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
    {
        title: 'Gaming Ecomerce Website',
        link: 'Ecomerce-Gaming',
        thumbnail: '/projects/Ecomerce-Gaming.png'
    },
    {
        title: 'KOORALIFE',
        link: 'https://kooralife.com/matches/4366917',
        thumbnail: '/projects/kooraLife.png'
    },
    {
        title: 'Bank Alerts',
        link: 'https://github.com/yassine2med/Bank_Alert_Delubac',
        thumbnail: '/projects/BankAlert.png'
    },

    {
        title: 'Alfamines',
        link: 'https://alfamines.com/',
        thumbnail: '/projects/Alfamines.jpg'
    },
    {
        title: 'Portfolio',
        link: 'https://github.com/yassine2med/MyPortfolio_V1',
        thumbnail: '/projects/PortfolioV1.png'
    },
    {
        title: 'ONP',
        link: 'https://www.onp.ma/',
        thumbnail: '/projects/ONP.png'
    },

    {
        title: 'Portfolio V2',
        link: 'https://github.com/yassine2med/MyPortfolio',
        thumbnail: '/projects/opengraph-image.png'
    },
    {
        title: 'AmineAldo',
        link: 'https://aldoamine.com/',
        thumbnail: '/projects/AmineAldo.png'
    },
    {
        title: 'Shopping WebSite',
        link: 'https://github.com/yassine2med/Shopping_Website',
        thumbnail: '/projects/MarhabaWebsite.png'
    }
];
