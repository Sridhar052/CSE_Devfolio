import React from "react";
import { motion } from "motion/react";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RESUME_DATA } from "../constants";

const Home = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-mono uppercase tracking-[0.3em] mb-6">
            {RESUME_DATA.credentials}
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] tracking-tighter mb-8 text-gradient">
            {RESUME_DATA.name}
          </h1>
          <p className="text-xl md:text-2xl text-brand-text-secondary max-w-2xl font-light leading-relaxed mb-12">
            {RESUME_DATA.summary[0]}
          </p>
          
          <div className="flex flex-wrap gap-8 mb-16">
            <div className="flex items-center gap-3 text-brand-text-secondary">
              <Briefcase size={18} className="text-brand-accent" />
              <span className="text-xs uppercase tracking-widest font-medium">{RESUME_DATA.title}</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text-secondary">
              <MapPin size={18} className="text-brand-accent" />
              <span className="text-xs uppercase tracking-widest font-medium">{RESUME_DATA.location}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link 
              to="/experience" 
              className="px-8 py-4 bg-brand-accent text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-accent/90 transition-all flex items-center gap-2 group"
            >
              View Experience
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-24 max-w-6xl mx-auto border-t border-brand-border">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">The Vision</h2>
            <div className="space-y-6">
              {RESUME_DATA.summary.slice(1).map((para, i) => (
                <p key={i} className="text-brand-text-secondary leading-relaxed font-light">
                  {para}
                </p>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-accent/20 rounded-3xl blur-2xl group-hover:bg-brand-accent/30 transition-all duration-500" />
            <div className="relative p-8 glass-panel rounded-3xl border border-brand-border">
              <h3 className="text-xl font-display font-bold mb-6">Core Philosophy</h3>
              <p className="text-lg italic text-brand-text-secondary leading-relaxed mb-8">
                "My continuing focus is enabling superior organisation performance by embedding strategic business priorities deep inside a highly engaged workforce."
              </p>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.slice(0, 5).map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-brand-bg border border-brand-border rounded-full text-[10px] uppercase tracking-widest text-brand-text-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
