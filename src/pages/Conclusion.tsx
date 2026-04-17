import { Reveal } from "@/components/Reveal";
import { PlayCircle, Quote } from "lucide-react";

export default function Conclusion() {
  return (
    <section className="container-prose section-pad">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow"><Quote size={14} /> Conclusion</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
            Looking back on <span className="gradient-text">LSS 1003</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A 60–90 second reflection on what this course changed for me — followed by a short
            written summary of my learning journey.
          </p>
        </div>
      </Reveal>

      {/* Video */}
      <Reveal delay={0.1}>
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-card bg-card aspect-video">
            <div className="absolute inset-0 bg-gradient-primary opacity-90" />
            <div className="absolute inset-0 grid place-items-center text-primary-foreground text-center px-6">
              <div>
                <PlayCircle size={68} className="mx-auto opacity-95" />
                <p className="mt-4 font-display text-xl font-semibold">60–90 second reflection video</p>
                <p className="mt-1 text-sm opacity-90">Replace this placeholder by embedding your video below.</p>
              </div>
            </div>
            {/* To embed: replace the block above with <iframe> or <video> */}
          </div>
          <p className="mt-3 text-xs text-muted-foreground text-center">
            Tip: replace this card with a YouTube/Stream <code>&lt;iframe&gt;</code> or a <code>&lt;video&gt;</code> tag.
          </p>
        </div>
      </Reveal>

      {/* Summary */}
      <Reveal delay={0.15}>
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10 shadow-soft">
          <h2 className="font-display text-2xl font-semibold">My learning journey</h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              LSS 1003 reshaped how I approach studying. In just eight weeks I went from reading
              passively and storing files randomly to using active strategies — SQ3R reading, mind
              maps, active recall — and a clean OneDrive structure that I actually maintain.
            </p>
            <p>
              The biggest shift was treating planning as a skill. Microsoft To Do, Excel schedules,
              Notion and time blocking gave my week a shape, and the WOOP framework taught me to
              expect obstacles instead of being surprised by them.
            </p>
            <p>
              I also learned to use AI as a thinking partner, not a shortcut — asking questions,
              checking for bias, and protecting my data. These habits will follow me into my
              Information Technology studies and my future career.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
