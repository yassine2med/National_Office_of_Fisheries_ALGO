/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import Emsi from '/public/projects/Emsi.png';
import { TracingBeam } from '@/components/ui/tracing-beams';

export function EducationSection() {
    return (
        <>
            <h1 id="education" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Education
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {education.map((item, index) => (
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

const education = [
    {
        title: `Master’s Equivalent in IT & Networking Engineering (State-Certified Engineer)`,
        description: (
            <ul className="list-disc">
                <li>
                    Graduated with distinction in IT & Networking Engineering, Specializing in{' '}
                    <strong>IT Methods Applied to Corporate Management</strong> , achieving a GPA of 3.4.
                </li>
                <li>
                    Developed an Internship Management Application for my State Engineering program, optimizing intern performance tracking and
                    administrative efficiency. This project complemented my coursework, including seminars and internships leading to the Capstone.
                </li>
                <li>Participated in clubs and societies such as Rotaract-Rabat, Soccer Club, and Powerlifting Club.</li>
                <li>
                    Developed various systems over the course of my studies, including a Library Management System, Internship Management System,
                    Student Information System, E-Commerce Platform, Event Management System, Healthcare Management System, Travel Management System,
                    Student Grading System, and Chat App, utilizing diverse technologies tailored to each project throughout my academic years.
                </li>
                <a
                    href="https://emsi.ma/ingenierie-informatique-et-reseaux/"
                    className="mx-auto mt-4 block max-w-4xl text-center text-base leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-lg"
                >
                    <br />
                    <img
                        src={Emsi.src}
                        alt="EMSI Logo"
                        className="mx-auto mt-4 block w-full max-w-7xl rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                </a>
            </ul>
        ),
        badge: 'The Moroccan School of Engineering Sciences (EMSI) • Morocco'
    }
];
