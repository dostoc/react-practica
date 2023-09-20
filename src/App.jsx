import { useEffect, useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_ENDPOINT_RANDOM_IMG = `https://cataas.com/cat/says/${firstWord}?size=50&color=red`;

export function App() {
  const [fact, setFact] = useState('datos fetcheados de gatos');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((resp) => resp.json())
      .then((data) => {
        const { fact } = data;

        setFact(fact);

        const firstWord = fact.split(' ', 3);
        console.log(firstWord);

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red`)
          .then((resp) => resp.json())
          .then();
      });
  }, []);

  return (
    <div>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
    </div>
  );
}
