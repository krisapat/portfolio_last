'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeUpWhenVisible from '../animation/FadeUpWhenVisible';
import { quicksand } from '@/utils/font';

const skills = [
  { name: 'HTML', image: '/img/skills/HTML.png' },
  { name: 'CSS', image: '/img/skills/CSS.png' },
  { name: 'JavaScript', image: '/img/skills/JS.png' },
  { name: 'TypeScript', image: '/img/skills/typescript.png' },
  { name: 'React', image: '/img/skills/react.png' },
  { name: 'Next.js', image: '/img/skills/nextjs.png' },
  { name: 'Tailwind', image: '/img/skills/tailwind.png' },
  { name: 'Shadcn ui', image: '/img/skills/shadcn.png' },
  { name: 'Lucid icon', image: '/img/skills/lucidicon.png' },
];

const SkillSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="flex flex-col items-center justify-center text-black dark:text-white h-[800px] px-4 py-20">
      <FadeUpWhenVisible>
        <h2 className="quicksand-quicksand text-4xl font-bold mb-12">My Skills</h2>
      </FadeUpWhenVisible>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: 'easeOut',
            }}
            className="flex flex-col items-center"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="quicksand-quicksand text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
