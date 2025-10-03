// import React from 'react';
import React, { useState } from 'react';
import { Award } from 'lucide-react';
import CertificateCard, { Certificate } from './CertificateCard';

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

const certificates: Certificate[] = [
    {
        title: 'Prompt Engineering',
        issuer: 'Infosys Springboard',
        date: 'Nov 2024',
        link: 'https://drive.google.com/file/d/1YaT06AE2GZdOXeA9bzx69TiRokPpUZ7r/view?usp=sharing', // Add PDF link here
        description: 'Mastered the art of designing, refining, and optimizing prompts for advanced AI models.'
    },
    {
        title: 'OpenAI Generative Pre-trained Transformer 3 (GPT-3) for Developers',
        issuer: 'Infosys Springboard',
        date: 'Nov 2024',
        link: 'https://drive.google.com/file/d/1zzJhrxVBUwEVLvkDDvZGaDYlTyrKtxGf/view?usp=drive_link', // Add PDF link here
        description: 'Completed hands-on training in building applications using GPT-3, including prompt design and API integration.'
    },
    {
        title: 'Introduction to OpenAI GPT Models',
        issuer: 'Infosys Springboard',
        date: 'Nov 2024',
        link: 'https://drive.google.com/file/d/1mN5B6_hP_frvzE3nYCM_Z-vUxeKnvRYu/view?usp=drive_link', // Add PDF link here
        description: 'Gained foundational knowledge of OpenAI GPT models, their architecture, and practical use cases.'
    },
    {
        title: 'Applied Generative AI Certification',
        issuer: 'Infosys Springboard',
        date: 'Nov 2024',
        link: 'https://drive.google.com/file/d/1NOr-bwdxC3s7oA01QBbc59NiH2LPT3lg/view?usp=drive_link', // Add PDF link here
        description: 'Demonstrated expertise in applying generative AI techniques to solve real-world problems.'
    },
    {
        title: 'AI-first Software Engineering',
        issuer: 'Infosys Springboard',
        date: 'Nov 2024',
        link: 'https://drive.google.com/file/d/1D6sI_Pc9kr_Q6qWkY1jT8SFFozND1ITv/view?usp=drive_link', // Add PDF link here
        description: 'Certified in modern software engineering practices with a focus on AI-first development.'
    },
];

const CertificatesSection: React.FC = () => (
    <section id="certificates" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 tracking-tight flex items-center justify-center gap-2">
                    <EmojiRenderer 
                        emoji="🏅" 
                        fallbackIcon={<Award className="text-4xl md:text-5xl lg:text-6xl text-cyan-400" />}
                        className="text-4xl md:text-5xl lg:text-6xl align-middle" 
                        style={{marginBottom: '-0.2em'}} 
                    />
                    Certificate <span className="bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-pulse">Gallery</span>
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 max-w-2xl mx-auto mb-4 px-4 flex items-center justify-center gap-1">
                    <EmojiRenderer 
                        emoji="⭐" 
                        fallbackIcon={<Award className="text-xl md:text-2xl lg:text-3xl text-purple-400" />}
                        className="text-xl md:text-2xl lg:text-3xl align-middle" 
                        style={{marginBottom: '-0.15em'}} 
                    />
                    A showcase of my verified achievements and credentials
                </p>
                <div className="flex justify-center space-x-2">
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-300"></div>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse delay-700"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {certificates.map((cert) => (
                    <CertificateCard key={cert.title + cert.issuer} certificate={cert} />
                ))}
            </div>
        </div>
    </section>
);

export default CertificatesSection;
