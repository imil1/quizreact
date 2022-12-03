import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Что такое useState ?',
    variants: ['Это функция для хранения данных компонента', 'Это глобальный стейт', 'Это когда ты никому не нужен'],
    correct: 0,
  }, 
  {
    title: 'for(var x=1;x<5;x++) console.log(x)',
    variants: ['11111', '5555', '1234'],
    correct: 2,
  },
  {
    title: 'x=1; console.log(`x= `+ x); var x;',
    variants: ['x=1', 'x is undefined', 'x=null'],
    correct: 0,
  },
   {
    title: 'let a = `3`+ 2-1;',
    variants: ['32', 'error', '31'],
    correct: 2,
  },
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },  
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
      <button >Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step,question,onClickVar}) {
  const perc = Math.round(step / questions.length * 100);
  console.log(perc);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${perc}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
       {question.variants.map((text,index)=> (
        <li onClick={()=> onClickVar(index)} key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step,setStep] = React.useState(0);
  const [correct,setCorrect] = React.useState(0);
  const question = questions[step];
  // console.log(question);
  const onClickVar = (index) => {
    console.log(step,index);
    setStep(step+1);
    if(index === question.correct){
      setCorrect(correct+1);
    }
  };


  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} question={question} onClickVar={onClickVar}/> : <Result correct={correct}/> 
      }
      
    </div>
  );
}

export default App;
