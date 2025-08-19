import React, { useRef, useEffect } from 'react';
import twemoji from 'twemoji';

export interface EmojiIconProps {
  emoji: string;
  fallback: string;
  className?: string;
  style?: React.CSSProperties;
}

const EmojiIcon: React.FC<EmojiIconProps> = ({ emoji, fallback, className = "", style }) => {
  const emojiRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (emojiRef.current) {
      // Parse emoji and force SVG to scale with font size
      const parsed = twemoji.parse(emoji, { folder: 'svg', ext: '.svg' });
      // Set width/height to 1em for all SVGs
      emojiRef.current.innerHTML = parsed.replace(/<svg /g, '<svg width="1em" height="1em" ');
    }
  }, [emoji]);

  return (
    <span
      ref={emojiRef}
      className={`emoji-icon ${className}`}
      role="img"
      aria-label={fallback}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        fontSize: 'inherit',
        lineHeight: 1,
        ...style,
      }}
    />
  );
};

export default EmojiIcon;
