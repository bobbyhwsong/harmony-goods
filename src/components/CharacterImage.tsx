import React from 'react';
import { motion } from 'framer-motion';

interface CharacterImageProps {
  src: string;
  alt: string;
  className?: string;
  animate?: boolean;
}

const CharacterImage: React.FC<CharacterImageProps> = ({ 
  src, 
  alt, 
  className = '',
  animate = true 
}) => {
  return animate ? (
    <motion.img
      src={src}
      alt={alt}
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      drag={false}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
    />
  ) : (
    <img src={src} alt={alt} className={className} />
  );
};

export default CharacterImage;