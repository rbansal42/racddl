"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './projectVikas.module.css';

const images = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
]; // Replace with actual project images

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

const ProjectVikas = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.backgroundOverlay}></div>

            {/* Header Section */}
            <div className={styles.headerSection}>
                <div className={styles.logoContainer}>
                    <img src="/projectVikas-logo1.png" alt="Project Vikas Logo" className={styles.logo} />
                </div>
                <h2 className={styles.subtitle}>Empowering Through Education</h2>
            </div>

            {/* Auto Scrolling Image Section */}
            <div className={styles.sliderContainer}>
                <motion.div 
                    className={styles.imageSlider} 
                    variants={scrollVariants} 
                    animate="animate"
                >
                    <div className={styles.imageTrack}>
                        {/* First set of images */}
                        {images.map((img, index) => (
                            <img key={`first-${index}`} src={img} className={styles.sliderImage} alt="Project Activities" />
                        ))}
                        {/* Second set of images */}
                        {images.map((img, index) => (
                            <img key={`second-${index}`} src={img} className={styles.sliderImage} alt="Project Activities" />
                        ))}
                        {/* Third set for smooth transition */}
                        {images.map((img, index) => (
                            <img key={`third-${index}`} src={img} className={styles.sliderImage} alt="Project Activities" />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Content Section */}
            <div className={styles.contentSection}>
                <div className={styles.topRow}>
                    <div className={styles.infoCard}>
                        <h2>About Project Vikas</h2>
                        <p>
                            Project Vikas is dedicated to bridging the educational gap by providing quality education 
                            to underprivileged children. We believe that education is the most powerful tool for 
                            social transformation and economic empowerment. Through our centers and dedicated volunteers, 
                            we create opportunities for students to learn, grow, and build a better future.
                        </p>
                    </div>

                    <div className={styles.statsCard}>
                        <div className={styles.statItem}>
                            <h3 className={styles.statNumber}>4+</h3>
                            <p className={styles.statLabel}>Learning Centers</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3 className={styles.statNumber}>5</h3>
                            <p className={styles.statLabel}>Phases Completed</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3 className={styles.statNumber}>200+</h3>
                            <p className={styles.statLabel}>Students Upskilled</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3 className={styles.statNumber}>50+</h3>
                            <p className={styles.statLabel}>Volunteer Hours</p>
                        </div>
                    </div>
                </div>

                <div className={styles.missionRow}>
                    <div className={styles.missionContent}>
                        <h2>Our Mission</h2>
                        <p>
                            To create sustainable educational opportunities for underprivileged children, 
                            empowering them with knowledge and skills needed for a brighter future.
                        </p>
                        <ul>
                            <li>Quality Education Access</li>
                            <li>Skill Development Programs</li>
                            <li>Digital Literacy Initiative</li>
                            <li>Mentorship Support</li>
                        </ul>
                    </div>
                    <div className={styles.missionImage}>
                        <img src="/slide1.jpg" alt="Students Learning" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectVikas;
