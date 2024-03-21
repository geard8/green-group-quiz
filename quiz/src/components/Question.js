import handleAnswerChange from './Questions';
// import {Questions, handleReset} from './Questions';

function Question(props) { 
    return (
        <fieldset>
          <legend>{props.question}:</legend>
          <label>
            <input type="radio" name="{props.name}" value="A" onChange={e => handleAnswerChange('{props.name}', e.target.value)} />
            A
          </label>
          <label>
            <input type="radio" name="{props.name}" value="B" onChange={e => handleAnswerChange('{props.name}', e.target.value)} />
            B
          </label>
          <label>
            <input type="radio" name="{props.name}" value="C" onChange={e => handleAnswerChange('{props.name}', e.target.value)} />
            C
          </label>
        </fieldset>
    );
}

export default Question;