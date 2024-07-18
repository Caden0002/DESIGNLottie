import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Lottie from 'lottie-react';

import LoaderLogo from '../../Lottie/LoaderLogo.json'; // Adjust the path based on your project structure

function Loader(props) {
    const controls = useAnimation();
    const [scrollEnabled, setScrollEnabled] = useState(false);


    const fadeOut = async () => {
        await controls.start({
            opacity: 0, // Fade out to 0 opacity
            transition: { duration: 2 }
        });
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center z-50"
            initial={{ opacity: 1 }} // Ensure initial opacity is 1
            animate={controls}
        >
            <Lottie
                animationData={LoaderLogo}
                style={{ width: '400px', height: '400px' }}
                isStopped={false}  // Keep the animation playing
                isPaused={false}   // Keep the animation playing
                loop={false}       // Prevent looping
                speed={0.5}          // Normal speed
                onComplete={fadeOut} // Trigger fadeOut animation after animation completes
            />
        </motion.div>
    );
}

export default Loader;
