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
        cursorStyle="|"
        typeSpeed={75}
        deleteSpeed={70}
        delaySpeed={2000}
      />
    </h1>
  );
};

export default TypingHeader;
