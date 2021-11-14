import React, { useContext } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { AccordionContext } from './AccordionWrapper';

const AccordionItem = (props) => {
  const { active, setActive } = useContext(AccordionContext);
  const eventHandler = (e, id) => {
    e.preventDefault();
    setActive(id);
  };
  const description = () => {
      if (active === props.id) {
          return props.answer
      }
  };
  return (
    <article className='question'>
      <header>
        <h4>{props.question}</h4>
        <button className='btn' onClick={(e) => eventHandler(e, props.id)}>
          {active === props.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{description()}</p>
    </article>
  );
};
export default AccordionItem;
