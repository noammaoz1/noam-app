import React from 'react';
import Highlighter from '@/lib/components/design/Highlighter';
import ImageGrid from '@/lib/components/design/ImageGrid';
import styles from "./GreenSection.module.css";

interface GreenSectionProps {
  introGalleryImages: string[];
}

export default function GreenSection({ introGalleryImages }: GreenSectionProps) {
  return (
    <div className={styles.greenSection}>
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
  );
}