import Image from 'next/image';
import { introGalleryImages, howItWorksProfiles, howItWorksGallery1, howItWorksGallery2 } from './data';
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
          {/* Note: You had howItWorksImageGrid here, I am removing it as it was incorrect */}.
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
            {/* ... (green marker spans remain the same) ... */}
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
                  <img
                    key={index}
                    src={`/design-imgs/${img}`}
                    alt={`gallery 2 image ${index + 1}`}
                    className={styles.smallGridImage}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}