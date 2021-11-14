import React, { createContext, useState } from 'react';
export const AccordionContext = createContext({
  active: 0,
  setActive: () => {},
});
const AccordionWrapper = (props) => {
  const [active, setActive] = useState(0);
  return (
    <AccordionContext.Provider value={{ active, setActive }}>
      {props.children}
    </AccordionContext.Provider>
  );
};
export default AccordionWrapper;
