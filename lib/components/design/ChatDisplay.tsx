import React from 'react';
import Highlighter from './Highlighter';
import styles from './ChatDisplay.module.css';

export default function ChatDisplay() {
  return (
    <div className={styles.container}>
      
      {/* Top Marker */}
      <div className={styles.markerWrapper}>
        <Highlighter
          className={styles.highlighterContainer}
          lines={[
            {
              text: <span className={styles.markerText}>נפתח צאט&#39; ואפשר לתאם מפגש!</span>,
              lineClass: styles.markerGreen
            }
          ]}
        />
      </div>

      {/* Chat Bubbles Area */}
      <div className={styles.chatArea}>
        
        {/* Right Bubble (dark purple) */}
        <div className={`${styles.bubble} ${styles.bubbleRight}`}>
          <p className={styles.messageText}>
            היי נעה! אשמח לדעת אם <br/>
            מתאים לך שניפגש <br/>
            השבוע להחליף?
          </p>
          <span className={styles.timestamp}>18:05</span>
        </div>

        {/* Left Bubble (light purple) */}
        <div className={`${styles.bubble} ${styles.bubbleLeft}`}>       
          <p className={styles.messageText}>
            היושש <br/>
            בטח! מה איתך ביום שלישי <br/>
            ב17:00? איפה באלך?
          </p>
          <span className={styles.timestamp}>19:20</span>
        </div>

      </div>
    </div>
  );
}