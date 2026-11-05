'use client';

import React, { useState, useEffect } from 'react';

interface HoodieVisualProps {
  themeName: string;
  themeNumber: string;
  colorHex?: string;
  slug?: string;
  view?: 'front' | 'back' | 'embroidery' | 'fabric' | 'hood' | 'cuff';
  className?: string;
  isHovered?: boolean;
}

export const HoodieVisual: React.FC<HoodieVisualProps> = ({
  themeName,
  themeNumber,
  colorHex = '#0a0a0a',
  slug,
  view = 'front',
  className = 'w-full h-full',
  isHovered = false,
}) => {
  const [imageError, setImageError] = useState(false);

  // Determine slug from themeName if not explicitly provided
  const productSlug = slug || `the-${themeName.toLowerCase()}-hoodie`;

  const assetSlug = productSlug === 'the-self-awareness-hoodie' ? 'the-awareness-hoodie' : productSlug === 'the-cortex-hoodie' ? 'the-ego-hoodie' : productSlug;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Formulate candidates for webp and jpg
  const isBack = view === 'back';
  const candidates = isBack
    ? [
        `${basePath}/images/products/${assetSlug}-back-v2.webp`,
        `${basePath}/images/products/${assetSlug}-back.jpg`,
        `${basePath}/images/products/${assetSlug}.jpg`,
      ]
    : [
        `${basePath}/images/products/${assetSlug}-v2.webp`,
        `${basePath}/images/products/${assetSlug}.jpg`,
      ];

  const [candidateIdx, setCandidateIdx] = useState(0);

  // Reset candidate index whenever product/view changes
  useEffect(() => {
    setCandidateIdx(0);
  }, [productSlug, view]);

  const activeSrc = candidates[candidateIdx];
  const hasValidImage = candidateIdx < candidates.length;

  const isLight =
    colorHex.toLowerCase() === '#edece6' ||
    colorHex.toLowerCase() === '#deded7' ||
    colorHex.toLowerCase() === '#e8e8e2';
  const garmentBase = colorHex;
  const shadowColor = isLight ? 'rgba(0,0,0,0.18)' : 'rgba(0,0,0,0.6)';
  const highlightColor = isLight ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.08)';
  const seamColor = isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.12)';
  const printColor = isLight ? 'rgba(20,20,20,0.85)' : 'rgba(240,240,240,0.85)';
  const subtlePrint = isLight ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.3)';

  // If candidate image is available, render isolated mockup photo
  if (hasValidImage) {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center select-none bg-white ${className}`}>
        <img
          key={activeSrc}
          src={activeSrc}
          alt={`${themeName} Product Mockup`}
          onError={() => setCandidateIdx((prev) => prev + 1)}
          className={`w-full h-full object-contain p-3 transition-transform duration-500 ease-out ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
      </div>
    );
  }

  // Fallback: Architectural Blueprint Vector Mockup
  if (view === 'fabric') {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center rounded-xl bg-surface border border-white/10 ${className}`}>
        <svg viewBox="0 0 600 600" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="fabricLight" cx="40%" cy="40%" r="70%">
              <stop offset="0%" stopColor={isLight ? '#ffffff' : '#222226'} />
              <stop offset="60%" stopColor={garmentBase} />
              <stop offset="100%" stopColor="#040404" />
            </radialGradient>
            <pattern id="microTerry" width="12" height="12" patternUnits="userSpaceOnUse">
              <path d="M 0,3 Q 3,0 6,3 T 12,3" fill="none" stroke={seamColor} strokeWidth="1.2" />
              <path d="M 0,9 Q 3,6 6,9 T 12,9" fill="none" stroke={seamColor} strokeWidth="1.2" />
              <circle cx="6" cy="6" r="1.5" fill={shadowColor} opacity="0.4" />
            </pattern>
          </defs>
          <rect width="600" height="600" fill="url(#fabricLight)" />
          <rect width="600" height="600" fill="url(#microTerry)" opacity="0.85" />
          <circle cx="300" cy="300" r="180" fill="none" stroke={highlightColor} strokeWidth="1" strokeDasharray="4 8" opacity="0.3" />
          <text x="50" y="540" fill={printColor} fontFamily="monospace" fontSize="16" letterSpacing="0.2em">
            650 GSM // RING-SPUN TERRY WEAVE
          </text>
          <text x="50" y="565" fill={subtlePrint} fontFamily="monospace" fontSize="12" letterSpacing="0.15em">
            SCALE: 10X MACRO STRUCTURE ANALYSIS
          </text>
        </svg>
      </div>
    );
  }

  if (view === 'embroidery') {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center rounded-xl bg-surface border border-white/10 ${className}`}>
        <svg viewBox="0 0 600 600" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="embGrad" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor={garmentBase} />
              <stop offset="100%" stopColor="#050505" />
            </radialGradient>
            <filter id="emboss" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
              <feOffset in="blur" dx="2" dy="2" result="offset" />
              <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.75" specularExponent="20" result="spec">
                <fePointLight x="200" y="100" z="250" />
              </feSpecularLighting>
              <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
              <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
            </filter>
          </defs>
          <rect width="600" height="600" fill="url(#embGrad)" />
          <line x1="300" y1="50" x2="300" y2="550" stroke={seamColor} strokeDasharray="3 6" opacity="0.4" />
          <line x1="50" y1="300" x2="550" y2="300" stroke={seamColor} strokeDasharray="3 6" opacity="0.4" />

          <g filter="url(#emboss)" className="transform translate-y-4">
            <rect x="180" y="210" width="240" height="180" rx="6" fill="none" stroke={printColor} strokeWidth="3" opacity="0.9" />
            <text x="300" y="275" textAnchor="middle" fill={printColor} fontFamily="sans-serif" fontWeight="900" fontSize="32" letterSpacing="0.3em">
              {themeName}
            </text>
            <text x="300" y="315" textAnchor="middle" fill={subtlePrint} fontFamily="monospace" fontSize="13" letterSpacing="0.25em">
              ARCHETYPE {themeNumber} // CORTEX
            </text>
            <text x="300" y="350" textAnchor="middle" fill={printColor} fontFamily="monospace" fontSize="11" letterSpacing="0.2em">
              LAT: 45.4642° N // SUBTEXT
            </text>
          </g>

          <text x="50" y="560" fill={subtlePrint} fontFamily="monospace" fontSize="12" letterSpacing="0.15em">
            HIGH-DENSITY BLIND EMBROIDERY // 48,000 STITCHES
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 800 900"
        className="w-full h-full max-h-[85vh] drop-shadow-2xl transition-transform duration-700 ease-out"
        style={{
          transform: isHovered ? 'scale(1.03) translateY(-4px)' : 'scale(1)',
        }}
      >
        <defs>
          <filter id="hoodieShadow" x="-15%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="25" stdDeviation="30" floodColor="#000000" floodOpacity="0.75" />
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.45" />
          </filter>

          <linearGradient id={`garmentGrad-${themeNumber}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLight ? '#ffffff' : '#1e1e22'} />
            <stop offset="35%" stopColor={garmentBase} />
            <stop offset="80%" stopColor={garmentBase} />
            <stop offset="100%" stopColor={isLight ? '#d0cfc8' : '#040404'} />
          </linearGradient>

          <radialGradient id={`hoodInner-${themeNumber}`} cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.9" />
            <stop offset="80%" stopColor={garmentBase} stopOpacity="0.6" />
            <stop offset="100%" stopColor={garmentBase} stopOpacity="1" />
          </radialGradient>

          <linearGradient id="pocketDepth" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.5)" />
            <stop offset="25%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
          </linearGradient>
        </defs>

        <g filter="url(#hoodieShadow)">
          <path
            d="
              M 260 180 
              L 120 280 
              L 40 520 
              L 110 550 
              L 170 380 
              L 170 780 
              L 630 780 
              L 630 380 
              L 690 550 
              L 760 520 
              L 680 280 
              L 540 180 
              Z
            "
            fill={`url(#garmentGrad-${themeNumber})`}
          />

          <path d="M 120 280 L 170 380 L 190 350 Z" fill={shadowColor} opacity="0.6" />
          <path d="M 680 280 L 630 380 L 610 350 Z" fill={shadowColor} opacity="0.6" />

          <line x1="260" y1="180" x2="160" y2="340" stroke={seamColor} strokeWidth="2.5" strokeDasharray="1 1" />
          <line x1="540" y1="180" x2="640" y2="340" stroke={seamColor} strokeWidth="2.5" strokeDasharray="1 1" />

          <path d="M 40 520 L 25 570 L 95 600 L 110 550 Z" fill={isLight ? '#c8c7c0' : '#0e0e11'} stroke={seamColor} strokeWidth="1.5" />
          <path d="M 760 520 L 775 570 L 705 600 L 690 550 Z" fill={isLight ? '#c8c7c0' : '#0e0e11'} stroke={seamColor} strokeWidth="1.5" />

          <rect x="170" y="780" width="460" height="60" rx="3" fill={isLight ? '#c8c7c0' : '#0e0e11'} stroke={seamColor} strokeWidth="1.5" />
          <line x1="200" y1="780" x2="200" y2="840" stroke={seamColor} strokeWidth="1" />
          <line x1="240" y1="780" x2="240" y2="840" stroke={seamColor} strokeWidth="1" />
          <line x1="280" y1="780" x2="280" y2="840" stroke={seamColor} strokeWidth="1" />
          <line x1="320" y1="780" x2="320" y2="840" stroke={seamColor} strokeWidth="1" />
          <line x1="360" y1="780" x2="360" y2="840" stroke={seamColor} strokeWidth="1" />
          <line x1="400" y1="780" x2="400" y2="840" stroke={seamColor} strokeWidth="1" />
          <line x1="440" y1="780" x2="440" y2="840" stroke={seamColor} strokeWidth="1" />
          <line x1="480" y1="780" x2="480" y2="840" stroke={seamColor} strokeWidth="1" />
          <line x1="520" y1="780" x2="520" y2="840" stroke={seamColor} strokeWidth="1" />
          <line x1="560" y1="780" x2="560" y2="840" stroke={seamColor} strokeWidth="1" />
          <line x1="600" y1="780" x2="600" y2="840" stroke={seamColor} strokeWidth="1" />

          {view === 'front' && (
            <g>
              <path
                d="M 230 540 L 570 540 L 590 750 L 210 750 Z"
                fill={`url(#garmentGrad-${themeNumber})`}
                stroke={seamColor}
                strokeWidth="2"
              />
              <path d="M 230 540 L 570 540 L 590 750 L 210 750 Z" fill="url(#pocketDepth)" />
              <line x1="230" y1="540" x2="210" y2="670" stroke={seamColor} strokeWidth="3" />
              <line x1="570" y1="540" x2="590" y2="670" stroke={seamColor} strokeWidth="3" />
            </g>
          )}

          <g>
            <path
              d="
                M 260 180 
                C 240 60, 310 10, 400 10 
                C 490 10, 560 60, 540 180 
                C 490 230, 310 230, 260 180 
                Z
              "
              fill={`url(#garmentGrad-${themeNumber})`}
              stroke={seamColor}
              strokeWidth="2"
            />
            <path
              d="
                M 290 170 
                C 310 90, 350 45, 400 45 
                C 450 45, 490 90, 510 170 
                C 460 210, 340 210, 290 170 
                Z
              "
              fill={`url(#hoodInner-${themeNumber})`}
            />
            <path
              d="M 290 180 Q 400 220 510 180"
              fill="none"
              stroke={seamColor}
              strokeWidth="3"
            />
          </g>

          <g className="opacity-75">
            <text
              x="400"
              y="400"
              textAnchor="middle"
              fill={printColor}
              fontFamily="monospace"
              fontSize="14"
              letterSpacing="0.25em"
              fontWeight="bold"
            >
              ARCHETYPE {themeNumber}
            </text>
            <text
              x="400"
              y="435"
              textAnchor="middle"
              fill={printColor}
              fontFamily="sans-serif"
              fontSize="38"
              letterSpacing="0.25em"
              fontWeight="900"
            >
              {themeName}
            </text>
            <text
              x="400"
              y="470"
              textAnchor="middle"
              fill={subtlePrint}
              fontFamily="monospace"
              fontSize="11"
              letterSpacing="0.2em"
            >
              650 GSM // MILAN ATELIER
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
