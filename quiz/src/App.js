import './App.css';
import './components/style.css';
import './css/Footer.css';
import Questions from './components/Questions';
import StartPage from './components/StartPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <div className="container">
      <article>
       <StartPage />      
      </article>
      <Questions />
    </div>
    <Footer />
    </>
  );
};

export default App;
