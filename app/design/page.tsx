import Image from 'next/image';
import styles from "./page.module.css";

export default function DesignPage() {
  const imageFilenames = [
    'page1-img4.png',
    'page1-img2.png',
    'page1-img3.png',
    'page1-img1.png',
    'page1-img8.png',
    'page1-img7.png',
    'page1-img6.png',
    'page1-img5.png',
  ];
  
  return (
    <main className={styles.container}>
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
        <strong> המשתמשים שלנו הם חברה צעירים בגילאי 20-35, אוהבי צמחייה, גרים בעיר, חסכניים, אוהב לשתות קפה בכוס רב פעמית, קונים יד 2. </strong>
      </p>

      <div className={styles.gridSection}>
        <span className={`${styles.highlightTag} ${styles.markerPurple}`}>
          <span className={styles.highlightText}>
            תודו שהם מגניבים ויפים
          </span>
        </span>
        <div className={styles.imageGrid}>
          {imageFilenames.map((filename, index) => (
            <Image 
              key={index}
              // the path of the images is in public/design-imgs folder
              src={`/design-imgs/${filename}`} 
              alt={`image ${index + 1}`}            
              width={97}
              height={121}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
