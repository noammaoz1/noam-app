import { ReactNode } from 'react';

type HighlighterLine = {
  lineClass: string;
  text: ReactNode;
};

type HighlighterProps = {
  lines: HighlighterLine[];
  className: string;
};

export default function Highlighter({
  lines,
  className,
}: HighlighterProps) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className={line.lineClass}>
          <span>{line.text}</span>
        </span>
      ))}
    </span>
  );
}
