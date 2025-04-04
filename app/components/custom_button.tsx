import React from 'react';

interface GameButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  backgroundColor?: string;
  shadowColor?: string;
  className?: string;
  onClick?: () => void;
}

const GameButton: React.FC<GameButtonProps> = ({
  children,
  size = 'md',
  backgroundColor = 'var(--primary)',
  shadowColor = '#65d4d0f8',
  className = '',
  onClick,
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Base button classes
  const baseClasses = `font-bold rounded-lg transition-all duration-200 active:translate-y-1 active:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${backgroundColor}] focus:ring-opacity-50 ${className}`;

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]}`}
      style={{
        backgroundColor,
        boxShadow: `0 4px 0 ${shadowColor}, 0 5px 5px rgba(0, 0, 0, 0.1)`,
      }}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GameButton;