'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const duration = 500;
    const interval = 5;
    
    const steps1 = 100 / (duration / interval);
    const steps2 = 70 / (duration / interval);
    const steps3 = 15000  / (duration / interval);

    const timer1 = setInterval(() => {
      setCount1(prev => prev < 100 ? prev + steps1 : 150);
    }, interval);

    const timer2 = setInterval(() => {
      setCount2(prev => prev < 70 ? prev + steps2 : 70);
    }, interval);

    const timer3 = setInterval(() => {
      setCount3(prev => prev < 15000 ? prev + steps3 : 15000);
    }, interval);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#5B2333] mb-6">
          Rotaract Club of Delhi Dynamic Leaders
        </h1>
        
        <p className="text-xl text-center text-gray-600 italic mb-12">
          &ldquo;Leading with Purpose, Serving with Passion&rdquo;
        </p>

        {/* Our Goal Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-xl overflow-hidden border-4 border-[#5B2333]">
            <Image
              src="/goal.jpg"
              alt="Our Goal"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#5B2333] mb-4 hover:scale-105 transition-transform duration-300">
              OUR GOAL
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Rotaract Club of Delhi Dynamic Leaders is dedicated to fostering leadership, service, and innovation among young professionals. Our goal is to design and implement impactful initiatives that address critical social challenges, empower underprivileged communities, and promote sustainable development. Through strategic collaborations, capacity-building programs, and community-driven projects, we aim to cultivate a culture of proactive engagement and meaningful change.
            </p>
          </div>
        </motion.section>

        {/* Our Vision Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12 flex flex-col md:flex-row-reverse items-center gap-8"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-xl overflow-hidden border-4 border-[#5B2333]">
            <Image
              src="/vision.jpg"
              alt="Our Vision"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#5B2333] mb-4 hover:scale-105 transition-transform duration-300">
              OUR VISION
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a society where young leaders drive transformative impact through service, innovation, and collaboration. Our mission is to create a network of socially responsible individuals who are committed to ethical leadership and sustainable progress. By promoting volunteerism, skill development, and inclusive growth, we strive to build a future where collective efforts lead to long-term, measurable change in communities and beyond.
            </p>
          </div>
        </motion.section>

        

        {/* Stats Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-[#5B2333] mb-8">KEY STATS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#5B2333] mb-2">{Math.round(count1)}+</div>
              <div className="text-gray-600 uppercase">Events</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#5B2333] mb-2">{Math.round(count2)}+</div>
              <div className="text-gray-600 uppercase">Members</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#5B2333] mb-2">{Math.round(count3)}+</div>
              <div className="text-gray-600 uppercase">Lives Impacted</div>
            </div>
          </div>
        </motion.section>

        {/* Banner Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#5B2333] rounded-xl shadow-lg p-8 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            Chartered in 2023
          </h2>
        </motion.section>

        {/* Charter President Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-[#5B2333]">
            <Image
              src="/rajat.png"
              alt="Charter President"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#5B2333] mb-4">CHARTER PRESIDENT</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Under the visionary leadership of our Charter President, Rotaract Club of Delhi Dynamic Leaders has emerged as one of the most active and impactful clubs in District 3011. His dedication to service and commitment to excellence has set the foundation for our club&apos;s remarkable achievements since our chartering in July 2023.
            </p>
          </div>
        </motion.section>

        {/* Legacy Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#5B2333] text-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Legacy of Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-6">
                Rotaract Club of Delhi Dynamic Leaders is one of the most active and the only self-sponsored Rotaract club in Rotary District 3011, proudly chartered on July 28th, 2023.
              </p>
              <p className="mb-6">
                Many of these members had previously been part of District 3011 and were encouraged to rejoin, forming a dynamic team of over 20+ individuals with 6-10 years of Rotaract experience.
              </p>
              <p>
                Today, we boast a dedicated team of 50 members, aiming to bring the magic of rotary to a new generation of Rotaractors.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold mb-2">198+</div>
                  <div className="text-sm">Events Executed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold mb-2">90+</div>
                  <div className="text-sm">Letterhead Exchanges</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm">RI Districts Reached</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm">Active Members</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Recognition & Awards</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span>🏆</span>
                    <span>Best Rotaract Club Award by DG Rtn. Jeetender Gupta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🏆</span>
                    <span>5 Club Awards at Safarnama District Thanksgiving</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🏆</span>
                    <span>20+ Individual Awards under PHF Rtr. Kriti Malhotra</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        
      </div>
    </main>
  );
};

export default About;