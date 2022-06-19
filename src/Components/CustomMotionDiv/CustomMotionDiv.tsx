import { motion } from "framer-motion";
import {ReactNode} from "react";

interface CustomMotionDivProps {
    duration?: number;
    ease?: string;
    slideIn?: boolean;
    className?: string;
    children: ReactNode;
}

const CustomMotionDiv = ({duration = 1, ease = "easeIn", slideIn = false, className,  children}: CustomMotionDivProps): JSX.Element => {
    return (
        <motion.div
            initial={{x: slideIn ? 100 : 0, opacity: 0, height: '100%'}}
            whileInView={{x: 0, opacity: 1, height: '100%'}}
            transition={{ease, duration}}
            className={className}>
            {children}
        </motion.div>
    )
}

export default CustomMotionDiv;