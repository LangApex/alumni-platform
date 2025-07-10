'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function Globe() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Globe && window.THREE && globeRef.current) {
      const N = 20;
      const arcsData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color: [
          ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
          ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
        ]
      }));

      const globe = new window.Globe(globeRef.current)
        .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
        .backgroundColor('rgba(0,0,0,0)')
        .arcsData(arcsData)
        .arcColor('color')
        .arcDashLength(() => Math.random())
        .arcDashGap(() => Math.random())
        .arcDashAnimateTime(() => Math.random() * 4000 + 500);

      globe
        .width(globeRef.current.clientWidth)
        .height(400);
    }
  }, []);

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-4 sm:p-8 mb-8 sm:mb-16">
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-8">
        Our Global Alumni Network
      </h2>
      <Script src="//cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js" strategy="beforeInteractive" />
      <Script src="//cdn.jsdelivr.net/npm/globe.gl" strategy="beforeInteractive" />
      <div 
        ref={globeRef}
        className="w-full h-[400px]"
      />
    </div>
  );
}
