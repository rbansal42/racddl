'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import KeyStats from '@/components/KeyStats';

const carouselSlides = [
  {
    image: '/slide1.jpg',
    //alt: 'Rotaract Community Service',
  },
  {
    image: '/slide2.jpg',
    //alt: 'Rotaract Leadership',
  },
  {
    image: '/slide3.jpg',
   // alt: 'Rotaract Events',
  },
];

const projectSlides = [
  {
    name: 'RaktSetu',
    image: '/projects/raktsetu-logo.png',
    link: '/projects/raktsetu'
  },
  {
    name: 'EcoSevika',
    image: '/projects/ecosevika-logo.png',
    link: '/projects/ecosevika'
  },
  {
    name: 'Breast Cancer Action Group',
    image: '/projects/bcag-logo.png',
    link: '/projects/bcag'
  },
  {
    name: 'Unnati',
    image: '/projects/unnati-logo.png',
    link: '/projects/unnati'
  }
];

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [projectsRef, projectsApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    direction: 'ltr',
    containScroll: 'trimSnaps',
    dragFree: false,
    skipSnaps: false
  }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [mounted, setMounted] = useState(false);

  // Scroll functions for projects carousel
  const scrollPrev = useCallback(() => {
    if (projectsApi) projectsApi.scrollPrev();
  }, [projectsApi]);

  const scrollNext = useCallback(() => {
    if (projectsApi) projectsApi.scrollNext();
  }, [projectsApi]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/rotarylogo.jpg" />
      </Head>
      <main>
        {/* Hero Section */}
        <div className="relative h-screen">
          {/* Carousel */}
          <div className="absolute inset-0 -z-10" ref={emblaRef}>
            <div className="flex h-full">
              {carouselSlides.map((slide, index) => (
                <div
                  key={index}
                  className="relative flex-[0_0_100%] h-full"
                >
                  {mounted && (
                    <Image
                      src={slide.image}
                      alt="Rotaract Club Event"
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                  {/* Dark overlay with increased opacity (40%) for better text visibility */}
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg leading-tight">
                Rotaract Club of<br />
                Delhi Dynamic Leaders
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-gray-100 drop-shadow-md">
                Empowering Youth, Serving Humanity
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://forms.gle/rbGc8Xm2WnTJc2RE8"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="px-8 py-3 bg-[#5B2333]/90 text-white rounded-full font-semibold hover:bg-[#5B2333] transition-colors backdrop-blur-sm cursor-pointer"
                >
                  Join Us
                </motion.a>
                <Link href="/about">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="px-8 py-3 bg-white/90 text-[#5B2333] rounded-full font-semibold hover:bg-white transition-colors backdrop-blur-sm cursor-pointer"
                  >
                    Learn More
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute bottom-8"
            >
              <motion.div
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="w-6 h-10 border-2 border-white rounded-full p-1 drop-shadow-lg"
              >
                <div className="w-1 h-3 bg-white rounded-full mx-auto" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Banner Section */}
        <section className="px-4 py-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#5B2333] rounded-2xl shadow-xl p-8 text-white mx-4 transform hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    The only self-sponsored club of RID 3011
                  </h2>
                </div>
                <div className="flex-1 w-full md:w-auto">
                  <div className="relative w-full h-64 md:h-48 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/charter-certificate.jpg"
                      alt="Charter Certificate"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Theme/Impact Section */}
        <section className="relative py-32">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/unnati/photo1.jpg"
              alt="Students Learning Together"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Content */}
          <div className="relative max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Creating Impactful Futures
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
                Our vision embodies our commitment to making lasting positive change in our communities. Through innovative projects, sustainable initiatives, and collaborative efforts, we strive to build a better tomorrow for everyone.
              </p>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                This vision drives us to develop leadership skills, foster meaningful connections, and implement projects that create real, sustainable impact. Together, we're not just imagining a better future - we're actively creating it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#5B2333] mb-4">
                Excellent from the Start
              </h2>
              <div className="w-24 h-1 bg-[#5B2333] mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Achievement Item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-64 h-64 rounded-lg overflow-hidden bg-white shadow-lg mb-4 hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/achievements/award1.jpg"
                    alt="Achievement 1"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#5B2333]">Best Club Award</h3>
              </motion.div>

              {/* Achievement Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-64 h-64 rounded-lg overflow-hidden bg-white shadow-lg mb-4 hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/achievements/award2.jpg"
                    alt="Achievement 2"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#5B2333]">Outstanding Service</h3>
              </motion.div>

              {/* Achievement Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="w-64 h-64 rounded-lg overflow-hidden bg-white shadow-lg mb-4 hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/achievements/award3.jpg"
                    alt="Achievement 3"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#5B2333]">Leadership Excellence</h3>
              </motion.div>

              {/* Add more achievement items following the same pattern */}
            </div>
          </div>
        </section>

        {/* Highlight Projects Section */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#5B2333]">
                HIGHLIGHT PROJECTS
              </h2>
            </motion.div>

            {/* Projects Carousel */}
            <div className="relative bg-gray-100 rounded-3xl p-8">
              <div className="overflow-hidden mx-auto max-w-[350px]" ref={projectsRef}>
                <div className="flex">
                  {projectSlides.map((project, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] min-w-0 px-2"
                    >
                      <Link href={project.link}>
                        <div className="bg-white rounded-xl shadow-md p-6 aspect-square flex items-center justify-center">
                          <div className="relative w-full h-full">
                            <Image
                              src={project.image}
                              alt={project.name}
                              fill
                              className="object-contain p-4"
                              priority
                              sizes="(max-width: 350px) 100vw, 350px"
                            />
                          </div>
                        </div>
                        <h3 className="text-center mt-4 text-lg font-semibold text-[#5B2333]">{project.name}</h3>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={scrollPrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full text-[#5B2333] hover:text-[#7B3343] hover:bg-gray-50 transition-all shadow-md z-10"
                aria-label="Previous project"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button 
                onClick={scrollNext}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full text-[#5B2333] hover:text-[#7B3343] hover:bg-gray-50 transition-all shadow-md z-10"
                aria-label="Next project"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* See More Button */}
              <div className="text-center mt-8">
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-[#5B2333] text-white rounded-full font-semibold hover:bg-[#7B3343] transition-colors"
                  >
                    SEE MORE
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>

          <style jsx global>{`
            .embla {
              overflow: hidden;
            }
            .embla__container {
              display: flex;
              align-items: center;
            }
            .embla__slide {
              position: relative;
            }
            /* Slide animation for next/prev */
            .embla__container > div {
              transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .embla__container > div:not(.is-selected) {
              transform: translateX(100%);
              opacity: 0;
            }
            .embla__container > div.is-selected {
              transform: translateX(0);
              opacity: 1;
            }
            .embla__container > div.is-prev {
              transform: translateX(-100%);
              opacity: 0;
            }
          `}</style>
        </section>

        

        {/* Key Stats Section */}
        <KeyStats />
      </main>
    </>
  );
}
