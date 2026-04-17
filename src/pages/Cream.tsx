import { Reveal } from "@/components/Reveal";
import { Lightbulb, Eye, Zap, Activity, Flame, Sparkles } from "lucide-react";

const cream = [
  {
    letter: "C", word: "Creative", icon: Lightbulb,
    body: "I approach learning by trying new tools and visual formats — mind maps, posters and AI-generated visuals — instead of sticking to plain text.",
    evidence: "Task 6 (Bias Detector poster), Task 8 (mind maps for lists & memory) and Task 15 (Digital Integrity poster).",
  },
  {
    letter: "R", word: "Reflective", icon: Eye,
    body: "I pause after every lesson to ask 'what worked, what didn't, what will I change?' Every weekly task ends with written reflection.",
    evidence: "Task 9 (Learning Style reflection) and the reflection answers across all 15 tasks.",
  },
  {
    letter: "E", word: "Effective", icon: Zap,
    body: "I plan before I work — clear folders, a weekly schedule, and to-do lists turn intentions into completed tasks on time.",
    evidence: "Task 3 (OneDrive + Excel schedule), Task 10 (Microsoft To Do study plan) and Task 14 (Time Blocking + Notion).",
  },
  {
    letter: "A", word: "Active", icon: Activity,
    body: "I engage with material instead of just consuming it — questioning while I read, testing myself, and using AI to generate practice questions.",
    evidence: "Task 5 (SQ3R reading), Task 7 (Notetaking with Copilot, MCQs) and active recall in Task 8.",
  },
  {
    letter: "M", word: "Motivated", icon: Flame,
    body: "I set clear goals and pre-plan my response to obstacles, so motivation doesn't depend on mood — it depends on the system.",
    evidence: "Task 13 (WOOP framework: improve grades) and Task 12 (study environment + pre-study routine).",
  },
];

export default function Cream() {
  return (
    <section className="container-prose section-pad">
      <Reveal>
        <span className="eyebrow"><Sparkles size={14} /> Effective Learning</span>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
          The <span className="gradient-text">C.R.E.A.M.</span> strategy in action.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Five principles I bring to every learning task — Creative, Reflective, Effective, Active and Motivated — each backed by evidence from my own work.
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {cream.map((c, i) => (
          <Reveal key={c.letter} delay={(i % 2) * 0.08}>
            <article className="relative h-full rounded-2xl border border-border bg-card p-8 shadow-soft card-hover overflow-hidden">
              <div className="absolute -top-6 -right-6 text-[10rem] font-display font-bold leading-none text-primary/5 select-none">
                {c.letter}
              </div>
              <div className="relative">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <c.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  <span className="gradient-text">{c.letter}</span>{c.word.slice(1)}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>

                <div className="mt-5 rounded-xl bg-secondary/60 border border-border p-4">
                  <p className="text-xs uppercase tracking-wider font-semibold text-primary">Evidence from my tasks</p>
                  <p className="mt-1.5 text-sm">{c.evidence}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
