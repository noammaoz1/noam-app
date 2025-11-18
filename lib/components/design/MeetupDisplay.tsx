import React from 'react';
import Image from 'next/image';
import Highlighter from './Highlighter';
import styles from './MeetupDisplay.module.css';

interface MeetupDisplayProps {
  imageSrc: string;
  imageAlt: string;
}

export default function MeetupDisplay({ imageSrc, imageAlt }: MeetupDisplayProps) {
  return (
    <div className={styles.container}>

        <div className={styles.badgeWrapper}>
          <Image
            src="/icons/badge15.svg"
            alt="15 Badge"
            width={83.35}
            height={83.35}
            className={styles.badgeImage}
          />
        </div>

        {/* The Image */}
        <div className={styles.imageContainer}>
           <Image
            src={`/design-imgs/${imageSrc}`}
            alt={imageAlt}
            width={388.03}
            height={629.936}
            className={styles.mainImage}
          />

        {/* Highlighter Text */}
        <div className={styles.highlighterWrapper}>
           <Highlighter
            className={styles.highlighterContainer}
            lines={[
              {
                text: <span className={styles.markerText}>הן תיאמו מקום מפגש</span>,
                lineClass: styles.markerGreen
              },
              {
                text: <span className={styles.markerText}>והנה להן ייחור חדש!</span>,
                lineClass: styles.markerGreen
              }
            ]}
          />
        </div>
        </div>
      </div>
  );
}