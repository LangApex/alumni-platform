'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';

const universities = [
  {
    name: 'The University of Arizona',
    logo: '/images/universities/uarizona.png',
    url: 'https://www.arizona.edu'
  },
  {
    name: 'The University of South Florida',
    logo: '/images/universities/usf.png',
    url: 'https://www.usf.edu'
  },
  {
    name: 'Ritsumeikan APU',
    logo: '/images/universities/apu.jpg',
    url: 'https://www.apu.ac.jp'
  },
  {
    name: 'NYU Shanghai',
    logo: '/images/universities/nyu-shanghai.jpg',
    url: 'https://shanghai.nyu.edu'
  },
  {
    name: 'National University of Uzbekistan',
    logo: '/images/universities/nuu.png',
    url: 'https://nuu.uz'
  },
  {
    name: 'Central Asian University',
    logo: '/images/universities/cau.jpg',
    url: 'https://centralasiauniversity.com'
  },
  {
    name: 'Purdue University',
    logo: '/images/universities/purdue.jpg',
    url: 'https://www.purdue.edu'
  },
  {
    name: 'Riga Technical University',
    logo: '/images/universities/rtu.jpg',
    url: 'https://www.rtu.lv'
  },
  {
    name: 'Tufts University',
    logo: '/images/universities/tufts.jpg',
    url: 'https://www.tufts.edu'
  },
  {
    name: 'Sejong University',
    logo: '/images/universities/sejong.jpg',
    url: 'https://www.sejong.ac.kr'
  },
  {
    name: 'INHA University in Tashkent',
    logo: '/images/universities/inha.svg',
    url: 'https://inha.uz'
  }
];

export function UniversityCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!containerRef.current) return;
    
    const scrollWidth = containerRef.current.scrollWidth;
    const viewportWidth = containerRef.current.offsetWidth;
    
    const animate = async () => {
      await controls.start({
        x: [0, -scrollWidth / 2],
        transition: {
          duration: 70,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };
    
    animate();
  }, [controls]);

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-4 sm:p-8 mb-8 sm:mb-16">
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-8">
        Our Alumni Study at World-Class Universities
      </h2>
      <div className="relative overflow-hidden">
        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            className="flex space-x-6 sm:space-x-12"
            animate={controls}
            style={{
              width: "fit-content",
            }}
          >
            {[...universities, ...universities, ...universities].map((university, index) => (
              <a
                key={`${university.name}-${index}`}
                href={university.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none group"
              >
                <div className="w-32 h-16 sm:w-48 sm:h-24 relative bg-white rounded-lg shadow-sm overflow-hidden transition-transform group-hover:scale-105">
                  <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                    <div className="relative w-full h-full">
                      <img
                        src={university.logo}
                        alt={university.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center">
                  {university.name}
                </p>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
