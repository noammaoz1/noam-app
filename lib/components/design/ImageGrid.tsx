import Image from "next/image";

type ImageGridProps = {
  items: string[];
  className?: string;
  itemClass?: string;
  size: {
    w: number;
    h: number;
  };
};

export default function ImageGrid({ items, className, itemClass, size }: ImageGridProps) {
  return (
    <div className={className}>
      {items.map((src, i) => (
        <Image
          key={i}
          src={`/design-imgs/${src}`}
          alt={`image ${i + 1}`}
          width={size.w}
          height={size.h}
          className={itemClass}
        />
      ))}
    </div>
  );
}
