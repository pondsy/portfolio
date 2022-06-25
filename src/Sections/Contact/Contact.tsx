import sharedStyles from "../../Style/sharedStyles.module.scss";
import React, {ForwardedRef} from "react";
import ComingSoon from "../../Components/ComingSoon";

const ContactSection = React.forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className={sharedStyles.section}>
            <ComingSoon project={'Contact'}/>
        </div>
    )
})

export default ContactSection;