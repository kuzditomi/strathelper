import { Details } from './details.component';
import { Tree } from './tree.component';
import './strategies.css';
import { useParams, useNavigate } from 'react-router-dom';
import { choiceTree } from './choice/ChoiceTree';

export const Strategies: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const choice = id ? choiceTree.findChoiceById(id) : undefined;

  if (choice && !choice.isSelected) {
    choice.select();
  }

  return (
    <div className="finder">
      <Tree
        onChoiceSelected={(c) => {
          navigate(`/strats/${c.id}`);
        }}
      />
      <Details choice={choice} />
    </div>
  );
};
