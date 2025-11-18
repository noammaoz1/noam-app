import React from "react";
import Image from "next/image";
import styles from "./AppFeatures.module.css";

export default function AppFeatures() {
  return (
    <section className={styles.section}>

      <div className={styles.itemsRow}>

        {/* Item 1 */}
        <div className={styles.item}>
          <span className={styles.itemTitle}>צוברים אמינות</span>
          <Image
            src="/icons/StarsIcon.svg"
            alt="Stars Icon"
            width={94.376}
            height={34.847}
            className={styles.icon}
          />
        </div>

        {/* Item 2 */}
        <div className={styles.item}>
          <span className={styles.itemTitle}>מעודד קיימות</span>
          <Image
            src="/icons/LeavesIcon.svg"
            alt="Leaves Icon"
            width={28.493}
            height={41.443}
            className={styles.icon}
          />
        </div>
        
        {/* Item 3 */}  
        <div className={styles.item}>
          <span className={styles.itemTitle}>פתרון חברתי</span>
          <Image
            src="/icons/SocialSolutionIcon.svg"
            alt="Social Solution Icon"
            width={30.731}
            height={46.253}
            className={styles.icon}
          />
        </div>
      </div>
    </section>
  );
}