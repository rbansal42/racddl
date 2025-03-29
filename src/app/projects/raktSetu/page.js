"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './raktSetu.module.css';
import Image from 'next/image';

const RaktSetu = () => {
    return (
        <div className={styles.pageContainer}>
            {/* Background Image */}
            <div className={styles.backgroundImageContainer}>
                <Image
                    src="/projects/raktSetu/raktSetu-bg.png"
                    alt="RaktSetu Background"
                    fill
                    className={styles.backgroundImage}
                    priority
                    quality={100}
                />
            </div>
            <div className={styles.backgroundOverlay}></div>

            {/* Header Section */}
            <div className={styles.headerSection}>
                <div className={styles.logoContainer}>
                    <Image 
                        src="/raktSetu-logo.png" 
                        alt="RaktSetu Logo" 
                        width={200}
                        height={200}
                        className={styles.logo} 
                    />
                </div>
                <h2 className={styles.subtitle}>Building a Bridge of Life</h2>
            </div>

            {/* Content Section */}
            <div className={styles.contentSection}>
                <div className={styles.topRow}>
                    <div className={styles.infoCard}>
                        <h2>About RaktSetu</h2>
                        <p>
                            RaktSetu is a nationwide blood donation campaign initiated by the Rotaract Club of Delhi Dynamic Leaders, 
                            RID 3011. Our mission is to create a seamless network of blood donation camps across India, ensuring that 
                            no life is lost due to blood shortage. By uniting organizations and communities, we aim to build a bridge 
                            between donors and those in need, fostering solidarity, compassion, and hope.
                        </p>
                    </div>

                    <div className={styles.initiativeCard}>
                        <h2>Join The Initiative</h2>
                        <div className={styles.initiativeList}>
                            <div className={styles.initiativeItem}>
                                <h3>Donate Blood</h3>
                                <p>Every drop counts in saving lives</p>
                            </div>
                            <div className={styles.initiativeItem}>
                                <h3>Volunteer</h3>
                                <p>Help organize camps in your area</p>
                            </div>
                            <div className={styles.initiativeItem}>
                                <h3>Partner With Us</h3>
                                <p>Corporate and NGO collaborations</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.missionRow}>
                    <div className={styles.missionContent}>
                        <h2>Our Vision</h2>
                        <p>
                            To create a robust network of blood donors and recipients across India, transcending borders 
                            and bringing communities together in the spirit of humanity.
                        </p>
                        <ul>
                            <li>Nationwide Blood Donation Camps</li>
                            <li>Corporate Partnership Programs</li>
                            <li>Community Outreach Initiatives</li>
                            <li>Emergency Blood Support</li>
                            <li>Awareness Campaigns</li>
                        </ul>
                    </div>
                    <div className={styles.missionImage}>
                        <Image 
                            src="/blood-donation.jpg" 
                            alt="Blood Donation Camp" 
                            width={400}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RaktSetu;
