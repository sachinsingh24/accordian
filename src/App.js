import React from 'react';
import data from './data';
import AccordionWrapper from './components/AccordionWrapper'; 
import AccordionItem from './components/AccordionItem';


const App=()=> {
  // const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Frequently asked Interview questions</h3>
        <section className='info'>
          <AccordionWrapper>
            {data.map((question) => (
              <AccordionItem
                key={question.id}
                id={question.id}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </AccordionWrapper>
        </section>
      </div>
    </main>
  );
}

export default App;

