import logo from './logo.svg';
import QuizCategory from './QuizCategory'
import './App.css';

function App() {
  const categories = ['Science', 'Tech', 'Plants', 'English', 'History', 'Economics']

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="categories">
        {categories.map(item => 
        <QuizCategory title={item}></QuizCategory>
        )}
      </div>
    </div>
  );
}

export default App;
