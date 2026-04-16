import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Globe, Menu, X } from "lucide-react";
import { RESUME_DATA } from "../constants";

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Expertise", path: "/expertise" },
    { name: "Education", path: "/education" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-brand-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-display text-xl font-bold tracking-tighter">
            AK<span className="text-brand-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={RESUME_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block p-2 hover:bg-brand-accent/10 rounded-full transition-colors text-brand-text-secondary hover:text-brand-accent"
            >
              <Linkedin size={18} />
            </a>
            <button 
              className="md:hidden p-2 text-brand-text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-brand-surface border-b border-brand-border overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`nav-link text-lg ${location.pathname === item.path ? "active" : ""}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="page-transition-wrapper"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-brand-surface border-t border-brand-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-bold mb-2">Arun Kumar Krishnamurthy</h3>
            <p className="text-brand-text-secondary text-sm uppercase tracking-widest">{RESUME_DATA.credentials}</p>
          </div>
          <div className="flex gap-6">
            <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={RESUME_DATA.contact.website} target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-accent transition-colors">
              <Globe size={20} />
            </a>
          </div>
          <p className="text-brand-text-secondary text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};
