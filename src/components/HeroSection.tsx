'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  FiDownload,
  FiHeart,
  FiSearch,
  FiShoppingCart,
  FiUpload,
} from 'react-icons/fi';
import { FaUserAlt, FaHeadphones, FaCube } from 'react-icons/fa';
import { BsTag, BsGrid } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';

// Typing effect component
const TypingEffect: React.FC<{ texts: string[]; speed?: number }> = ({
  texts,
  speed = 100,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, textIndex, texts, speed]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="h-[140px] flex items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center">
        {displayedText}
        <span
          className={`inline-block w-2 ml-1 align-bottom ${
            blink ? 'bg-white' : 'bg-transparent'
          }`}
        >
          &nbsp;
        </span>
      </h1>
    </div>
  );
};

// Icon configurations for large screen
const iconConfig = [
  { icon: <FaCube className="text-purple-400 text-3xl" />, top: '5%', left: '10%' },
  { icon: <BsTag className="text-orange-400 text-3xl" />, top: '20%', left: '20%' },
  { icon: <FaUserAlt className="text-purple-500 text-3xl" />, top: '30%', left: '5%' },
  { icon: <FiDownload className="text-blue-300 text-3xl" />, bottom: '45%', left: '25%' },
  { icon: <FiHeart className="text-red-500 text-3xl" />, bottom: '35%', left: '10%' },
  { icon: <AiFillStar className="text-yellow-500 text-3xl" />, bottom: '25%', left: '30%' },
  { icon: <FaHeadphones className="text-gray-300 text-3xl" />, bottom: '10%', left: '45%' },
  { icon: <BsGrid className="text-orange-500 text-3xl" />, bottom: '15%', left: '10%' },
  { icon: <FiShoppingCart className="text-green-400 text-3xl" />, top: '10%', right: '10%' },
  { icon: <FiSearch className="text-blue-500 text-3xl" />, top: '40%', right: '20%' },
  { icon: <FiUpload className="text-teal-400 text-3xl" />, bottom: '35%', right: '10%' },
  { icon: <BsGrid className="text-orange-500 text-3xl" />, bottom: '15%', right: '15%' },
];

// Icon configurations for small screen
const iconConfigSmallScreen = [
  { icon: <FaCube className="text-purple-400 text-3xl" />, top: '40%', left: '5%' },
  { icon: <BsTag className="text-orange-400 text-3xl" />, top: '58%', left: '8%' },
  { icon: <FaUserAlt className="text-purple-500 text-3xl" />, top: '70%', left: '40%' },
  { icon: <FiHeart className="text-red-500 text-3xl" />, bottom: '32%', left: '75%' },
  { icon: <FiDownload className="text-blue-300 text-3xl" />, bottom: '50%', left: '85%' },
];

export default function HeroSection() {
  const exploreRef = useRef<HTMLButtonElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [buttonCenter, setButtonCenter] = useState<{ x: number; y: number } | null>(null);

  // Detect small screen width
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get center position of the explore button
  useEffect(() => {
    if (exploreRef.current) {
      const rect = exploreRef.current.getBoundingClientRect();
      setButtonCenter({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  }, [scrollY]);

  // Choose icons to show based on screen size
  const iconsToShow = isSmallScreen ? iconConfigSmallScreen : iconConfig;

  return (
    <section
      className="relative h-[100vh] text-white flex flex-col items-center justify-center text-center overflow-hidden px-6"
      style={{
        background: `
          radial-gradient(circle at 15% 50%, rgba(255, 100, 100, 0.08) 0%, transparent 55%),
          #000000
        `,
      }}
    >
      {/* Hero Content */}
      <div
        className={`z-10 max-w-2xl w-full flex flex-col items-center justify-center ${
          isSmallScreen ? 'pb-20' : ''
        }`}
      >
        <TypingEffect
          texts={[
            'Instant Payouts, Full Control, No Limits',
            'Buy Once, Download Anytime, Keep Forever',
          ]}
          speed={60}
        />
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          Your one-stop digital platform for 3D models and digital creations. <br />
          Join our community of creators and collectors today.
        </p>
        <button
          ref={exploreRef}
          className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-full hover:scale-105 transition relative z-20"
        >
          Explore all products
        </button>
      </div>

      {/* Animated Icons */}
      {iconsToShow.map((item, index) => (
        <motion.div
  key={index}
  className="absolute w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shadow-xl backdrop-blur-md"
  style={{
    top: item.top,
    left: item.left,
    right: 'right' in item ? item.right : undefined,
    bottom: 'bottom' in item ? item.bottom : undefined,
  }}
  animate={{
    x:
      scrollY > 50 && buttonCenter
        ? buttonCenter.x -
          window.innerWidth *
            (item.left
              ? parseFloat(item.left) / 100
              : 1 - ('right' in item && item.right ? parseFloat(item.right) / 100 : 0)) -
          32
        : 0,
    y:
      scrollY > 50 && buttonCenter
        ? buttonCenter.y -
          window.innerHeight *
            (item.top
              ? parseFloat(item.top) / 100
              : 1 - ('bottom' in item && item.bottom ? parseFloat(item.bottom) / 100 : 0)) -
          32
        : 0,
    opacity: scrollY > 50 ? 0 : 1,
    scale: scrollY > 50 ? 0.3 : 1,
    transition: { duration: 1, ease: 'easeInOut' },
  }}
>
  {item.icon}
</motion.div>

      ))}
    </section>
  );
}
