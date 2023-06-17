import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <h2>TO be done1</h2>
      <h2>TO be done2</h2>
      <Question q_no={2} />
      <Footer />
    </div>
  );
}

export default App;

// npm start
// deploy command
// npm run deploy