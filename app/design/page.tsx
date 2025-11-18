import Image from 'next/image';
import { 
  introGalleryImages,
  howItWorksProfiles, 
  howItWorksGallery1, 
  howItWorksGallery2, 
} from './data';
import ImageGrid from '@/lib/components/design/ImageGrid';
import ProfileGallery from '@/lib/components/design/ProfileGallery';
import CuttingsStack from '@/lib/components/design/CuttingsStack';
import Highlighter from '@/lib/components/design/Highlighter';
import styles from "./page.module.css";

export default function DesignPage() {
  
  return (
    <main className={styles.main}>
      <div className={styles.greenSection}>
        {/* ... (green section content remains the same) ... */}
        <h1 className={styles.logo}>מַשְרִישִים</h1>
        <p className={styles.subtitle}>
          אפליקציה להחלפת ייחורים
        </p>
        <p className={styles.description}>
          <strong>צמחים הם אחת הדרכים הכי פשוטות לשדרג את הדירה ולשפר את האווירה, </strong>
          התחביב הזה הפך לפופולרי במיוחד בקרב צעירים וסטודנטים, שמחפשים דרך נעימה ונגישה להכניס טבע לחיים העירוניים.
          אבל כשהם מנסים להרחיב את אוסף הצמחים שלהם, הם מהר מאוד נתקלים באתגרים:
          <strong> משתלות יקרות, זמינות מוגבלת של זנים מיוחדים ותיאומים מסורבלים בקבוצות פייסבוק שונות. </strong>
        </p>
        <p className={styles.description}>
          <strong> האפליקציה שלנו מציעה פתרון פשוט וחברתי. היא מחברת בין חובבי צמחים לצורך החלפה של ייחורים, בצורה קלה מתמיד. </strong>
          כל משתמש באפליקציה יוצר פרופיל אישי, מעלה תמונות של הצמחים אותם רוצה להחליף מסתכל על אילו צמחים קיימים לאחרים,
          וכשיש התאמה בין שני הצדדים, נוצר מאצ&apos; והצדדים יכולים לתאם מועד החלפה נוח בזכות הקרבה הפיזית שהאפליקציה יודעת לזהות. לכל צמח מוצמד כרטיס עם פרטים כמו גיל, תנאי גידול, טיפים ותמונה עדכנית.
        </p>
        <p className={styles.description}>
          <strong> המשתמשים שלנו הם חברה צעירים בגילאי 20-35, אוהבי צמחים, גרים בעיר, חסכניים, אוהב לשתות קפה בכוס רב פעמית, קונים יד 2. </strong>
        </p>

        <div className={styles.gridSection}>
          <Highlighter
            className={`${styles.highlightTag} ${styles.markerPurple}`}
            lines={[
              { text: <span className={styles.highlightText}>תודו שהם מגניבים ויפים</span>, lineClass: "" }
            ]}
          />

          <ImageGrid
            items={introGalleryImages}
            className={styles.imageGrid}
            itemClass={styles.gridImage}
            size={{ w: 97.008, h: 120.966 }}
          />
        </div>
      </div>

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

          {/* Single container for the two stacks */}
          <div className={styles.cuttingsStackContainer}>
            
            {/* Right Stack */}
            <CuttingsStack
              stackClass={styles.singleCuttingsStack}
              items={[
                { src: "how-it-works-gallery-profile2-03.png", w: 112.302, h: 174.028, className: `${styles.cuttingsImage} ${styles.cuttingsImageBack2}` },
                { src: "how-it-works-gallery-profile2-01.png", w: 125.137, h: 166.849, className: `${styles.cuttingsImage} ${styles.cuttingsImageBack1}` },
                { src: "how-it-works-gallery-profile2-02.jpg",  w: 136.869, h: 182.431, className: `${styles.cuttingsImage} ${styles.cuttingsImageFront}` },
              ]}
            />

            {/* Left Stack */}
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
      </div>
    </main>
  );
}