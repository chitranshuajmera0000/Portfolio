import React, { useState } from 'react';

// Simple emoji renderer using Unicode conversion (no external dependencies)
const EmojiRenderer = ({ emoji, fallbackIcon, className, style }: { 
  emoji?: string; 
  fallbackIcon?: React.ReactNode; 
  className?: string; 
  style?: React.CSSProperties 
}) => {
  if (!emoji) {
    return fallbackIcon ? <span className={className} style={style}>{fallbackIcon}</span> : null;
  }

  const getEmojiCodepoint = (emoji: string) => {
    return Array.from(emoji)
      .map(char => char.codePointAt(0)?.toString(16).padStart(4, '0'))
      .join('-')
      .toLowerCase();
  };

  const codepoint = getEmojiCodepoint(emoji);
  const emojiUrl = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codepoint}.svg`;

  const [imageError, setImageError] = useState(false);

  if (imageError && fallbackIcon) {
    return <span className={className} style={style}>{fallbackIcon}</span>;
  }

  return (
    <img
      src={emojiUrl}
      alt="emoji"
      className={className}
      style={{ 
        display: 'inline-block', 
        width: '1em', 
        height: '1em', 
        verticalAlign: '-0.125em',
        ...style 
      }}
      onError={() => setImageError(true)}
    />
  );
};

export interface Certificate {
    title: string;
    issuer: string;
    date: string;
    link?: string;
    description?: string;
}

interface CertificateCardProps {
    certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => (
    <div className="relative bg-gradient-to-br from-slate-800/40 via-gray-800/30 to-slate-900/60 border border-gray-600/30 rounded-2xl p-6 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
        <div className="flex items-center gap-3 mb-2">
            <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {certificate.title}
            </h4>
        </div>
        <p className="text-gray-300 mb-1">
            <span className="font-semibold text-cyan-300">{certificate.issuer}</span> &middot; <span className="text-sm">{certificate.date}</span>
        </p>
        {certificate.description && (
            <p className="text-gray-400 text-sm mb-2">{certificate.description}</p>
        )}
        {certificate.link && (
            <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-lg bg-transparent text-cyan-300 font-semibold text-base border border-cyan-400/60 hover:border-purple-400/80 hover:text-purple-300 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-none"
                style={{ minWidth: 170, justifyContent: 'center', letterSpacing: '0.02em', backdropFilter: 'blur(2px)' }}
            >
                <EmojiRenderer emoji="🔗" fallbackIcon={<span className="text-lg">🔗</span>} className="text-lg" /> View Certificate
            </a>
        )}
    </div>
);

export default CertificateCard;
