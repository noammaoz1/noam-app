import { 
  introGalleryImages,
  howItWorksProfiles, 
  howItWorksGallery1, 
  howItWorksGallery2, 
} from './data';
import GreenSection from './GreenSection';
import HowItWorksSection from './HowItWorksSection';
import AppFeatures from "@/lib/components/design/AppFeatures";

import styles from "./page.module.css";

export default function DesignPage() {
  
  return (
    <main className={styles.main}>
      <GreenSection introGalleryImages={introGalleryImages} />
      <HowItWorksSection 
        howItWorksProfiles={howItWorksProfiles}
        howItWorksGallery1={howItWorksGallery1}
        howItWorksGallery2={howItWorksGallery2}
      />
      <AppFeatures />
    </main>
  );
}