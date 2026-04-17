import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Sparkles, BookOpen, Target } from "lucide-react";
import hero from "@/assets/hero-future-career.jpg";
import { student } from "@/data/student";
import { Reveal } from "@/components/Reveal";
import { tasks } from "@/data/tasks";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl animate-blob" />
        <div className="absolute top-40 -left-24 w-[22rem] h-[22rem] rounded-full bg-teal/10 blur-3xl animate-blob" />

        <div className="container-prose grid lg:grid-cols-12 gap-10 items-center pt-10 pb-24 md:py-20">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="eyebrow"><Sparkles size={14} /> {student.course} · {student.term}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.02] tracking-tight"
            >
              Hi, I’m <span className="gradient-text">{student.name}</span>.
              <br /> A learning portfolio.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              {student.tagline} This e-portfolio brings together every weekly task,
              reflection and milestone from my Life & Future Skills journey at HCT.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to="/tasks"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-lift transition-all"
              >
                Explore my 15 tasks
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-card hover:bg-secondary transition-colors font-medium"
              >
                About me
              </Link>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-md"
            >
              {[
                { k: "Course", v: "LSS 1003" },
                { k: "HCT ID", v: student.hctId },
                { k: "CRN", v: student.crn },
              ].map((s) => (
                <div key={s.k} className="rounded-xl bg-card border border-border p-3 shadow-soft">
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.k}</dt>
                  <dd className="font-display font-semibold mt-1 text-sm">{s.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-2xl rounded-[2rem]" />
            <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-card bg-card">
              <img
                src={hero}
                alt="AI-generated illustration of an Information Technology professional working with code, data and AI"
                width={1280} height={1280}
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-card/85 backdrop-blur-md border border-border p-4 shadow-soft">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Future career</p>
                <p className="font-display font-semibold mt-0.5">{student.major}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container-prose pb-24">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: BookOpen, title: "15 weekly tasks", body: "Every lesson documented with screenshots and personal reflection." },
            { icon: Target, title: "C.R.E.A.M. learning", body: "Creative, Reflective, Effective, Active, Motivated — explained with my own evidence." },
            { icon: GraduationCap, title: "Certificates included", body: "LinkedIn Learning workshops on study skills and time management." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <c.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TASK PREVIEW */}
      <section className="container-prose pb-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow"><BookOpen size={14} /> Weekly Tasks</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold tracking-tight">A glimpse of the work</h2>
            </div>
            <Link to="/tasks" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary link-underline">
              See all 15 <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tasks.slice(0, 6).map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <Link
                to="/tasks"
                className="group block rounded-2xl border border-border bg-card overflow-hidden shadow-soft card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={t.images[0].src} alt={t.images[0].caption} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-primary">Week {t.week} · Lesson {t.lesson}</p>
                  <h3 className="mt-1.5 font-display font-semibold leading-snug">{t.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
