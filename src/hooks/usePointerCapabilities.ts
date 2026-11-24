import { useEffect, useState } from 'react';

export interface PointerCapabilities {
  hasFinePointer: boolean;
  prefersReducedMotion: boolean;
}

/**
 * Detects device pointer precision and motion preferences reactively.
 * Enables magnetic/spotlight desktop micro-interactions strictly on fine-pointer
 * hover-capable hardware while disabling hover traps on touchscreens.
 */
export function usePointerCapabilities(): PointerCapabilities {
  const [capabilities, setCapabilities] = useState<PointerCapabilities>(() => {
    if (typeof window === 'undefined') {
      return { hasFinePointer: false, prefersReducedMotion: false };
    }
    return {
      hasFinePointer: window.matchMedia('(pointer: fine) and (hover: hover)').matches,
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    };
  });

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine) and (hover: hover)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      setCapabilities({
        hasFinePointer: pointerQuery.matches,
        prefersReducedMotion: motionQuery.matches,
      });
    };

    update();
    pointerQuery.addEventListener('change', update);
    motionQuery.addEventListener('change', update);

    return () => {
      pointerQuery.removeEventListener('change', update);
      motionQuery.removeEventListener('change', update);
    };
  }, []);

  return capabilities;
}
