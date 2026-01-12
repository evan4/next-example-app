import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};
export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const response = await fetch(
    `${process.env.NEXT_PROJECT_API_URL}/course-assets/projects/evento/api/events/${slug}`
  );
  let cityEvent: EventoEvent = [];

  if (response.ok) {
    cityEvent = await response.json();
  }

  return (
    <main>
      <section
        className="relative flex flex-col lg:flex-row justify-around items-center overflow-hidden py-14
       md:py-20"
      >
        <Image
          className="object-cover blur-3xl z-0"
          src={cityEvent.imageUrl}
          alt="Event background image"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          loading="eager"
          unoptimized
          priority
        />
        <div className="flex flex-col lg:flex-row z-1 gap-6 lg:gap-16">
          <Image
            className="rounded-xl border-white/50 border-2 object-cover"
            src={cityEvent.imageUrl}
            alt={cityEvent.name}
            width={300}
            height={201}
            loading="eager"
            unoptimized
          />
        </div>
        <div className="relative flex flex-col h-full">
          <p className="text-white/75">
            {new Date(cityEvent.date).toLocaleString("en-US", {
              weekday: "short",
              month: "long",
              day: "numeric",
            })}
          </p>

          <H1 className="mb-2 mt-1 whitespace-nowrap">{cityEvent.name}</H1>
          <p className="whitespace-nowrap text-xl text-white/75">
            Organized by{" "}
            <span className="italic">{cityEvent.organizerName}</span>
          </p>
          <button
            className="bg-blur bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-[95vw] sm:w-full py-2
                       border-white/10 border-2 rounded state-effects"
          >
            Get tickets
          </button>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{cityEvent.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{cityEvent.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-8 text-2xl">{children}</h2>;
}
function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
