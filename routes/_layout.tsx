import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, route }: PageProps) {

  const links = [
    { href: "/", label: "Qui suis-je ?" },
    { href: "/realisations", label: "Mes réalisations" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div class="flex flex-col min-h-screen">
      <nav class="border-b p-6 flex justify-between items-center bg-slate-600 text-white font-bold">
        { links.map((link) => (
          <a
            class={`px-4 py-2 ${link.href === route ? "border-b-2 border-white" : ""}`}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div class="px-4 py-8 mx-auto w-full h-">
        <Component />
      </div>
    </div>
  );
}
