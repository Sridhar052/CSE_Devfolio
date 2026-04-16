import React from "react";
import { motion } from "motion/react";
import { GraduationCap, BookOpen } from "lucide-react";
import { RESUME_DATA } from "../constants";

const Education = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4">Academic Foundation</h1>
          <p className="text-brand-text-secondary text-lg font-light">The educational pillars supporting a global leadership career.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {RESUME_DATA.education.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 glass-panel rounded-[2.5rem] border border-brand-border hover:border-brand-accent/20 transition-all group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-brand-accent/10 rounded-2xl group-hover:bg-brand-accent group-hover:text-white transition-all">
                  <GraduationCap size={32} />
                </div>
                <span className="text-brand-text-secondary text-[10px] font-mono uppercase tracking-[0.3em]">{edu.period}</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-accent transition-colors">{edu.degree}</h3>
              <div className="flex items-center gap-2 text-brand-text-secondary">
                <BookOpen size={16} />
                <p className="text-sm font-sans uppercase tracking-widest">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
