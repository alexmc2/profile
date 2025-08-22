// src/components/ui/TypingAnimation.tsx
'use client';
7;
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  delay?: number;
  typingSpeed?: number;
  className?: string;
}

const TypingAnimation = ({
  text,
  delay = 0,
  typingSpeed = 50,
  className = '',
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      setShowCursor(true);
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [text, delay, typingSpeed]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: isTyping || displayedText ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="text-accent"
        >
          |
        </motion.span>
      )}
    </motion.p>
  );
};

export default TypingAnimation;
