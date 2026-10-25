import React from 'react';

/**
 * Botanical Leaf Motif Component
 * Inspired by Section 4 & 6 of Atharva Foundation Branding Kit:
 * "Botanical motifs: Use light gold/ivory line-art leaves as subtle decoration."
 */
export default function BotanicalLeaf({ 
  className = '', 
  style = {}, 
  width = 160, 
  height = 160, 
  color = '#D9B45B', 
  opacity = 0.35,
  flipped = false 
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        transform: flipped ? 'scaleX(-1)' : 'none',
        pointerEvents: 'none',
        userSelect: 'none',
        ...style
      }}
    >
      {/* Delicate organic botanical branch line art */}
      <path
        d="M20 180 C 60 140, 100 110, 170 30"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity={opacity}
      />
      {/* Leaf 1 */}
      <path
        d="M170 30 C 150 20, 130 35, 135 60 C 150 55, 165 45, 170 30 Z"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity={opacity}
        fill={color}
        fillOpacity={opacity * 0.12}
      />
      {/* Leaf 2 */}
      <path
        d="M140 50 C 120 40, 110 65, 120 85 C 135 75, 140 60, 140 50 Z"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity={opacity}
        fill={color}
        fillOpacity={opacity * 0.12}
      />
      {/* Leaf 3 */}
      <path
        d="M110 80 C 80 70, 75 95, 90 115 C 105 105, 110 90, 110 80 Z"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity={opacity}
        fill={color}
        fillOpacity={opacity * 0.12}
      />
      {/* Leaf 4 */}
      <path
        d="M125 70 C 145 65, 160 85, 150 105 C 135 95, 130 80, 125 70 Z"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity={opacity}
        fill={color}
        fillOpacity={opacity * 0.12}
      />
      {/* Leaf 5 */}
      <path
        d="M95 105 C 115 100, 125 120, 115 140 C 105 130, 95 115, 95 105 Z"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity={opacity}
        fill={color}
        fillOpacity={opacity * 0.12}
      />
      {/* Leaf 6 */}
      <path
        d="M75 125 C 50 120, 45 140, 60 160 C 70 150, 75 135, 75 125 Z"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity={opacity}
        fill={color}
        fillOpacity={opacity * 0.12}
      />
      {/* Leaf veins */}
      <path d="M142 55 L 158 40" stroke={color} strokeWidth="0.8" strokeOpacity={opacity * 0.8} />
      <path d="M123 76 L 135 65" stroke={color} strokeWidth="0.8" strokeOpacity={opacity * 0.8} />
      <path d="M96 106 L 105 92" stroke={color} strokeWidth="0.8" strokeOpacity={opacity * 0.8} />
      <path d="M130 83 L 142 92" stroke={color} strokeWidth="0.8" strokeOpacity={opacity * 0.8} />
    </svg>
  );
}
