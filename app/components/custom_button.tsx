import React from 'react';

interface GameButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  backgroundColor?: string;
  shadowColor?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const GameButton: React.FC<GameButtonProps> = ({
  children,
  size = 'md',
  backgroundColor = 'var(--primary)',
  shadowColor = 'var(--borderAccent)',
  className = '',
  onClick,
  disabled = false,
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Base button classes
  const baseClasses = `font-bold rounded-lg transition-all duration-200 focus:outline-none ${
    disabled 
      ? 'opacity-70 cursor-not-allowed' 
      : 'active:translate-y-1 active:shadow-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50'
  } ${className}`;

  // Calculate dynamic styles
  const buttonStyles = {
    boxShadow: disabled ? 'none' : `0 4px 0 ${shadowColor}, 0 5px 5px rgba(0, 0, 0, 0.1)`,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`bg-orange-400 ${baseClasses} ${sizeClasses[size]}`}
      style={buttonStyles}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GameButton;