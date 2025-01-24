'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const words = [
    {
        text: 'IT'
    },
    {
        text: 'and'
    },
    {
        text: 'Networks'
    },
    {
        text: 'Engineering',
        className: 'text-blue-500 dark:text-blue-500'
    }
];

const toRotate = ['Software Engineer', 'Web Developer', 'Technology Enthusiast', 'Problem Solver', 'Team Worker', 'Data Analyst'];

export function LandingPage() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, delta]);

    const tick = () => {
        const i = index % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setIndex((prevIndex) => prevIndex + 1);
            setDelta(500);
        }
    };

    return (
        <div
            id="landing-page"
            className="bg- relative flex  h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
        >
            <span className="tagline" style={{ fontSize: '24px', position: 'relative', top: '-30px' }}>
                <u>
                    <samp>Welcome to my Portfolio</samp>
                </u>
            </span>
            <br />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />

            <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base">
                {' '}
                Hello, I&apos;m Yassine. A passionate{' '}
                <span
                    className="txt-rotate"
                    data-period="1000"
                    data-rotate='[ "Software Engineer", "Web Developer", "Technology Enthusiast", "Problem Solver", "Team Worker", "Data Analyst" ]'
                >
                    <span className="wrap">{text}</span>
                </span>
                .
            </p>
            <TypewriterEffectSmooth words={words} />
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
                I specialize in building user-focused web solutions while leveraging my strong foundation in IT engineering, data analytics, and
                business principles. My journey includes hands-on experience through internships and academic projects, where I successfully developed
                systems like E-commerce platforms, management tools, and responsive web designs.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
                Trilingual in English, French, and Arabic, I thrive in multicultural environments and bring a global perspective to my work. With a
                passion for innovation and problem-solving, I’m dedicated to delivering meaningful results. I have also honed my teamwork skills
                through various internships, collaborating effectively with cross-functional teams to achieve project goals.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg font-semibold leading-relaxed text-blue-600 dark:text-blue-400 sm:text-xl">
                Let’s connect and collaborate on exciting projects!
            </p>
            <br />
            <br />
            <div className="z-30 flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <Link href="https://drive.google.com/file/d/1AjmDKKaH2SNs1E81Nv2BZoRs6yeFl3rs/view?usp=drive_link">
                    <Button>Download CV</Button>
                </Link>
                <Link href="#contact-me">
                    <Button variant="secondary">Contact Me</Button>
                </Link>
                <Link href="https://drive.google.com/drive/folders/1iVimLLboOBkENShtS89_azLUYEbMopDW?usp=drive_link">
                    <Button>View Degree</Button>
                </Link>
            </div>
            <BackgroundBeams />
        </div>
    );
}
