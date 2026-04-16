import React from "react";
import { motion } from "motion/react";
import { Award, Globe, Zap, ShieldCheck } from "lucide-react";
import { RESUME_DATA } from "../constants";

const Expertise = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4">Expertise & Accolades</h1>
          <p className="text-brand-text-secondary text-lg font-light">Strategic competencies and professional recognition.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-brand-accent/10 rounded-2xl border border-brand-accent/20">
                <Zap className="text-brand-accent" size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold">Strategic Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RESUME_DATA.skills.map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 glass-panel rounded-2xl border border-brand-border hover:border-brand-accent/30 transition-all group"
                >
                  <div className="w-8 h-1 bg-brand-accent/20 group-hover:bg-brand-accent transition-colors mb-4" />
                  <span className="text-sm font-sans uppercase tracking-[0.2em] font-bold text-brand-text-secondary group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications & Awards */}
          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-brand-accent/10 rounded-2xl border border-brand-accent/20">
                  <ShieldCheck className="text-brand-accent" size={24} />
                </div>
                <h2 className="text-3xl font-display font-bold">Certifications</h2>
              </div>
              
              <div className="space-y-6">
                {RESUME_DATA.certifications.map((cert, i) => (
                  <div key={i} className="p-8 glass-panel rounded-3xl border border-brand-border">
                    <h3 className="text-xl font-display font-bold mb-2">{cert.name}</h3>
                    {cert.issuer && (
                      <p className="text-brand-accent text-[10px] font-mono uppercase tracking-[0.3em]">
                        {cert.issuer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-brand-accent/10 rounded-2xl border border-brand-accent/20">
                  <Award className="text-brand-accent" size={24} />
                </div>
                <h2 className="text-3xl font-display font-bold">Honors</h2>
              </div>
              
              <div className="p-12 glass-panel rounded-[2rem] border border-brand-accent/30 bg-gradient-to-br from-brand-accent/5 to-transparent relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Award size={120} />
                </div>
                <h3 className="text-4xl font-display font-black text-gradient mb-4">Chartered FCIPD</h3>
                <p className="text-brand-text-secondary font-light leading-relaxed">
                  A prestigious recognition as a Chartered Fellow member of the CIPD, United Kingdom.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
