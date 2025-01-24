import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const MenuItem = ({
    setActive,
    active,
    item,
    children
}: {
    setActive: (item: string | null) => void;
    active: string | null;
    item: string;
    children: React.ReactNode;
}) => {
    const isActive = active === item;

    return (
        <div onMouseEnter={() => setActive(item)} onMouseLeave={() => setActive(null)} className="relative">
            <button className="text-sm font-medium">{item}</button>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg dark:bg-black"
                >
                    <div className="p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            {children}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({ setActive, children }: { setActive: (item: string | null) => void; children: React.ReactNode }) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="boder relative flex items-center justify-center space-x-4 rounded-full border border-black/[0.2] bg-white px-8 py-3 shadow-input dark:border-white/[0.2] dark:bg-black "
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({ title, description, href, src }: { title: string; description: string; href: string; src: string }) => {
    return (
        <Link href={href} className="flex space-x-2">
            <Image src={src} width={140} height={70} alt={title} className="shrink-0 rounded-md shadow-2xl" />
            <div>
                <h4 className="mb-1 text-xl font-bold text-black dark:text-white">{title}</h4>
                <p className="max-w-40 text-sm text-neutral-700 dark:text-neutral-300">{description}</p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link {...rest} className="flex items-center text-neutral-700 hover:text-neutral-400 dark:text-neutral-200">
            {children}
        </Link>
    );
};
