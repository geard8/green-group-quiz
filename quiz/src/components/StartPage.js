import Button from "./StyledButton";

const StartPage = () => {
    return (
      <>
          <h1>Vad för husdjur passar dig bäst?</h1>
          <p>När man ska skaffa husdjur är det några saker man behöver tänka på.</p>
          <h2>Livsstil</h2>
          <p>Vilken typ av livsstil har du? Ofta hemma eller bortrest? Aktiv på fritiden? Sådant är viktiga faktorer som spelar in i valet av husdjur.</p>
          <h2>Allergier</h2>
          <p>
          Detta är kanske mer självklart. Är man allergisk mot katter ska man givetvis välja ett annat husdjur. Bör också fundera över om någon i ens omgivning är allergisk. 
          </p>
          
          <h2>Ekonomiska aspekter</h2>
         <p>
         Det kan vara dyrt med husdjur. Inte bara mat utan även veterinärkostnader. Man vill ju att ens husdjur ska må bra. 
         </p>
         <p>
            Här har vi några frågor som hjälper dig att hitta ett husdjur du kan ta väl hand om.
         </p>
         <div className="center">
            <Button title="Hjälp mig hitta bra husdjur" />
        </div>
      </>
    );
  };
  
  export default StartPage;