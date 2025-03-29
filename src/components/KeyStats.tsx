import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const KeyStats = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const duration = 500; // 5 seconds
    const interval = 5; // Update every 20ms
    
    const steps1 = 150 / (duration / interval);
    const steps2 = 70 / (duration / interval);
    const steps3 = 15000 / (duration / interval);

    const timer1 = setInterval(() => {
      setCount1(prev => prev < 150 ? prev + steps1 : 150);
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
    <section className="py-20 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#5B2333] mb-4">
          KEY STATS
        </h2>
        <div className="w-24 h-1 bg-[#5B2333] mx-auto"></div>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-20 lg:gap-32 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-10 bg-white rounded-2xl w-64 h-48 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl flex flex-col justify-center items-center"
        >
          <div className="text-5xl font-bold text-[#5B2333] mb-4">
            {Math.round(count1)}+
          </div>
          <div className="text-lg font-medium text-[#5B2333] uppercase tracking-wide">
            Events
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-10 bg-white rounded-2xl w-64 h-48 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl flex flex-col justify-center items-center"
        >
          <div className="text-5xl font-bold text-[#5B2333] mb-4">
            {Math.round(count2)}+
          </div>
          <div className="text-lg font-medium text-[#5B2333] uppercase tracking-wide">
            Members
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-10 bg-white rounded-2xl w-64 h-48 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl flex flex-col justify-center items-center"
        >
          <div className="text-5xl font-bold text-[#5B2333] mb-4">
            {Math.round(count3)}+
          </div>
          <div className="text-lg font-medium text-[#5B2333] uppercase tracking-wide">
            Lives Impacted
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyStats; 