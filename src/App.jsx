import { useEffect, useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

// https://cataas.com/cat/k2FML0aVJG0zH6n8/says/A%20cat's%20nose

export function App() {
  const [fact, setFact] = useState('datos fetcheados de gatos');
  const [factImg, setFactImg] = useState('datos fetcheados de gatos');

  // fetch dato1
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((resp) => resp.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const treefirstWord = fact.split(' ', 3).join(' ');
        console.log(treefirstWord);
        //*
        fetch(
          `https://cataas.com/cat/says/${treefirstWord}?size=50&color=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            setFactImg(`https://cataas.com${url}`);
            console.log(url);
          });
        //*
      });
  }, []);

  return (
    <div>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
      <img src={factImg} alt="img" />
    </div>
  );
}
