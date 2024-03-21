import './App.css';
import './components/style.css';
import './css/Footer.css';
import Questions from './components/Questions';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <div className="container" style={{flex:"1"}}>
      <article>
        <h1>Vad för husdjur passar dig bäst?</h1>
        <p>När man ska skaffa husdjur är det några saker man absolut behöver tänka på.</p>
        <h2>Livsstil</h2>
        <p>Vilken typ av livsstil har du? Ofta hemma eller bortrest? Aktiv på fritiden? Sådant är såklart viktiga faktorer som spelar in i valet av husdjur.</p>
        <h2>Allergier</h2>
        <p>
        Detta är kanske mer självklart. Är man allergisk mot exempelvis katter ska man givetvis se sig om efter ett annat husdjur. Bör också fundera över om någon i ens omgivning är allergisk. 
        </p>
        
        <h2>Ekonomiska aspekter</h2>
       <p>
       Det kan vara dyrt med husdjur. Inte bara mat utan även veterinärkostnader. Man vill ju att ens husdjur ska må bra. 
       </p>
        
      </article>
      <Questions />
    </div>
    <Footer />
    </>
  );
};

export default App;
