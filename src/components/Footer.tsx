import { Link } from "react-router-dom";
import { student } from "@/data/student";
import { Mail, GraduationCap } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-secondary/40">
    <div className="container-prose py-14 grid gap-10 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold">L</span>
          <span className="font-display font-semibold">{student.name}</span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground max-w-xs">
          Academic e-portfolio submitted for {student.course}, {student.term}.
        </p>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-3">Pages</h4>
        <ul className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
          {[
            ["/", "Home"], ["/about", "About"], ["/tasks", "Tasks"],
            ["/cream", "C.R.E.A.M."], ["/achievements", "Achievements"],
            ["/conclusion", "Conclusion"], ["/contact", "Contact"],
          ].map(([to, label]) => (
            <li key={to}><Link to={to} className="link-underline hover:text-foreground">{label}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-3">Student details</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><GraduationCap size={16} /> HCT ID {student.hctId} · CRN {student.crn}</li>
          <li className="flex items-center gap-2"><Mail size={16} /> <a href={`mailto:${student.email}`} className="link-underline">{student.email}</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container-prose py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
        <span>© {new Date().getFullYear()} {student.name}. All rights reserved.</span>
        <span>Built for HCT · LSS 1003 Portfolio Assessment</span>
      </div>
    </div>
  </footer>
);
