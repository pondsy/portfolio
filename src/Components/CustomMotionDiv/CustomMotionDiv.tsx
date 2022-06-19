import { motion } from "framer-motion";
import {ReactNode} from "react";

interface CustomMotionDivProps {
    duration?: number;
    ease?: string;
    className?: string;
    children: ReactNode;
}

const CustomMotionDiv = ({duration = 1, ease = "easeIn", className,  children}: CustomMotionDivProps): JSX.Element => {

    return (
        <motion.div
            initial={{opacity: 0, height: '100%'}}
            whileInView={{opacity: 1, height: '100%'}}
            transition={{ease, duration}}
            className={className}>
            {children}
        </motion.div>
    )
}

export default CustomMotionDiv;