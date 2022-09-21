import { useRef, useEffect } from 'react';

const useResponsiveHeight = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef<undefined | string>(undefined);

  useEffect(() => {
    if (!!containerRef.current && containerRef.current.offsetHeight < window.innerHeight) {
      heightRef.current = '100vh';
    }
  }, [containerRef]);

  return { containerRef, height: heightRef.current };
};

export { useResponsiveHeight };
