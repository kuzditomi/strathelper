import { useState } from "react";
import { Choice } from "./choice/choice.models";
import { Details } from "./details.component";
import { Tree } from "./tree.component";
import './finder.css';

export const Finder: React.FC = () => {
    const [choice, setChoice] = useState<Choice>();
    
    return (
        <div className="finder">
            <Tree onChoiceSelected={(c) => { setChoice(c) }} />
            <Details choice={choice} />
        </div>
    );
}