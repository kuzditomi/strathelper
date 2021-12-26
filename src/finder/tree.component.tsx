import { useEffect, useState } from 'react';
import { Choice } from './choice/choice.models';
import { choiceTree } from './choice/ChoiceTree';

interface NodeProps {
  choice: Choice;
  onSelect: (choice: Choice) => void;
}
const NodeComponent: React.FC<NodeProps> = ({ choice, onSelect }) => {
  const [isSelected, setSelected] = useState(choice.isSelected);

  useEffect(() => {
    const unsubscribe = choice.onStateChange((newselected) => {
      setSelected(newselected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const renderChildNodes = () => {
    if (!isSelected) {
      return null;
    }

    return (
      <div className="level">
        {choice.nextChoices.map((c) => (
          <NodeComponent key={c.id} choice={c} onSelect={onSelect} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <span
        className={`${isSelected ? 'selected' : ''} choice`}
        onClick={() => {
          choice.select();
          onSelect(choice);
        }}
      >
        {isSelected ? '[x]' : '[ ]'} {choice.label}
      </span>
      {renderChildNodes()}
    </div>
  );
};

interface TreeProps {
  onChoiceSelected: (choice: Choice) => void;
}
export const Tree: React.FC<TreeProps> = ({ onChoiceSelected }) => {
  return (
    <aside>
      <ul>
        {choiceTree.topChoices.map((choice) => (
          <NodeComponent
            key={choice.id}
            choice={choice}
            onSelect={onChoiceSelected}
          />
        ))}
      </ul>
    </aside>
  );
};
