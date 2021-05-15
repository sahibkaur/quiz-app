import QuizCategory from './QuizCategory'
import './App.css';

function App() {
  const categories = [
    {
      id: 0,
      title: 'Science'
    },
    {
      id: 1,
      title: 'Tech'
    },
    {
      id:2,
      title:'Plants'
    },
    {
      id:3,
      title:'English'
    },
    {
      id:4,
      title:'History'
    },
    {
      id:5,
      title:'Economics'
    }
  ];

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="categories">
        {categories.map(item => 
        <QuizCategory title={item.title} key={item.id}></QuizCategory>
        )}
      </div>
    </div>
  );
}

export default App;
