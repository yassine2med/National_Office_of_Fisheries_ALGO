import Link from 'next/link';
import React from 'react';
import { FaJs, FaReact } from 'react-icons/fa';
import { SiPostgresql, SiPython, SiSqlite } from 'react-icons/si';
import { TbBrandNodejs } from 'react-icons/tb';

import { EvervaultCard, Icon } from '@/components/ui/evervault-card';

export function SkillsSection() {
    return (
        <div className="mx-auto max-w-5xl px-8 pb-8">
            <h1 id="skills" className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Skills
            </h1>
            <p className="mb-12 mt-8 animate-pulse rounded-lg bg-gradient-to-r from-purple-800 via-pink-900 to-red-900 px-4 py-6 text-center text-lg leading-relaxed text-white shadow-lg transition duration-500 hover:scale-105 hover:bg-gradient-to-l hover:from-red-900 hover:via-pink-900 hover:to-purple-800">
                The Computer Engineering and Networks program provides a comprehensive education that equips graduates with the essential skills
                needed to excel in the rapidly evolving fields of computer engineering and network management. By combining theoretical knowledge with
                practical experience, the program prepares students for various career paths, including IT project management, cybersecurity, and
                software development. Emphasizing both technical proficiency and interpersonal skills, graduates are well-prepared to design,
                implement, and manage complex information systems and networks, making them valuable assets in any organization.
            </p>
            <p className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-2xl font-extrabold text-transparent dark:text-white">
                Preferred Technologies:
            </p>
            <div className="flex justify-center"></div>
            <div className={'grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3'}>
                {skills.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.link}
                        className="relative mx-auto flex h-52 w-full max-w-full flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]"
                    >
                        <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />

                        <EvervaultCard text={item.title} icon={item.icon} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

const skills = [
    {
        title: 'React.js',
        link: 'https://react.dev/',
        icon: <FaReact />
    },
    {
        title: 'Node.js',
        link: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
        icon: <TbBrandNodejs />
    },
    {
        title: 'JavaScript',
        link: 'https://www.javascript.com/resources',
        icon: <FaJs />
    },
    {
        title: 'Python',
        link: 'https://www.python.org/',
        icon: <SiPython />
    },
    {
        title: 'SQL',
        link: 'https://www.oracle.com/database/sqldeveloper/',
        icon: <SiSqlite />
    },
    {
        title: 'PostgreSQL',
        link: 'https://www.postgresql.org',
        icon: <SiPostgresql />
    }
];
