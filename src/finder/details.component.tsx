import { Choice } from "./choice/choice.models";

interface DetailsProps {
    choice: Choice | undefined;
}

export const Details: React.FC<DetailsProps> = ({ choice }) => {
    if (!choice || !choice.isLeaf) {
        return null;
    }

    return (
        <main>
            {choice.description}

            <ul>
                {choice.checkboxes.map((c, i) => (
                    <li key={i}>
                        <label>
                            <input type="checkbox"/>
                            {c}
                        </label>
                    </li>
                ))}
            </ul>

            {choice.image ? <img height={200} src={choice.image} alt="hello"/> : null}
        </main>
    );
}