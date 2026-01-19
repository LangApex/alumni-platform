"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import EventCard, { Event } from "./EventCard";

interface PastEventsProps {
  events: Event[];
}

export default function PastEvents({ events }: PastEventsProps) {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(-1);

  if (events.length === 0) {
    return null;
  }

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-8">Past Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <EventCard
              key={event.title}
              event={event}
              showAttendees
              onImageClick={(imageIdx) => {
                setSelectedEvent(idx);
                setImageIndex(imageIdx);
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedEvent !== null && (
        <Lightbox
          open={imageIndex >= 0}
          close={() => setImageIndex(-1)}
          index={imageIndex}
          slides={events[selectedEvent].images?.map(img => ({ src: img })) || []}
        />
      )}
    </>
  );
}
