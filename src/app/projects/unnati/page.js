"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './unnati.module.css';

const images = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    
  ]; // Replace with actual image paths
  
  const scrollVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
          repeatDelay: 0
        },
      },
    },
  };

const Unnati = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Background Overlay */}
      <div className={styles.backgroundOverlay}></div>

      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.logoContainer}>
          <img src="/unnati-logo.png" alt="Unnati Logo" className={styles.logo} />
        </div>
       
        <h2 className={styles.subtitle}>Save the Environment, Spread Education</h2>
      </div>

      
      {/* Auto Scrolling Image Section */}
      <div className={styles.sliderContainer}>
        <motion.div 
          className={styles.imageSlider} 
          variants={scrollVariants} 
          animate="animate"
          initial="initial"
        >
          <div className={styles.imageTrack}>
            {/* First set of images */}
            {images.map((img, index) => (
              <img key={`first-${index}`} src={img} className={styles.sliderImage} alt="Project Action" />
            ))}
            {/* Second set of images */}
            {images.map((img, index) => (
              <img key={`second-${index}`} src={img} className={styles.sliderImage} alt="Project Action" />
            ))}
            {/* Third set of images for smoother transition */}
            {images.map((img, index) => (
              <img key={`third-${index}`} src={img} className={styles.sliderImage} alt="Project Action" />
            ))}
          </div>
        </motion.div>
      </div>


      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.paperCard}>
          <h2>About Unnati</h2>
          <p>
          Project Unnati is a deeply impactful initiative dedicated to transforming waste paper into valuable educational resources for underprivileged children. By recycling discarded paper into notebooks and stationery, the project not only promotes environmental conservation but also ensures access to essential learning materials for those who need them the most.
          This initiative serves as a bridge between sustainability and education, highlighting the power of small actions in creating meaningful change. Through collective efforts, Project Unnati aspires to empower young minds, nurture environmental responsibility, and inspire communities to contribute to a greener, more inclusive, and knowledge-driven future.
          </p>
        </div>

        <div className={styles.paperCard}>
          <h2>Our Mission</h2>
          <p>
          Project Unnati aims to transform waste into opportunity by recycling discarded paper into notebooks and stationery for underprivileged children. By blending environmental responsibility with educational support, we work toward a cleaner, greener world and empower young minds with the tools they need to learn.
          Our vision is to inspire communities to adopt sustainable practices and foster a culture of environmental stewardship. Through these efforts, we hope to create a future where waste is repurposed for good and education is accessible to all.
          </p>
        </div>

        <div className={styles.paperCard}>
          <h2>Key Objectives</h2>
          <ul>
            <li>Recycle Waste Paper: Transform discarded paper into notebooks and stationery items.</li>
            <li>Support Education: Provide essential supplies to underprivileged children, promoting learning.</li>
            <li>Promote Sustainability: Encourage eco-friendly practices by reducing paper waste.</li>
            <li>Foster Community Awareness: Inspire communities to embrace recycling and environmental protection.</li>
            <li>Contribute to Green Goals: Advocate for a cleaner, greener, and more sustainable future.</li>
            
          </ul>
        </div>

        <div className={styles.paperCard}>
          <h2>Impact</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <h3>500+</h3>
              <p>Trees Planted</p>
            </div>
            <div className={styles.statBox}>
              <h3>1000+</h3>
              <p>Students Educated</p>
            </div>
            <div className={styles.statBox}>
              <h3>20+</h3>
              <p>Communities Reached</p>
            </div>
            <div className={styles.statBox}>
              <h3>50+</h3>
              <p>Workshops Conducted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className={styles.partnersSection}>
        <h2>Our Valued Partners</h2>
        <div className={styles.partnersGrid}>
          <div className={styles.partnerCard}>
            <div className={styles.logoPlaceholder}>
              <img src="/slide1.jpg" alt="Bal Bhawan International School" />
            </div>
            <p>Bal Bhawan International School, Dwarka</p>
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.logoPlaceholder}>
              <img src="/slide2.jpg" alt="NC Jindal Public School" />
            </div>
            <p>NC Jindal Public School, Punjabi Bagh</p>
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.logoPlaceholder}>
              <img src="/slide3.jpg" alt="The Maurya School" />
            </div>
            <p>The Maurya School,<br />F-Block, Palam Vihar, Gurgaon</p>
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.logoPlaceholder}>
              <img src="/slide1.jpg" alt="Amity International School" />
            </div>
            <p>Amity International School, Sector 43, Gurugram</p>
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.logoPlaceholder}>
              <img src="/slide2.jpg" alt="Army Public School" />
            </div>
            <p>Army Public School, Delhi Cantt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unnati;
