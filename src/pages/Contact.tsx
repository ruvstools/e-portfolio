import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Mail, User, MessageSquare, Send, IdCard, GraduationCap, AtSign } from "lucide-react";
import { student } from "@/data/student";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent", description: `Thank you ${form.name || "for reaching out"} — I'll reply via ${student.email}.` });
      setForm({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <section className="container-prose section-pad">
      <Reveal>
        <span className="eyebrow"><Mail size={14} /> Contact</span>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight">
          Let’s <span className="gradient-text">stay in touch</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Send me a message about this portfolio or my work in LSS 1003 — I'll reply from my HCT email.
        </p>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-5 gap-6">
        {/* Form */}
        <Reveal className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft space-y-5">
            <h2 className="font-display text-2xl font-semibold">Send a message</h2>

            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium flex items-center gap-2"><User size={14}/> Name</label>
              <input
                id="name" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium flex items-center gap-2"><AtSign size={14}/> Email</label>
              <input
                id="email" type="email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium flex items-center gap-2"><MessageSquare size={14}/> Message</label>
              <textarea
                id="message" required rows={5} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition resize-none"
                placeholder="Write your message…"
              />
            </div>

            <button
              type="submit" disabled={sending}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-lift transition-all disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
              <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>

        {/* Student info */}
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-gradient-primary text-primary-foreground p-8 shadow-card h-full">
            <h2 className="font-display text-2xl font-semibold">Student details</h2>
            <p className="mt-2 text-primary-foreground/85 text-sm">
              For official course-related correspondence please use my HCT email.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-lg bg-white/15"><User size={16}/></span>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-80">Name</p>
                  <p className="font-medium">{student.name}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-lg bg-white/15"><IdCard size={16}/></span>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-80">HCT ID · CRN</p>
                  <p className="font-medium">{student.hctId} · {student.crn}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-lg bg-white/15"><Mail size={16}/></span>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-80">Email</p>
                  <a href={`mailto:${student.email}`} className="font-medium link-underline">{student.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-lg bg-white/15"><GraduationCap size={16}/></span>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-80">Course</p>
                  <p className="font-medium">{student.course}</p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
