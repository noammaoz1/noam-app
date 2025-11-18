import Image from "next/image";

type CuttingItem = {
  src: string;
  alt?: string;
  w: number;
  h: number;
  className: string;
};

type CuttingsStackProps = {
  items: CuttingItem[];
  stackClass: string;
};

export default function CuttingsStack({
  items,
  stackClass,
}: CuttingsStackProps) {
  return (
    <div className={stackClass}>
      {items.map((item, i) => (
        <Image
          key={i}
          src={`/design-imgs/${item.src}`}
          alt={item.alt || ""}
          width={item.w}
          height={item.h}
          className={item.className}
        />
      ))}
    </div>
  );
}
