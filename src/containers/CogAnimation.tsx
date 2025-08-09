'use client';
import { motion } from 'framer-motion';
import { DynamicShowLottie } from '../components/dynamic/Dynamic';
import cogAnimation from '../../public/lotties/cog.json';

const CogAnimation = () => {
  return (
    <div className="flex justify-center items-center -mt-24 mb-8 md:-mt-32 md:mb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <DynamicShowLottie path={cogAnimation} className="max-w-[160px] md:max-w-[300px]" />
      </motion.div>
    </div>
  );
};

export default CogAnimation;