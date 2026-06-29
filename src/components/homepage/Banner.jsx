import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative min-h-[60vh] w-full rounded-2xl overflow-hidden flex items-center bg-[#0a0a0f] shadow-2xl">

      {/* Background image — dimmed */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1614068630200-44bc6a9a898e?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0')",
        }}
      />

      {/* Directional overlay — dark on left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0fd1] to-[#0a0a0f4d]" />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-14 py-14 max-w-2xl">

        {/* Eyebrow badge */}
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-violet-400 bg-violet-400/10 border border-violet-400/25 rounded-full px-3 py-1 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          Online library
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-slate-50 leading-tight tracking-tight mb-4">
          Find your next <br />
          <span className="text-violet-400">great read</span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
          Explore thousands of books, discover authors, and enjoy reading
          every day — all in one place.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap">
          <Link href="#">
            <Button
              className="bg-violet-700 hover:bg-violet-600 text-white font-medium px-6"
              startContent={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              }
            >
              Browse now
            </Button>
          </Link>

          <Link href="/pricing">
            <Button
              variant="bordered"
              className="text-slate-200 border-white/20 bg-white/5 hover:bg-white/10 font-medium px-6"
              endContent={
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              }
            >
              Join free
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats — bottom right */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-8">
        {[
          { val: "12k+", lbl: "Books" },
          { val: "4.8★", lbl: "Rating" },
          { val: "50k+", lbl: "Readers" },
        ].map(({ val, lbl }) => (
          <div key={lbl} className="text-right">
            <p className="text-xl font-bold text-slate-100 leading-none">{val}</p>
            <p className="text-[11px] text-slate-500 mt-1">{lbl}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Banner;