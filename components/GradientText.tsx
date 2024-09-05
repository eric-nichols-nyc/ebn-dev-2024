import React from 'react';

interface GradientTextProps {
  colors: string[];
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ colors, children, className = '' }) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <span className={className} style={gradientStyle}>
      {children}
    </span>
  );
};
