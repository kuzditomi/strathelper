import { useState, useEffect } from 'react';
import { getData } from './finder.api';

function useFinder() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const textResult = await getData('T');

        setText(Object.keys(textResult.callExpDateMap).join(','));
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
