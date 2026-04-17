import { Reveal } from "@/components/Reveal";
import { Award, BookOpenCheck, Clock, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Learning Study Skills",
    issuer: "LinkedIn Learning",
    icon: BookOpenCheck,
    desc: "Workshop on effective learning techniques — note-taking, active reading, retention, and reflection strategies.",
  },
  {
    title: "Time Management Fundamentals",
    issuer: "LinkedIn Learning",
    icon: Clock,
    desc: "Foundational training on planning, prioritisation and time blocking to stay productive without burnout.",
  },
];

export default function Achievements() {
  return (
    <section className="container-prose section-pad">
      <Reveal>
        <span className="eyebrow"><Award size={14} /> Achievements</span>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
          Workshops & <span className="gradient-text">certificates</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Certificates of attendance for the LinkedIn Learning workshops completed alongside this course.
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className="relative h-full rounded-2xl border border-border bg-card overflow-hidden shadow-soft card-hover">
              <div className="aspect-[16/9] bg-gradient-primary relative grid place-items-center">
                <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 50%)" }}/>
                <div className="relative text-primary-foreground text-center px-6">
                  <c.icon size={48} className="mx-auto opacity-90" />
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] opacity-80">Certificate of Attendance</p>
                  <h2 className="mt-1 font-display text-2xl font-bold">{c.title}</h2>
                  <p className="mt-1 text-sm opacity-90">{c.issuer}</p>
                </div>
              </div>
              <div className="p-7">
                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  <ExternalLink size={14} /> Issued via LinkedIn Learning
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 rounded-2xl border border-dashed border-border bg-secondary/40 p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Additional awards and recognitions can be added here as the semester progresses.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
