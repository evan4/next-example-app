export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen mx-auto">
      {children}
    </div>
  );
}
