import H1 from "@/app/components/h1";
import { EventoEvent } from "@/app/lib/types";
type EventsPageProps = {
  params: {
    city: string;
  };
};
export default async function EventsPage({ params }: EventsPageProps) {
  const { city } = await params;
  let caption = "All Events";
  let events: EventoEvent[] = [];
  if (city && city !== "all") {
    caption = `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`;
    const response = await fetch(
      `${process.env.NEXT_PROJECT_API_URL}/course-assets/projects/evento/api/events?city=${city}`
    );

    if (response.ok) {
      events = await response.json();

      if (events.length === 0) {
        caption = "There is no events for this city";
      }
    } else {
      caption = `Sorry, there is no city in our database with name such ${city}`;
    }
  } else {
    caption = "Please type the city name.";
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>{caption}</H1>
      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
}
