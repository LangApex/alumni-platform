"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Divider } from "@heroui/react";

interface Event {
  title: string;
  date: string;
  location: string;
  attendees?: number;
  type: string;
  time?: string;
  description?: string;
  images?: string[];
  speaker?: {
    name: string;
    role: string;
    education: string[];
    linkedIn?: string;
    image?: string;
  };
  formLink?: string;
  zoomNote?: string;
}

const upcomingEvents: Event[] = [
  {
    title: 'Interview Session',
    date: 'January 9, 2026',
    time: '10:00 AM CST | 21:00 Uzbekistan Time',
    location: 'Online (Zoom)',
    type: 'Interview Session',
    description: 'An exclusive interview with our alumni about their career journey and experiences.',
    speaker: {
      name: 'Khumoyun Abdulpattoev',
      role: 'Software Engineer 💻',
      education: [
        'B.S. CS — Illinois Wesleyan University',
        'M.S. CS — Loyola University Chicago'
      ],
      linkedIn: 'https://www.linkedin.com/in/khumo-abd/',
      image: '/images/events/guest1.jpg' // Placeholder - to be updated
    },
    formLink: 'https://forms.gle/JPYDvsPe2JX27F5k7',
  }
];

const pastEvents = [
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
  }
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(-1);
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
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full text-blue-700 bg-blue-100">
                  {event.type}
                </span>
              </div>
              
              
              {/* Speaker Info */}
              {event.speaker && (
                <div className="mb-4 rounded-lg w-full h-[300px] overflow-hidden relative">
                  {event.speaker.image && (
                    <div className="relative w-full h-full">
                      <Image
                        src={event.speaker.image}
                        alt={event.speaker.name}
                        fill
                        className="object-cover object-top"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-10">
                        <a
                          href={event.speaker.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-semibold ml-2 text-white hover:text-blue-800 hover:underline"
                        >
                          {event.speaker.name}
                        </a>
                        <p className="text-sm text-white ml-2">{event.speaker.role}</p>
                        
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div className="mt-2 space-y-1">
                {event?.speaker?.education.map((edu, idx) => (
                  <p key={idx} className="text-sm text-gray-600">🧑‍🎓 {edu}</p>
                ))}
              </div>

              <Divider className="my-4" />
            
              <div className="space-y-2 text-gray-600 mb-4">
                <p>📆 {event.date}</p>
                <p>⏰ {event.time}</p>
                <p>📌 {event.location}</p>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              {event.formLink && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg text-sm">
                  <p className="text-gray-700 mb-2">
                    Have questions you want us to ask during the interview?
                  </p>
                  <a
                    href={event.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  >
                    Submit them here 👇
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">Past Events</h2>
        <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            {pastEvents.map((event) => (
              <div key={event.title} className="p-6 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium">{event.title}</h3>
                    <div className="mt-1 text-gray-600">
                      <p>{event.date} • {event.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {event.attendees} Attendees
                    </span>
                  </div>
                </div>
                {event.images && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                    {event.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => {
                          setSelectedEvent(pastEvents.indexOf(event));
                          setImageIndex(idx);
                        }}
                      >
                        <Image
                          src={img}
                          alt={`${event.title} image ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedEvent !== null && (
        <Lightbox
          open={imageIndex >= 0}
          close={() => setImageIndex(-1)}
          index={imageIndex}
          slides={pastEvents[selectedEvent].images?.map(img => ({ src: img })) || []}
        />
      )}
    </div>
  );
}