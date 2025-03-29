"use client"; // Required for Turbopack compatibility
import React from "react";
import styles from "./ecosevika.module.css";
import Image from 'next/image';

const activities = [
  {
    image: "/ecosevika/activity1.jpg",
    //title: "Tree Plantation Drive"
  },
  {
    image: "/ecosevika/activity2.jpg",
    //title: "Waste Management"
  },
  {
    image: "/ecosevika/activity3.jpg",
    //title: "Community Gardens"
  },
  {
    image: "/ecosevika/activity4.jpg",
    //title: "Environmental Education"
  },
  {
    image: "/ecosevika/activity5.jpg",
    //title: "Clean-up Drive"
  }
];

const initiatives = [
  {
    title: "Women Empowerment",
    description: "Empowering women through providing them a stable source of income and Vocational training"
  },
  {
    title: "Skill Development",
    description: "Providing vocational training and skill development opportunities to empower women"
  },
  {
    title: "Upcycling Clothes",
    description: "Encouraging creativity and resourcefulness through upcycling old clothes into usable accessories"
  }
];

const EcoSevika = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.logoContainer}>
          <Image 
            src="/ecosevika-logo.png" 
            alt="EcoSevika Logo" 
            width={200}
            height={200}
            className={styles.logo} 
          />
        </div>
        <h2 className={styles.subtitle}>Empowering Women, Upcycling Futures</h2>
      </div>

      {/* Image Grid */}
      <div className={styles.imageGrid}>
        {activities.map((activity, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image 
              src={activity.image} 
              alt={activity.title} 
              width={300}
              height={200}
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageTitle}>{activity.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <div className={styles.contentSection}>
        <div className={styles.textBox}>
          <h2 className={styles.sectionTitle}>About EcoSevika</h2>
          <p className={styles.sectionText}>
          Eco Sevika is a transformative initiative by the Rotaract Club of Delhi Dynamic Leaders dedicated to women&apos;s empowerment and environmental sustainability. This project upcycles discarded bedsheets into eco-friendly cloth bags, providing underprivileged women with a stable livelihood and vocational skills. By blending skill development, financial independence, and environmental impact, Eco Sevika has empowered 20+ women, replaced 5,000+ plastic bags, and upcycled 500+ kg of fabric. Through strategic collaborations, training programs, and sustainable business models, the project fosters self-reliance, circular economy, and community upliftment - proving that small steps can create a lasting impact.
          </p>
        </div>

        <div className={styles.textBox}>
          <h2 className={styles.sectionTitle}>Our Initiatives</h2>
          <div className={styles.initiativeGrid}>
            {initiatives.map((initiative, index) => (
              <div key={index} className={styles.initiativeItem}>
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.textBox}>
          <h2 className={styles.sectionTitle}>Our Impact</h2>
          <p className={styles.sectionText}>
            Through strategic partnerships with communities, educational institutions, and local 
            organizations, we&apos;re creating lasting environmental change and fostering eco-conscious 
            behaviors across communities.
          </p>
          <ul className={styles.impactList}>
            <li>20+ Women Empowered – More than 20 women from marginalized backgrounds have been trained in sewing and upcycling, providing them with a stable source of income to support their families.</li>
            <li>5,000+ Plastic Bags Replaced – By using Eco Sevika&apos;s cloth bags, we have successfully reduced the usage of plastic bags by 5,000+ in our community.</li>
            <li>100+ kg of Fabric Upcycled – The project has upcycled 500+ kg of fabric, diverting waste from landfills and promoting a circular economy.</li>
            <li>500+ Cloth Bags Produced – Eco Sevika has produced 500+ cloth bags, which have been distributed to the community, local markets, schools, and organizations.</li>
            <li>50+ Volunteers – Team Eco Sevika has 50+ volunteers who have been working towards the betterment of the community.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EcoSevika;
