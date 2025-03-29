'use client';
import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { useRouter } from 'next/navigation';
import styles from './projects.module.css';
import EcoSevika from './ecosevika/page';
const projectCards = [
  {
    title: "EcoSevika",
    description: "Empowering Women, Upcycling Futures",
    image: "/placeholder-landscape.jpg",
    action: "Know More",
    path: "/projects/ecosevika"
  },
  {
    title: "Unnati",
    description: "Save the Environment, Spread Education",
    image: "/placeholder-landscape.jpg",
    action: "Know More",
    path: "/projects/unnati"
  },
  {
    title: "Breast Cancer Action Group",
    description: "Early Detection Saves Lives",
    image: "/placeholder-landscape.jpg",
    action: "Know More",
    path: "/projects/breastCancer"
  },
  {
    title: "Project Vikaas",
    description: "Education is the key to success",
    image: "/placeholder-landscape.jpg",
    action: "Know More",
    path: "/projects/projectVikas"
  },
  {
    title: "Rakt Setu",
    description: "Building the bridge of life",
    image: "/placeholder-landscape.jpg",
    action: "Know More",
    path: "/projects/raktSetu"
  }
];

const eventCards = [
  {
    id: 1,
    image: "/events/RIDE.jpg",
    title: "RIDE",
    description: "Delhi Dekho was an Inter District Youth Exchange Program",
    date: "December 1, 2024",
    location: "Delhi NCR"
  },
  {
    id: 2,
    image: "/events/installation.jpg",
    title: "Installation",
    description: "Installation of team 2024-2025",
    date: "October 20, 2024",
    location: " Delhi"
  },
  // Add more events as needed
];

const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.eventCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={event.image} alt={event.title} className={styles.eventImage} />
      <div className={`${styles.eventOverlay} ${isHovered ? styles.showOverlay : ''}`}>
        <h3 className={styles.eventTitle}>{event.title}</h3>
        <p className={styles.eventDescription}>{event.description}</p>
        <div className={styles.eventDetails}>
          <span>{event.date}</span>
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const router = useRouter();
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>Our Projects</h1>
      
      <div className={styles.projectGrid}>
        {projectCards.map((card, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <div className={styles.cloudIcon}></div>
              <div className={styles.landscape}></div>
            </div>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardDescription}>{card.description}</p>
            <button 
              className={styles.actionButton}
              onClick={() => card.path && router.push(card.path)}
            >
              {card.action}
            </button>
          </div>
        ))}
      </div>

      <h1 className={`${styles.sectionTitle} ${styles.eventsTitle}`}>Our Events</h1>
      <Masonry
        breakpointCols={breakpointColumns}
        className={styles.masonryGrid}
        columnClassName={styles.masonryColumn}
      >
        {eventCards.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Masonry>
    </div>
  );
};

export default Page;
