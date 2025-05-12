import { ReactionsProps } from '@/app/account/types/stream_types';
import { useEffect } from 'react';

const Reactions = ({ reactions, setReactions }: ReactionsProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setReactions(prev => prev.filter(r => Date.now() - r.id < 3000));
    }, 100);

    return () => clearInterval(interval);
  }, [setReactions]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {reactions.map((reaction) => (
        <div
          key={reaction.id}
          className="absolute text-xl animate-float"
          style={{
            left: `${reaction.x}%`,
            top: `${reaction.y}%`,
            animationDuration: `${Math.random() * 2 + 3}s`,
          }}
        >
          {reaction.type}
        </div>
      ))}
    </div>
  );
};

export default Reactions;