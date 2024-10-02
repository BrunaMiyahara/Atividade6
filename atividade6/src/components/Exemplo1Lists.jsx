import React from 'react'

function Raca(props) {
  return props.raca;
}

function Gatos() {
  const gatos = [
    {id: 1, raca: 'Persa'},
    {id: 2, raca: 'Himalaia'},
    {id: 3, raca: 'Siamês'},
    {id: 4, raca: 'Maine Coon'},
    {id: 5, raca: 'Angorá'},
    {id: 6, raca: 'Sphynx'},
    {id: 7, raca: 'Ragdoll'},
    {id: 8, raca: 'Ashera'},
    {id: 9, raca: 'American Shorthair'},
    {id: 10, raca: 'Exótico'},
  ];
  return (
    <>
      <h3>Raças de Gatos mais populares:</h3>
      <ol>
        {gatos.map((gato) => <li><Raca key={gato.id} raca={gato.raca} /></li>)}
      </ol>
    </>
  );
}

export default Gatos