"use client";

import UpcomingEvents from "../components/UpcomingEvents";
import PastEvents from "../components/PastEvents";
import { Event } from "../components/EventCard";

const upcomingEvents: Event[] = [];

const pastEvents: Event[] = [
  {
    title: 'Interview Session',
    date: 'January 9, 2026',
    time: '10:00 AM CST | 21:00 Uzbekistan Time',
    location: 'Online (Zoom)',
    type: 'Interview Session',
    attendees: 30,
    description: 'An exclusive interview with our alumni about their career journey and experiences.',
    speaker: {
      name: 'Khumoyun Abdulpattoev',
      role: 'Software Engineer 💻',
      education: [
        'B.S. CS — Illinois Wesleyan University',
        'M.S. CS — Loyola University Chicago'
      ],
      linkedIn: 'https://www.linkedin.com/in/khumo-abd/',
      image: '/images/events/guest1.jpg'
    },
    formLink: 'https://forms.gle/JPYDvsPe2JX27F5k7',
  },
  {
    title: 'Soccer Match in Namangan',
    date: 'June, 2025',
    location: 'Namangan Stadium',
    attendees: 25,
    type: 'Sports',
    images: [
      '/images/events/1a.jpg',
      '/images/events/1b.jpg',
      '/images/events/1c.jpg',
      '/images/events/1d.jpg'
    ]
  }, 
];

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Alumni Events
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay connected with the Lang Apex community through our regular events and gatherings.
        </p>
      </div>

      {/* Upcoming Events */}
      <UpcomingEvents events={upcomingEvents} />

      {/* Past Events */}
      <PastEvents events={pastEvents} />
    </div>
  );
}