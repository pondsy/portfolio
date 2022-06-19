import {motion} from "framer-motion";
import {ReactNode} from "react";

interface CustomMotionDivProps {
    duration?: number;
    ease?: string;
    initialX?: number;
    className?: string;
    children: ReactNode;
}

const CustomMotionDiv = ({duration = 1, ease = "easeIn", initialX = 0, className,  children}: CustomMotionDivProps): JSX.Element => {
    return (
        <motion.div
            initial={{x: initialX, opacity: 0, height: '100%'}}
            whileInView={{x: 0, opacity: 1, height: '100%'}}
            transition={{ease, duration}}
            className={className}>
            {children}
        </motion.div>
    )
}

export default CustomMotionDiv;