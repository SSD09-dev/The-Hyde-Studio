import React from 'react';

interface HydeWordmarkProps {
  variant?: 'dark' | 'light';
  className?: string;
}

/**
 * Official transparent PNG wordmark assets from The Hyde Studios brand kit:
 * - `dark`: Black wordmark for white/light backgrounds
 * - `light`: White wordmark for black/dark backgrounds
 */
export const HydeWordmark: React.FC<HydeWordmarkProps> = ({
  variant = 'dark',
  className = 'h-7 w-auto',
}) => {
  const src =
    variant === 'light'
      ? '/assets/aistudio/hyde-wordmark-white_73dc05c4.png'
      : '/assets/aistudio/hyde-wordmark-black_e9dfa396.png';

  return (
    <img
      src={src}
      alt="The Hyde Studios"
      decoding="async"
      className={`object-contain select-none ${className}`}
    />
  );
};

/**
 * Official square main logo badges from The Hyde Studios brand kit:
 * - `light`: Cream tile with black wordmark (for light mode)
 * - `dark`: Black tile with white wordmark (for dark mode)
 */
export const HydeMainLogo: React.FC<HydeWordmarkProps> = ({
  variant = 'light',
  className = 'h-12 w-12',
}) => {
  const src =
    variant === 'dark'
      ? '/assets/aistudio/ChatGPT_Image_Nov_24__2026__12_44_01_PM_523a783b.png'
      : '/assets/aistudio/ChatGPT_Image_Nov_24__2026__12_43_54_PM_d03da295.png';

  return (
    <img
      src={src}
      alt="The Hyde Studios emblem"
      decoding="async"
      className={`object-contain select-none rounded-[var(--radius-md)] border border-[var(--color-outline-variant)] ${className}`}
    />
  );
};
