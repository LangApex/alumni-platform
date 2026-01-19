"use client";

import EventCard, { Event } from "./EventCard";

interface UpcomingEventsProps {
  events: Event[];
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  if (events.length === 0) {
    return null;
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-8">Upcoming Events</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {events.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
}
