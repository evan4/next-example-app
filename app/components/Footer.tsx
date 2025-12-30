import Link from "next/link";

export default function Footer() {
  const routes = [
    {
      name: "Terms & Conditions",
      path: "/terms-conditions",
    },
    {
      name: "Privacy policy",
      path: "/privacy-policy",
    },
  ];
  return (
    <footer className="flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">&copy; 2026 All right reserved.</small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li
            key={route.path}
            className="text-white/50 hover:text-white transition"
          >
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
