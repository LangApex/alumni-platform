"use client";

import Image from "next/image";
import { Divider } from "@heroui/react";

export interface Event {
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

interface EventCardProps {
  event: Event;
  onImageClick?: (imageIndex: number) => void;
  showAttendees?: boolean;
}

export default function EventCard({ event, onImageClick, showAttendees = false }: EventCardProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full text-blue-700 bg-blue-100">
          {event.type}
        </span>
        {showAttendees && event.attendees && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            {event.attendees} Attendees
          </span>
        )}
      </div>
      
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
      
      {event?.speaker?.education && (
        <div className="mt-2 space-y-1">
          {event.speaker.education.map((edu, idx) => (
            <p key={idx} className="text-sm text-gray-600">🧑‍🎓 {edu}</p>
          ))}
        </div>
      )}

      <Divider className="my-4" />
    
      <div className="space-y-2 text-gray-600 mb-4">
        <p>📆 {event.date}</p>
        {event.time && <p>⏰ {event.time}</p>}
        <p>📌 {event.location}</p>
      </div>
      {event.description && <p className="text-gray-600 mb-4">{event.description}</p>}
      
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

      {event.images && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
          {event.images.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onImageClick?.(idx)}
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
  );
}
