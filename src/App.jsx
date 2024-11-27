import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./components/Login";
import SignUp from "./components/Signup";

const bgStyle = {
  backgroundImage: `url(/background.svg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const pageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };

  return (
    <div
      style={bgStyle}
      className="overflow-x-hidden h-screen flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {" "}
        {isSignUp ? (
          <motion.div
            key="signup"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md px-5 flex items-center justify-center"
          >
            <SignUp setIsSignUp={setIsSignUp} />
          </motion.div>
        ) : (
          <motion.div
            key="login"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md px-5 flex items-center justify-center "
          >
            <Login setIsSignUp={setIsSignUp} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
