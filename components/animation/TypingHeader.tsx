'use client'
import { Typewriter } from 'react-simple-typewriter';
import React from 'react';

interface TypingHeaderProps {
  className?: string;
  words: string[];
}

const TypingHeader: React.FC<TypingHeaderProps> = ({ className = '', words }) => {
  return (
    <h1 className={className}>
      <Typewriter
        words={words}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>
  );
};

export default TypingHeader;
