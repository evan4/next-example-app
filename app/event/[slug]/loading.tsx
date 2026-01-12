import Sceleton from "@/components/sceleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Sceleton />
      <Sceleton />
      <Sceleton />
    </div>
  );
}
