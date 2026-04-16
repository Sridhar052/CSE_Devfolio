import React from "react";
import { motion } from "motion/react";
import { RESUME_DATA } from "../constants";

const Experience = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4">Professional Journey</h1>
          <p className="text-brand-text-secondary text-lg font-light">A timeline of leadership and transformation across global FTSE companies.</p>
        </header>

        <div className="space-y-32">
          {RESUME_DATA.experience.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 border-b border-brand-border pb-6">
                <div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-2">{exp.company}</h2>
                  <p className="text-brand-accent text-xs font-mono uppercase tracking-[0.3em]">{exp.location}</p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-[10px] font-mono uppercase tracking-widest text-brand-text-secondary">
                  {exp.totalDuration}
                </div>
              </div>

              <div className="space-y-16 pl-6 md:pl-12 border-l border-brand-border">
                {exp.roles.map((role, j) => (
                  <div key={j} className="relative">
                    <div className="absolute -left-[31px] md:-left-[55px] top-2 w-4 h-4 rounded-full bg-brand-bg border-4 border-brand-accent" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-display font-bold">{role.title}</h3>
                      <span className="text-brand-text-secondary text-xs font-mono uppercase tracking-widest mt-2 md:mt-0">{role.period}</span>
                    </div>
                    {role.location && (
                      <p className="text-brand-accent text-[10px] font-mono uppercase tracking-widest mb-4">{role.location}</p>
                    )}
                    {role.description && (
                      <p className="text-brand-text-secondary leading-relaxed max-w-4xl font-light text-lg">
                        {role.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
