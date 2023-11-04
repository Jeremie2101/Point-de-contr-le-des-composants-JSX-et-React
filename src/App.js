import React, { useState } from 'react';
import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import img1 from './assets/5D.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  // Définir une variable d'état pour le prénom
  const [firstName, setFirstName] = useState("");

  // Fonction pour mettre à jour le prénom
  const updateFirstName = () => {
    const newName = prompt("Entrez votre prénom :");
    setFirstName(newName || ""); // Si l'utilisateur annule, le prénom reste vide
  };

  return (
    <div className='cat'>
      <Card className='card'>
        <Card.Img variant="top" src={img1} className='Im' />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price className='prix' />
            <Description className='descript' />
          </Card.Text>
          <Button variant="secondaire" className='boutton' onClick={updateFirstName}>
            AJOUTER MON NOM
          </Button>
          <p style={{ textAlign: 'center', marginTop: '15px' }}>
        {firstName ? `Bonjour, ${firstName} !` : 'Bonjour, là !'}
          </p>
        </Card.Body>
      </Card>

      
    </div>
  );
}

export default App;
