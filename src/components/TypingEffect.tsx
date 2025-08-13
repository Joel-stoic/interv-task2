'use client';

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];      // array of texts to loop through
  typingSpeed?: number; // typing speed in ms
  deletingSpeed?: number; // deleting speed in ms
  pauseTime?: number;   // pause time after typing a full text
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [textIndex, setTextIndex] = useState(0);        // which text in array
  const [displayedText, setDisplayedText] = useState(''); // currently displayed text
  const [isDeleting, setIsDeleting] = useState(false);  // typing or deleting
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < texts[textIndex].length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].substring(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayedText.length === texts[textIndex].length) {
      // Pause before start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next text and start typing again
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, texts, textIndex, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
      {displayedText}
      <span className={`inline-block w-3 ml-1 ${blink ? 'bg-white' : 'bg-transparent'}`}>
        |
      </span>
    </h1>
  );
};

export default TypingEffect;
