import React from 'react';
import Image from 'next/image';
import Highlighter from '@/lib/components/design/Highlighter';
import ProfileGallery from '@/lib/components/design/ProfileGallery';
import CuttingsStack from '@/lib/components/design/CuttingsStack';
import ChatDisplay from '@/lib/components/design/ChatDisplay';
import styles from './HowItWorksSection.module.css';

interface Profile {
  src: string;
  alt: string;
}

interface HowItWorksSectionProps {
  howItWorksProfiles: Profile[];
  howItWorksGallery1: string[];
  howItWorksGallery2: string[];
}

export default function HowItWorksSection({
  howItWorksProfiles,
  howItWorksGallery1,
  howItWorksGallery2
}: HowItWorksSectionProps) {
  return (
    <div className={styles.purpleSection}>
      <h2 className={styles.purpleTitle}>
        תכלס, איך זה עובד?
      </h2>
      <div className={styles.gridSection}>
        <Highlighter
          className={styles.markerGreenContainer}
          lines={[
            {
              text: <span className={styles.highlightText}>הכירו את <strong>מרים</strong> (22) ו<strong>נעה</strong> (28),</span>,
              lineClass: styles.markerGreen
            },
            {
              text: <span className={styles.highlightText}>משכונת פלורנטין בת״א. כל אחת</span>,
              lineClass: styles.markerGreen
            },
            {
              text: <span className={styles.highlightText}>פתחה פרופיל אישי באפליקציה בו</span>,
              lineClass: styles.markerGreen
            },
            {
              text: <span className={styles.highlightText}>הזינה את הפרטים שלה, ואילו</span>,
              lineClass: styles.markerGreen
            },
            {
              text: <span className={styles.highlightText}>ייחורים תרצה להחליף.</span>,
              lineClass: styles.markerGreen
            },
          ]}
        />

        <div className={styles.howItWorksLayout}>

          {/* Column 1 (Profile 1 + Gallery 1) */}
          <ProfileGallery
            profile={{
              src: howItWorksProfiles[0].src,
              alt: howItWorksProfiles[0].alt,
              className: styles.profileImageItem,
              galleryClass: styles.galleryGrid1,
              galleryItemClass: styles.smallGridImage
            }}
            gallery={howItWorksGallery1}
            gridClass={styles.howItWorksColumn}
          />

          {/* Column 2 (Profile 2 + Gallery 2) */}
          <ProfileGallery
            profile={{
              src: howItWorksProfiles[1].src,
              alt: howItWorksProfiles[1].alt,
              className: styles.profileImageItem,
              galleryClass: styles.galleryGrid2,
              galleryItemClass: styles.smallGridImage
            }}
            gallery={howItWorksGallery2}
            gridClass={styles.howItWorksColumn}
          />
        </div>
      </div>

      <div className={styles.howItWorksStep}>
        <Highlighter
          className={`${styles.markerGreenContainer} ${styles.markerStep2}`}
          lines={[
            {
              text: <span className={styles.highlightText}>על בסיס הנתונים שהן הזינו</span>,
              lineClass: styles.markerGreen
            },
            {
              text: <span className={styles.highlightText}>בפרופיל האישי, האפליקציה מציעה</span>,
              lineClass: styles.markerGreen
            },
            {
              text: <span className={styles.highlightText}>להן ייחורים שעשויים לעניין אותן</span>,
              lineClass: styles.markerGreen
            },
          ]}
        />

        <div className={styles.cuttingsStackContainer}>
          <CuttingsStack
            stackClass={styles.singleCuttingsStack}
            items={[
              { src: "how-it-works-gallery-profile2-03.png", w: 112.302, h: 174.028, className: `${styles.cuttingsImage} ${styles.cuttingsImageBack2}` },
              { src: "how-it-works-gallery-profile2-01.png", w: 125.137, h: 166.849, className: `${styles.cuttingsImage} ${styles.cuttingsImageBack1}` },
              { src: "how-it-works-gallery-profile2-02.jpg", w: 136.869, h: 182.431, className: `${styles.cuttingsImage} ${styles.cuttingsImageFront}` },
            ]}
          />
          <CuttingsStack
            stackClass={styles.singleCuttingsStack}
            items={[
              { src: "how-it-works-gallery-profile1-03.png", w: 112.302, h: 174.028, className: `${styles.cuttingsImage} ${styles.cuttingsImageBack2}` },
              { src: "how-it-works-gallery-profile1-05.png", w: 120.243, h: 160.101, className: `${styles.cuttingsImage} ${styles.cuttingsImageBack1}` },
              { src: "how-it-works-gallery-profile1-02.jpg", w: 125.137, h: 166.849, className: `${styles.cuttingsImage} ${styles.cuttingsImageFront}` },
            ]}
          />
        </div>
      </div>

      <div className={styles.howItWorksStep}>
        <Highlighter
          className={`${styles.markerGreenContainer} ${styles.markerStep3}`}
          lines={[
            { text: <span className={styles.highlightText}>וברגע שהן החליקו ימינה</span>, lineClass: styles.markerGreen },
            { text: <span className={styles.highlightText}>לייחור אחת של השנייה...</span>, lineClass: styles.markerGreen },
          ]}
        />

        <div className={styles.matchContainer}>
          <Image src={`/design-imgs/how-it-works-gallery-profile1-02.jpg`} alt="Miryam's cutting" width={150} height={180} className={styles.matchImage} />
          <Image src={`/design-imgs/how-it-works-gallery-profile2-02.jpg`} alt="Noa's cutting" width={150} height={180} className={styles.matchImage} />
          <Highlighter
            className={`${styles.highlightTag} ${styles.markerMatch}`}
            lines={[
              { text: <span className={styles.highlightText}>יש התאמה!</span>, lineClass: "" }
            ]}
          />
        </div>
      </div>
      <div className={styles.howItWorksStep}>
        <ChatDisplay />
      </div>
    </div>
  );
}