'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './about.module.css';

const About = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    
    const steps1 = 100 / (duration / interval);
    const steps2 = 70 / (duration / interval);
    const steps3 = 500 / (duration / interval);

    const timer1 = setInterval(() => {
      setCount1(prev => prev < 100 ? prev + steps1 : 100);
    }, interval);

    const timer2 = setInterval(() => {
      setCount2(prev => prev < 70 ? prev + steps2 : 70);
    }, interval);

    const timer3 = setInterval(() => {
      setCount3(prev => prev < 500 ? prev + steps3 : 500);
    }, interval);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.heading}>Rotaract Club of Delhi Dynamic Leaders</h1>
    
      <p className={styles.quote}>
        "We aim to something something something something  "
      </p>

      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src="/goal-image3.jpg"
            alt="Our Goal"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className={styles.textContent}>
          <h3 className="hover:scale-105 transition-transform duration-300 ease-in-out">
            OUR GOAL
          </h3>
          <ul>
            <li>RCDDL is the best club......</li>
             <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nullam vehicula nisi eget arcu gravida, at aliquet mi fermentum. 
  Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, 
  vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, 
  ultrices nec congue eget, auctor vitae massa. 
  Fusce luctus vestibulum augue ut aliquet..</li>
            </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src="/vision-image1.jpg"
            alt="Our Vision"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className={styles.textContent}>
          <h3 className="hover:scale-105 transition-transform duration-300 ease-in-out">
            OUR VISION
          </h3>
          <ul>
          <li>RCDDL is the best club...... </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nullam vehicula nisi eget arcu gravida, at aliquet mi fermentum. 
  Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, 
  vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, 
  ultrices nec congue eget, auctor vitae massa. 
  Fusce luctus vestibulum augue ut aliquet...</li>
          </ul>
        </div>
      </section>

      <section className={styles.statsSection}>
        <h2 className={styles.statsHeading}>KEY STATS</h2>
        <div className={styles.statsContainer}>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>{Math.round(count1)}+</div>
            <div className={styles.statLabel}>Events</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>{Math.round(count2)}+</div>
            <div className={styles.statLabel}>Members</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>{Math.round(count3)}+</div>
            <div className={styles.statLabel}>Lives Impacted</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;