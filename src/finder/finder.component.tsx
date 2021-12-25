import { Details } from "./details.component";
import { Tree } from "./tree.component";
import './finder.css';
import { useParams, useNavigate } from "react-router-dom";
import { choiceTree } from "./choice/ChoiceTree";

export const Finder: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const choice = id ? choiceTree.findChoiceById(Number(id)) : undefined;

    if (choice && !choice.isSelected) {
        choice.select();
    }

    return (
        <div className="finder">
            <Tree onChoiceSelected={(c) => { navigate(`/strats/${c.id}`) }} />
            <Details choice={choice} />
        </div>
    );
}

