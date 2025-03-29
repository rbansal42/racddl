'use client';
import React from 'react';
import styles from './gallery.module.css';
import Image from 'next/image';

const images = [
  '/galleryImages/_MG_4857.jpg',
  '/galleryImages/8bb1dfc0-8cfe-4c11-9e20-a8ab24f0b534.jpg',
  '/galleryImages/20250215_121101.jpg',
  '/galleryImages/DSC_9055.jpg',
  '/galleryImages/DSC_9059.jpg',
  '/galleryImages/DSC_9223.jpg',
  '/galleryImages/DSC_9254.jpg',
  '/galleryImages/DSC_9260.jpg',
  '/galleryImages/DSC_9267.jpg',
  '/galleryImages/DSC_9269.jpg',
  '/galleryImages/DSC_9270.jpg',
  '/galleryImages/DSC_9336.jpg',
  '/galleryImages/IMG_3040.HEIC',
  '/galleryImages/IMG_3063.HEIC',
  '/galleryImages/IMG_4331.HEIC',
  '/galleryImages/IMG_4356.HEIC',
  '/galleryImages/IMG_4370.HEIC',
  '/galleryImages/IMG_4955.HEIC',
  '/galleryImages/IMG_6532.JPG',
  '/galleryImages/IMG_6545.JPG',
  '/galleryImages/IMG_6937.HEIC',
  '/galleryImages/IMG_7023.HEIC',
  '/galleryImages/IMG_7036.HEIC',
  '/galleryImages/IMG_7424.HEIC',
  '/galleryImages/IMG_9309.HEIC',
  '/galleryImages/IMG_9755.jpg',
  '/galleryImages/IMG_9771.jpg',
  '/galleryImages/IMG_9792.jpg',
  '/galleryImages/IMG_9812.jpg',
  '/galleryImages/IMG_9813.jpg',
  '/galleryImages/IMG_9821.jpg',
  '/galleryImages/IMG_20250119_141328.jpg',
  '/galleryImages/IMG-20241227-WA0197.jpg',
  '/galleryImages/IMG-20241229-WA0164.jpg',
  '/galleryImages/IMG-20241231-WA0068.jpg',
  '/galleryImages/IMG20240922150911.heic',
  '/galleryImages/IMG20241019180425.jpg',
  '/galleryImages/IMG20241109161614.jpg',
  '/galleryImages/IMG20241109171155.jpg',
  '/galleryImages/IMG20250123191424.jpg',
  '/galleryImages/IMG20250123193923.jpg',
  '/galleryImages/photo_20241228_005746.jpg',
  '/galleryImages/Rac Hansraj X Rac DDL.jpg',
  '/galleryImages/Rac RVCE X Rac DDL .jpg',
  '/galleryImages/Screenshot 2024-11-16 150649.png',
  '/galleryImages/Screenshot 2024-11-16 220522.png',
  '/galleryImages/Screenshot 2024-11-16 at 7.25.00 PM.png',
  '/galleryImages/Screenshot 2024-11-16 at 7.50.37 PM.png',
  '/galleryImages/Screenshot 2024-11-25 213546.png',
  '/galleryImages/Screenshot_2024-10-29-15-01-16-81_ef634ab0...',
  '/galleryImages/WhatsApp Image 2024-11-01 at 19.33.20 (1).jpeg',
  '/galleryImages/WhatsApp Image 2024-11-01 at 19.33.20.jpeg',
  '/galleryImages/WhatsApp Image 2024-11-25 at 10.21.29.jpeg',
  '/galleryImages/WhatsApp Image 2024-11-25 at 10.21.30.jpeg',
];

const GalleryClient = () => {
  // Function to get random size class
  const getRandomSize = () => {
    const sizes = [
      styles.normal,
      styles.wide,
      styles.tall,
      styles.large
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.heading}>Our Gallery</h1>
      <div className={styles.galleryWrapper}>
        <div className={styles.masonryGrid}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.imageContainer} ${getRandomSize()}`}
            >
              <Image 
                src={image} 
                alt={`Gallery ${index + 1}`} 
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryClient; 