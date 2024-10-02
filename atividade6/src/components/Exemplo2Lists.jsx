import React from 'react'

function Raca(props) {
  return props.raca;
}

function Cachorros() {
  const cachorros = [
    {id: 1, raca: 'Shih-Tzu'},
    {id: 2, raca: 'Buldogue Francês'},
    {id: 3, raca: 'Spitz Alemão'},
    {id: 4, raca: 'Yorkshire Terrier'},
    {id: 5, raca: 'Poodle'},
    {id: 6, raca: 'Lhasa Apso'},
    {id: 7, raca: 'Maltês'},
    {id: 8, raca: 'Golden Retriever'},
    {id: 9, raca: 'Pug'},
    {id: 10, raca: 'Border Collie'},
  ];
  return (
    <>
      <h3>Raças de Cachorros mais populares no Brasil:</h3>
      <ol>
        {cachorros.map((cachorro) => <li><Raca key={cachorro.id} raca={cachorro.raca} /></li>)}
      </ol>
    </>
  );
}

export default Cachorros