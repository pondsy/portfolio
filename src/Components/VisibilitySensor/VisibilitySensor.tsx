import VisibilitySensor from 'react-visibility-sensor';
import React from "react";
import {useActiveSections} from "../../Hooks/useActiveSection";

interface CustomVisibilitySensorProps {
  children: React.ReactNode;
  elementID: string;
}

const CustomVisibilitySensor = ({children, elementID}: CustomVisibilitySensorProps) => {

  const {setActive} = useActiveSections();

  function onChange (isVisible: boolean) {
    isVisible && setActive(elementID)
  }

  return (
    <VisibilitySensor onChange={onChange}>
      {children}
    </VisibilitySensor>
  );
}

export default CustomVisibilitySensor;