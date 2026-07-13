import React from "react";

export default function Section13LiveDemo() {
  // Your live deployment link is now fully integrated here
  const vercelDashboardUrl = "https://mental-health-dashboard-steel.vercel.app/";

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 border-b border-gray-200">
      <div className="w-full max-w-3xl mx-auto text-center space-y-8">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--color-headline)]">
          Let's actually look at it.
        </h2>

        {/* Action Button */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <a
            href={vercelDashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-[var(--color-magenta)] hover:bg-[var(--color-magenta)]/90 active:scale-95 transition-all rounded-full shadow-lg hover:shadow-xl"
          >
            Open the Live Dashboard
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0019 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>

          {/* Subtext Link */}
          <span className="text-xs tracking-wide text-[var(--color-slate-blue)] opacity-80">
            workplacementalhealth.training — opens in a new tab
          </span>
        </div>

      </div>
    </section>
  );
}