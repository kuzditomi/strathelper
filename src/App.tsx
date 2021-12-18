import { useState } from 'react';
import './App.css'
import { Choice } from './choice/choice.models';
import { Details } from './details.component';
import { Tree } from './tree.component';

function App() {
  const [choice, setChoice] = useState<Choice>();

  return (
    <div className="app">
      <Tree onChoiceSelected={(c) => { setChoice(c) }} />
      <Details choice={choice} />
    </div>
  )
}

export default App
