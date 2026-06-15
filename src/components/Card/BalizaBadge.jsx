import React from 'react';
import { motion } from 'framer-motion';
import { MdVerifiedUser } from "react-icons/md";
export default function BalizaBadge() {
  return (
    <motion.div 
      className="inline-flex items-center gap-2 bg-[#bc0004]/10 text-[#bc0004] px-4 py-1.5 rounded-full w-fit"
      variants={{
        hidden: { opacity: 0, y: -15 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
      }}
    >
      <span className="material-symbols-outlined text-[18px] font-bold"><MdVerifiedUser className='text-[30px]'/> </span>
      <span className="text-xs font-semibold uppercase tracking-wider">Atualização DETRAN 2026</span>
    </motion.div>
  );
}