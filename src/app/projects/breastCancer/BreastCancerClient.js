"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './breastCancer.module.css';
import Image from 'next/image';
const images = [
    "/bcancer1.jpg",
    "/bcancer2.jpg",
    "/bcancer3.jpg",
]; // Replace with actual breast cancer awareness campaign images

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

const BreastCancerClient = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.backgroundOverlay}></div>

            {/* Header Section */}
            <div className={styles.headerSection}>
                <div className={styles.logoContainer}>
                    <Image src="/breastCancer/logo.png" alt="Breast Cancer Awareness Logo" width={400} height={100}/>
                </div>
                <h2 className={styles.subtitle}>Early Detection Saves Lives</h2>
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
                            <Image 
                                key={`first-${index}`} 
                                src={img} 
                                width={300}
                                height={200}
                                className={styles.sliderImage} 
                                alt="Campaign Moments" 
                            />
                        ))}
                        {/* Second set of images */}
                        {images.map((img, index) => (
                            <Image 
                                key={`second-${index}`} 
                                src={img} 
                                width={300}
                                height={200}
                                className={styles.sliderImage} 
                                alt="Campaign Moments" 
                            />
                        ))}
                        {/* Third set for smooth transition */}
                        {images.map((img, index) => (
                            <Image 
                                key={`third-${index}`} 
                                src={img} 
                                width={300}
                                height={200}
                                className={styles.sliderImage} 
                                alt="Campaign Moments" 
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Content Section */}
            <div className={styles.contentSection}>
                {/* Top Row: About and Stats side by side */}
                <div className={styles.topRow}>
                    <div className={styles.infoCard}>
                        <h2>About Our Initiative</h2>
                        <p>
                            The Breast Cancer Action Group is dedicated to spreading awareness about breast cancer
                            and promoting early detection. We believe that knowledge and timely action are crucial
                            in the fight against breast cancer. Through education and community outreach, we empower
                            individuals to take charge of their health.
                        </p>
                    </div>

                    <div className={styles.statsCard}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>1000+</span>
                            <span className={styles.statLabel}>Women Educated</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10+</span>
                            <span className={styles.statLabel}>Awareness Events</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>100+</span>
                            <span className={styles.statLabel}>Volunteers</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>30+</span>
                            <span className={styles.statLabel}>Collaborating clubs</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Mission with Image */}
                <div className={styles.missionRow}>
                    <div className={styles.missionContent}>
                        <h2>Our Mission</h2>
                        <p>
                            To reduce breast cancer mortality rates through education, awareness, and support.
                            We strive to ensure that every person has access to proper information about breast
                            cancer prevention, detection, and treatment options.
                        </p>
                        <ul>
                            <li>Early Detection Awareness</li>
                            <li>Regular Screening Advocacy</li>
                            <li>Support Group Formation</li>
                            <li>Healthcare Access Information</li>
                        </ul>
                    </div>
                    <div className={styles.missionImage}>
                        <Image 
                            src="/mission-image.jpg" 
                            alt="Our Mission in Action" 
                            width={400}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreastCancerClient; 