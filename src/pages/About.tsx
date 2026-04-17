import { Reveal } from "@/components/Reveal";
import { Compass, Heart, Sparkles, Target } from "lucide-react";
import { student } from "@/data/student";

export default function About() {
  const goals = [
    "Strengthen my digital and information-management skills.",
    "Develop strong study habits using SQ3R, mind maps and active recall.",
    "Use AI tools critically, ethically and responsibly.",
    "Build time-management discipline through planning and time-blocking.",
    "Grow into a confident, future-ready Information Technology graduate.",
  ];
  const interests = ["Software & web development", "Artificial Intelligence", "Cybersecurity basics", "Reading & self-learning", "Sports & fitness"];

  return (
    <>
      <section className="container-prose section-pad">
        <Reveal>
          <span className="eyebrow"><Sparkles size={14} /> About me</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
            A student building <span className="gradient-text">future-ready skills</span>.
          </h1>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-soft">
              <h2 className="font-display text-2xl font-semibold flex items-center gap-2"><Heart className="text-primary" size={20}/> Who I am</h2>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am <span className="text-foreground font-medium">{student.name}</span>, an HCT student studying {student.major}.
                  I enjoy learning new technologies, breaking problems into smaller steps, and figuring out
                  how things work behind the screen.
                </p>
                <p>
                  I recognise that growing as a student takes more than attendance — it takes
                  reflection, planning and the courage to try new strategies. I am willing to
                  experiment, ask questions, and apply feedback so that every week I improve a little.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-secondary/60 p-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Course</p>
                  <p className="mt-1 font-display font-semibold">{student.course}</p>
                </div>
                <div className="rounded-xl bg-secondary/60 p-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Term · CRN</p>
                  <p className="mt-1 font-display font-semibold">{student.term} · {student.crn}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-gradient-primary text-primary-foreground p-8 shadow-card h-full">
              <Compass size={26} />
              <h2 className="mt-4 font-display text-2xl font-semibold">Purpose of this portfolio</h2>
              <p className="mt-3 text-primary-foreground/90 leading-relaxed">
                This e-portfolio is the evidence of my LSS 1003 journey — every weekly task,
                reflection and certificate. It shows not only <em>what</em> I did, but <em>how</em> I
                grew as a learner: more organised, more reflective, and more responsible with technology.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft h-full">
              <h2 className="font-display text-xl font-semibold flex items-center gap-2"><Target className="text-primary" size={18}/> My goals</h2>
              <ul className="mt-4 space-y-3">
                {goals.map((g) => (
                  <li key={g} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft h-full">
              <h2 className="font-display text-xl font-semibold flex items-center gap-2"><Sparkles className="text-primary" size={18}/> Interests</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium">{i}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
