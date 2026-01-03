import { EventoEvent } from "@/lib/types";

type EventsListProps = {
  event: EventoEvent;
};
export default function EventCard({ event }: EventsListProps) {
  return (
    <section>{event.name}</section>
  )
}
