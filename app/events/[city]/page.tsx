import H1 from "@/app/components/h1";
import { caption } from "motion/react-client";
type EventsPageProps = {
  params: {
    city: string;
  };
};
export default async function EventsPage({ params }: EventsPageProps) {
  const { city } = await params;
  let caption = "All Events";
console.log(city);
  if (city !== "all") {
    caption = `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`;
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>{caption}</H1>
    </main>
  );
}
