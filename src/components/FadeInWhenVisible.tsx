// components/FadeInWhenVisible.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { useEffect, useState } from 'react';

// const variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };
const variants = {
  hidden: { opacity: 0, y: 50 },    // Start agak turun
  visible: { opacity: 1, y: 0 },    // Lalu ke posisi normal
};

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  // const [hasAnimated, setHasAnimated] = useState(false);

  // useEffect(() => {
  //   if (inView) setHasAnimated(true);
  // }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      // animate={hasAnimated ? 'visible' : 'hidden'}
      animate={inView ? 'visible' : 'hidden'}
      // transition={{ duration: 0.6, ease: 'easeOut' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}

    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
