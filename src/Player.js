import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const Player = ({player}) => {

    return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={player.imageUrl} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
          team:{player.team}
          <br/>
          nationality:{player.nationality} <br/>
          jerseyNumber:{player.jerseyNumber}<br/>
          age:{player.age}<br/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  

    </div>
  )
}


// Player.defaultProps = {
//   name: 'Lionel Messi',
//z   team: 'Paris Saint-Germain',
//   nationality: 'Argentine',
//   jerseyNumber: '30',
//   age: '34',
//   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Lionel_Messi_WC2022.jpg/250px-Lionel_Messi_WC2022.jpg',
// };
export default Player
