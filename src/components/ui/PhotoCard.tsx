import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface PhotoCardProps {
  frontImage: string;
  frontAlt: string;
  backContent: React.ReactNode;
  className?: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ 
  frontImage, 
  frontAlt, 
  backContent, 
  className 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsFlipped(!isFlipped);
    }
    setIsDragging(false);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsFlipped(!isFlipped);
    }
    setIsDragging(false);
  };

  return (
    <div className={cn("photocard-container", className)}>
      <div 
        ref={cardRef}
        className={cn(
          "photocard",
          isFlipped && "flipped",
          isDragging && "dragging"
        )}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Front Side */}
        <div className="photocard-front">
          <div className="absolute inset-0 bg-gradient-brand rounded-lg blur-xl opacity-20 animate-pulse-glow"></div>
          <img 
            src={frontImage}
            alt={frontAlt}
            className="relative z-10 w-full h-full object-cover rounded-lg border-2 border-primary/20 shadow-elegant"
            draggable={false}
          />
          <div className="absolute top-4 right-4 w-4 h-4 bg-primary rounded-full animate-pulse glow-border"></div>
          <div className="absolute top-4 left-4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Swipe indicator */}
          <div className="absolute bottom-4 right-4 text-primary/60 text-xs">
            Tap to flip
          </div>
        </div>

        {/* Back Side */}
        <div className="photocard-back">
          <div className="absolute inset-0 bg-gradient-surface rounded-lg"></div>
          <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center">
            {backContent}
          </div>
          <div className="absolute bottom-4 left-4 text-primary/60 text-xs">
            Tap to flip back
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;