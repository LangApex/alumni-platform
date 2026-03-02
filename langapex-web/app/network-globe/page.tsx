'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Namangan, Uzbekistan coordinates
const NAMANGAN = { lat: 40.9983, lng: 71.6726 };

// University destinations
const universities = [
  { name: 'NYU Shanghai', lat: 31.2244, lng: 121.4757, country: 'China' },
  { name: 'Purdue University', lat: 40.4237, lng: -86.9212, country: 'USA' },
  { name: 'University of Arizona', lat: 32.2319, lng: -110.9501, country: 'USA' },
  { name: 'Sejong University', lat: 37.5503, lng: 127.0731, country: 'South Korea' },
  { name: 'Riga Technical University', lat: 56.9512, lng: 24.1135, country: 'Latvia' },
  { name: 'Inha University', lat: 37.4480, lng: 126.6574, country: 'South Korea' },
  { name: 'USF', lat: 28.0615, lng: -82.4132, country: 'USA' },
  { name: 'Tufts University', lat: 42.4075, lng: -71.1190, country: 'USA' },
  { name: 'APU Japan', lat: 33.1500, lng: 131.6000, country: 'Japan' },
];

export default function NetworkGlobePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = 500;

    // Create scene with transparent background
    const scene = new THREE.Scene();

    // Create camera - position to show Uzbekistan at front
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    // Convert Namangan lat/lng to camera position (facing Uzbekistan)
    const phi = (90 - NAMANGAN.lat) * (Math.PI / 180);
    const theta = (NAMANGAN.lng + 180) * (Math.PI / 180);
    const radius = 200;
    camera.position.x = radius * Math.sin(phi) * Math.cos(theta);
    camera.position.y = radius * Math.cos(phi);
    camera.position.z = radius * Math.sin(phi) * Math.sin(theta);
    camera.lookAt(0, 0, 0);

    // Create renderer with transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Create arc data from Namangan to each university
    const arcsData = universities.map((uni) => ({
      startLat: NAMANGAN.lat,
      startLng: NAMANGAN.lng,
      endLat: uni.lat,
      endLng: uni.lng,
      color: ['#ff4444', '#ffaa00'],
    }));

    // Create globe with arcs and country polygons
    const globe = new ThreeGlobe()
      .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png')
      .showAtmosphere(true)
      .atmosphereColor('#3b82f6')
      .atmosphereAltitude(0.2)
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(0.2)
      .arcDashAnimateTime(3000)
      .arcStroke(0.8);

    // Fetch and add country borders
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(res => res.json())
      .then(countries => {
        const topojson = require('topojson-client');
        const land = topojson.feature(countries, countries.objects.countries);
        globe
          .polygonsData(land.features)
          .polygonCapColor(() => 'rgba(100, 100, 100, 0.1)')
          .polygonSideColor(() => 'rgba(150, 150, 150, 0.1)')
          .polygonStrokeColor(() => 'rgba(255, 255, 255, 0.3)')
          .polygonAltitude(0.01);
      });

    scene.add(globe);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add orbit controls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.minDistance = 120;
    controls.maxDistance = 400;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      camera.aspect = newWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Global Alumni Network
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From Namangan to the world.
        </p>
      </div>

      {/* Globe Section */}
      <div className="rounded-xl overflow-hidden">
        <div
          ref={containerRef}
          className="w-full h-[500px]"
        />
      </div>
    </div>
  );
}
