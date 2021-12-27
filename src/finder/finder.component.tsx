import { useState, useEffect } from 'react';

function useFinder() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const res = await fetch('https://kuzditomi-strathelper.herokuapp.com/');
        const textResult = await res.text();

        setText(textResult);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { isLoading, text };
}

export const Finder: React.FC = () => {
  const { isLoading, text } = useFinder();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <p>{text}</p>;
};
