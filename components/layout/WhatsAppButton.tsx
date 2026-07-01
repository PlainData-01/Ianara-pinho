"use client";

import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className={cn(
        "group fixed bottom-6 right-6 z-[var(--z-float)] flex items-center gap-3 transition-all duration-500 ease-out-quart",
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      )}
    >
      <span className="hidden rounded-full bg-petrol-deep px-4 py-2 text-sm font-medium text-paper shadow-lg transition-all duration-300 group-hover:scale-105 md:block">
        Agende pelo WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl">
        <span className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-pulse-ring" aria-hidden />
        <svg width="28" height="28" viewBox="0 0 32 32" fill="#fff" aria-hidden>
          <path d="M16.02 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.25.59 4.45 1.71 6.39L3.1 28.8l6.6-1.73a12.76 12.76 0 0 0 6.31 1.61h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.04-3.63Zm0 23.3h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.4a10.56 10.56 0 0 1-1.62-5.63c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.87-4.77 10.63-10.63 10.63Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.44 4.81.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
    </a>
  );
}
