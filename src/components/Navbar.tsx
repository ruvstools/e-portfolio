import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/tasks", label: "Weekly Tasks" },
  { to: "/cream", label: "C.R.E.A.M." },
  { to: "/achievements", label: "Achievements" },
  { to: "/conclusion", label: "Conclusion" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "container-prose flex items-center justify-between rounded-2xl transition-all duration-500",
          scrolled
            ? "bg-card/80 backdrop-blur-xl shadow-soft border border-border px-4 py-2.5"
            : "bg-transparent px-1"
        )}
      >
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold shadow-soft">
            L
          </span>
          <span className="font-display font-semibold tracking-tight hidden sm:block">
            Lama Hassan<span className="text-muted-foreground font-normal"> · LSS 1003</span>
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary bg-primary/8"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-xl border border-border bg-card"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden container-prose mt-2"
          >
            <div className="rounded-2xl bg-card border border-border shadow-card p-2">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium",
                      isActive ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
