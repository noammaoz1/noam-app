import Image from 'next/image';
import { 
  introGalleryImages,
  howItWorksProfiles, 
  howItWorksGallery1, 
  howItWorksGallery2, 
} from './data';
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
          <span className={`${styles.highlightTag} ${styles.markerPurple}`}>
            <span className={styles.highlightText}>
              תודו שהם מגניבים ויפים
            </span>
          </span>
          <div className={styles.imageGrid}>
            {introGalleryImages.map((filename, index) => (
              <Image
                key={index}
                src={`/design-imgs/${filename}`}
                alt={`image ${index + 1}`}
                width={97.008}
                height={120.966}
                className={styles.gridImage}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.purpleSection}>
        <h2 className={styles.purpleTitle}>
          תכלס, איך זה עובד?
        </h2>
        <div className={styles.gridSection}>
          <span className={`${styles.highlightTag} ${styles.markerGreenContainer}`}>
            <span className={styles.markerGreen}>
              <span className={styles.highlightText}>
                הכירו את <strong> מרים </strong> (22) ו<strong>נעה </strong> (28),
              </span> 
            </span>
            <span className={styles.markerGreen}>
              <span className={styles.highlightText}>
                משכונת פלורנטין בת״א. כל אחת
              </span> 
            </span>
            <span className={styles.markerGreen}>
              <span className={styles.highlightText}>
                פתחה פרופיל אישי באפליקציה בו
              </span> 
            </span>
             <span className={styles.markerGreen}>
              <span className={styles.highlightText}>
                הזינה את הפרטים שלה, ואולי
              </span> 
            </span>
             <span className={styles.markerGreen}>
              <span className={styles.highlightText}>
                ייחורים תרצה להחליף.
              </span> 
            </span>
          </span> 
                    
          <div className={styles.howItWorksLayout}>
            
            {/* Column 1 (Profile 1 + Gallery 1) */}
            <div className={styles.howItWorksColumn}>
              <Image
                key={howItWorksProfiles[0].src}
                src={`/design-imgs/${howItWorksProfiles[0].src}`}
                alt={howItWorksProfiles[0].alt}
                width={184.62}
                height={244.405}
                className={styles.profileImageItem}
              />
              {/* Grid 1 */}
              <div className={styles.galleryGrid1}>
                {howItWorksGallery1.map((img, index) => (
                  <img
                    key={index}
                    src={`/design-imgs/${img}`}
                    alt={`gallery 1 image ${index + 1}`}
                    className={styles.smallGridImage}
                  />
                ))}
              </div>
            </div>

            {/* Column 2 (Profile 2 + Gallery 2) */}
            <div className={styles.howItWorksColumn}>
               <Image
                key={howItWorksProfiles[1].src}
                src={`/design-imgs/${howItWorksProfiles[1].src}`}
                alt={howItWorksProfiles[1].alt}
                width={184.62}
                height={244.405}
                className={styles.profileImageItem}
              />
              {/* Grid 2 */}
              <div className={styles.galleryGrid2}>
                {howItWorksGallery2.map((img, index) => (
                  <Image
                    key={index}
                    src={`/design-imgs/${img}`}
                    alt={`gallery 2 image ${index + 1}`}
                    width={184.62}
                    height={244.405}
                    className={styles.smallGridImage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.howItWorksStep}>
          <div className={`${styles.markerGreenContainer} ${styles.markerStep2}`}>
            <span className={styles.markerGreen}>
              <span className={styles.highlightText}>
                על בסיס הנתונים שהן הזינו
              </span> 
            </span>
            <span className={styles.markerGreen}>
              <span className={styles.highlightText}>
                בפרופיל האישי, האפליקציה מציעה
              </span> 
            </span>
            <span className={styles.markerGreen}>
              <span className={styles.highlightText}>
                להן ייחורים שעשויים לעניין אותן
              </span> 
            </span>
          </div>

          {/* Single container for the two stacks */}
          <div className={styles.cuttingsStackContainer}>
            
            {/* Right Stack */}
            <div className={styles.singleCuttingsStack}>
              <Image
                key="r-back-2"
                src={`/design-imgs/how-it-works-gallery-profile2-03.png`}
                alt=""
                width={112.302}
                height={174.028}
                className={`${styles.cuttingsImage} ${styles.cuttingsImageBack2}`}
              />
              <Image
                key="r-back-1"
                src={`/design-imgs/how-it-works-gallery-profile2-01.png`}
                alt=""
                width={125.137}
                height={166.849}
                className={`${styles.cuttingsImage} ${styles.cuttingsImageBack1}`}
              />
              <Image
                key="r-front"
                src={`/design-imgs/how-it-works-gallery-profile2-02.jpg`}
                alt="Cutting stack 2 front"
                width={136.869}
                height={182.431}
                className={`${styles.cuttingsImage} ${styles.cuttingsImageFront}`}
              />
            </div>

            {/* Left Stack */}
            <div className={styles.singleCuttingsStack}>
              <Image
                key="l-back-2"
                src={`/design-imgs/how-it-works-gallery-profile1-03.png`}
                alt=""
                width={112.302}
                height={174.028}
                className={`${styles.cuttingsImage} ${styles.cuttingsImageBack2}`}
              />
              <Image
                key="l-back-1"
                src={`/design-imgs/how-it-works-gallery-profile1-05.png`}
                alt=""
                width={120.243}
                height={160.101}
                className={`${styles.cuttingsImage} ${styles.cuttingsImageBack1}`}
              />
              <Image
                key="l-front"
                src={`/design-imgs/how-it-works-gallery-profile1-02.jpg`}
                alt="Cutting stack 1 front"
                width={125.137}
                height={166.849}
                className={`${styles.cuttingsImage} ${styles.cuttingsImageFront}`}
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}