'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'KOORALIFE',
        description: (
            <ul className="list-disc">
                <li>
                    Led the development of KOORALIFE&apos;s digital platform, a sports news website focused on daily football (Soccer) matches and
                    information, using React and Tailwind CSS to create a responsive and visually appealing interface, improving user engagement by
                    60%.
                </li>
                <li>
                    Designed and developed the website, implementing Node.js for the back-end to enable dynamic content updates and improve the
                    website&apos;s response time by 25% through performance optimization techniques.
                </li>
                <li>
                    Collaborated with a cross-functional team, employing Agile methodologies to deliver the project ahead of schedule, while
                    maintaining a focus on user experience and usability.
                </li>
                <li>
                    Contributed innovative ideas in brainstorming sessions and provided ongoing support to the team throughout the development
                    process.
                </li>
                <a
                    href="https://www.kooralife.com"
                    className="mx-auto mt-4 block max-w-3xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-center text-sm font-medium leading-relaxed text-transparent transition-transform hover:scale-105 hover:underline sm:text-base"
                >
                    www.kooralife.com
                </a>
            </ul>
        ),
        badge: 'Web Developer | 11/2023 - Present'
    },
    {
        title: 'ALGO Consulting (Capstone Project)',
        description: (
            <ul className="list-disc">
                <li>
                    Contributed to transforming The National Fisheries Office&apos;s Information System by migrating its website to a React-based
                    platform, improving performance, accessibility, and user experience by 30%.
                </li>
                <li>
                    Designed and developed intuitive, responsive interfaces using React.js, TypeScript, JavaScript, HTML, and CSS, enhancing user
                    experience by 40% through a more intuitive and visually appealing design.
                </li>
                <li>
                    Collaborated with the back-end team to integrate custom APIs, leveraging .NET under guidance to ensure seamless functionality
                    between front-end and back-end systems.
                </li>
                <li>
                    Optimized the codebase with Redux for state management and Babel for compatibility, improving maintainability and efficiency,
                    resulting in a 15% reduction in loading times.
                </li>
                <li>
                    Collaborated in Agile Scrum teams, driving iterative progress and alignment with project goals. Enhanced version control and
                    development workflows using Git, boosting team collaboration and project efficiency.
                </li>
                <a
                    href="https://www.onp.ma/"
                    className="mx-auto mt-4 block max-w-3xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-center text-sm font-medium leading-relaxed text-transparent transition-transform hover:scale-105 hover:underline sm:text-base"
                >
                    www.ONP.ma
                </a>
            </ul>
        ),
        badge: 'Junior Software Engineer | 2/2023 - 10/2023'
    },

    {
        title: 'I-Eteria (Intenship)',
        description: (
            <ul className="list-disc">
                <li>
                    Translated Figma design prototypes into responsive React components, implementing logic and interactivity to create a functional
                    and user-friendly banking alert management application for Banque Delubac & Cie.
                </li>
                <li>
                    Enhanced the user interface using React and Material-UI, focusing on design consistency, improved user experience, and achieving a
                    25% increase in user engagement.
                </li>
                <li>
                    Collaborated with cross-functional teams to ensure alignment between design, functionality, and operational requirements,
                    optimizing workflow and usability, leading to a 20% improvement in operational efficiency.
                </li>
                <li>
                    Created UML diagrams (use case, sequence, and class) to communicate system processes and user flows, supporting clear project
                    collaboration and design clarity.{' '}
                </li>
            </ul>
        ),
        badge: 'UX/UI Engineer Intern | 6/2022 - 8/2022'
    },
    {
        title: 'Alfamines',
        description: (
            <ul className="list-disc">
                <li>
                    Designed and launched the Alfamines project website, integrating information, logos, and UML diagrams to create an engaging and
                    informative user interface using HTML, CSS, and PHP.
                </li>
                <li>Managed the acquisition of the domain and setup of hosting, ensuring the website ran smoothly with optimal performance.</li>
                <li>Focused on creating a seamless user experience through intuitive design and efficient functionality.</li>
                <a
                    href="https://alfamines.com/"
                    className="mx-auto mt-4 block max-w-3xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-center text-sm font-medium leading-relaxed text-transparent transition-transform hover:scale-105 hover:underline sm:text-base"
                >
                    Alfamines.com
                </a>
            </ul>
        ),
        badge: 'Web Dev/Design Intern | 7/2021 - 10/2021'
    }
];
