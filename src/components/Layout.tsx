import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";

export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-background bg-gradient-soft">
        <Navbar />
        <main className="flex-1 pt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};
