import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { DARK_TEXT_COLOR, LIGHT_TEXT_COLOR } from '../utlis/constants';

const taglines = [
  "Work 45, Live the Rest!",
  "Your Time’s Up — Go Home!",
  "Over 45? That’s Overtime, Buddy!",
  "Work Hard. Not 46 Hours Hard.",
  "Stop. You’ve Clocked Enough.",
  "Time’s Ticking... Toward Freedom!",
  "Beyond 45? You’re Just Showing Off.",
  "Work Ends at 45. Go Home 😡",
  "Because You Deserve a Couch After 45."
];

const RandomTagline = () => {
  const [currentTagline, setCurrentTagline] = useState('');
  const { theme } = useContext(ThemeContext);
  const textColor = theme === 'dark' ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR;

  useEffect(() => {
    const updateTagline = () => {
      const randomIndex = Math.floor(Math.random() * taglines.length);
      setCurrentTagline(taglines[randomIndex]);
    };

    updateTagline(); // initial load
    const interval = setInterval(updateTagline, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className={`${textColor} font-bold text-base mt-5`}>
      {currentTagline}
    </div>
  );
};

export default RandomTagline;
