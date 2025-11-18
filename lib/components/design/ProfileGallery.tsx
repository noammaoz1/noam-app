import Image from "next/image";

type ProfileGalleryProps = {
  profile: {
    src: string;
    alt: string;
    className?: string;
    galleryClass?: string;
    galleryItemClass?: string;
  };
  gallery: string[];
  gridClass?: string;
};

export default function ProfileGallery({
  profile,
  gallery,
  gridClass,
}: ProfileGalleryProps) {
  return (
    <div className={gridClass}>
      <Image
        src={`/design-imgs/${profile.src}`}
        alt={profile.alt}
        width={184.62}
        height={244.405}
        className={profile.className}
      />

      <div className={profile.galleryClass}>
        {gallery.map((img, index) => (
          <Image
            key={index}
            src={`/design-imgs/${img}`}
            alt=""
            width={184.62}
            height={244.405}
            className={profile.galleryItemClass}
          />
        ))}
      </div>
    </div>
  );
}
