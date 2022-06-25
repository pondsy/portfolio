import sharedStyles from "../../Style/sharedStyles.module.scss";
import React, {ForwardedRef} from "react";
import ComingSoon from "../../Components/ComingSoon";

const ProjectsSection = React.forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {

    return (
        <div ref={ref} className={sharedStyles.section}>
            <ComingSoon project={'Projects'}/>
        </div>
    )
})

export default ProjectsSection;