'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const carouselSlides = [
  {
    image: '/slide1.jpg',
    alt: 'Rotaract Community Service',
  },
  {
    image: '/slide2.jpg',
    alt: 'Rotaract Leadership',
  },
  {
    image: '/slide3.jpg',
    alt: 'Rotaract Events',
  },
];

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
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
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                )}
                {/* Dark overlay */}
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Rotaract Club of Delhi
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-md">
              Empowering Youth, Serving Humanity
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-3 bg-blue-600/90 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors backdrop-blur-sm"
              >
                Join Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-3 bg-white/90 text-blue-600 rounded-full font-semibold hover:bg-white transition-colors backdrop-blur-sm"
              >
                Learn More
              </motion.button>
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

      {/* Theme Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Theme Logo/Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px]"
            >
              <Image
                src="/theme-logo.png"
                alt="Creating Impactful Futures Theme"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Theme Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Creating Impactful Futures
              </h2>
              <div className="w-20 h-1 bg-blue-600"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our theme "Creating Impactful Futures" embodies our commitment to making lasting positive change in our communities. Through innovative projects, sustainable initiatives, and collaborative efforts, we strive to build a better tomorrow for everyone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This vision drives us to develop leadership skills, foster meaningful connections, and implement projects that create real, sustainable impact. Together, we're not just imagining a better future - we're actively creating it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
