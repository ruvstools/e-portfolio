import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Tag, ChevronDown, BookOpen } from "lucide-react";
import { tasks } from "@/data/tasks";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function Tasks() {
  const [open, setOpen] = useState<number | null>(null);
  const [filter, setFilter] = useState<number | "all">("all");

  const weeks = Array.from(new Set(tasks.map((t) => t.week)));
  const filtered = filter === "all" ? tasks : tasks.filter((t) => t.week === filter);

  return (
    <section className="container-prose section-pad">
      <Reveal>
        <span className="eyebrow"><BookOpen size={14} /> Weekly Tasks</span>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
          All <span className="gradient-text">15 tasks</span>, in detail.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Each card includes the original artefact, a short summary and the full reflection answers I wrote during the week.
        </p>
      </Reveal>

      {/* Filters */}
      <Reveal delay={0.05}>
        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-all",
              filter === "all"
                ? "bg-primary text-primary-foreground border-primary shadow-soft"
                : "bg-card border-border hover:bg-secondary"
            )}
          >
            All weeks
          </button>
          {weeks.map((w) => (
            <button
              key={w}
              onClick={() => setFilter(w)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition-all",
                filter === w
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-card border-border hover:bg-secondary"
              )}
            >
              Week {w}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Cards */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {filtered.map((t, i) => {
          const isOpen = open === t.id;
          return (
            <Reveal key={t.id} delay={(i % 4) * 0.05}>
              <article className="group rounded-2xl border border-border bg-card overflow-hidden shadow-soft card-hover flex flex-col h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={t.images[0].src}
                    alt={t.images[0].caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-semibold text-primary border border-border">
                    Week {t.week} · Lesson {t.lesson}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar size={12} />{t.date}</span>
                    <span className="inline-flex items-center gap-1"><Tag size={12} />{t.topic}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{t.title}</h3>
                  <p className="mt-2.5 text-muted-foreground leading-relaxed text-sm">{t.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {t.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-secondary text-xs font-medium text-foreground/70">{tag}</span>
                    ))}
                  </div>

                  <button
                    onClick={() => setOpen(isOpen ? null : t.id)}
                    className="mt-5 inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl border border-border bg-secondary hover:bg-primary/8 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {isOpen ? "Hide reflection" : "Read reflection"}
                    <ChevronDown size={16} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 space-y-5">
                          {t.images.length > 1 && (
                            <div className="grid grid-cols-2 gap-2">
                              {t.images.slice(1).map((img) => (
                                <figure key={img.src} className="rounded-xl overflow-hidden border border-border bg-secondary">
                                  <img src={img.src} alt={img.caption} loading="lazy" className="w-full h-32 object-cover" />
                                  <figcaption className="text-[10px] text-muted-foreground p-1.5 leading-tight">{img.caption}</figcaption>
                                </figure>
                              ))}
                            </div>
                          )}
                          {t.reflections.map((r, idx) => (
                            <div key={idx} className="rounded-xl bg-secondary/60 p-4 border border-border">
                              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Q{idx + 1}</p>
                              <p className="mt-1 font-medium text-sm">{r.q}</p>
                              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.a}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
