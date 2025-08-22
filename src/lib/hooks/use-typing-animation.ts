// src/lib/hooks/use-typing-animation.ts
import { useEffect, useState } from 'react';

interface UseTypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  startTyping?: boolean;
}

export const useTypingAnimation = ({
  text,
  speed = 50,
  delay = 0,
  startTyping = true,
}: UseTypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text || !startTyping) return;

    const timer = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          setIsComplete(true);
          setIsTyping(false);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay, startTyping]);

  return { displayedText, isTyping, isComplete };
};
