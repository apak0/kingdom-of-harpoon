import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onAnimationComplete,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={onAnimationComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.img
            src="/assets/title-sign-table.png"
            alt="Kingdom of Harpoon"
            initial={{
              scale: 25,
              opacity: 0,
            }}
            animate={{
              scale: 2,
              opacity: 1,
            }}  
            exit={{
              scale: 0.1,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="w-[200px]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
