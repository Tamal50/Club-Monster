import React from 'react';
import './Team.css'
import {Card , Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Team = (props) => {
    const {strTeam, strTeamBadge, strCountry, idTeam } = props.team;
    console.log(props.team)
    return (
        
          <div className ="col-md-4 col-sm-12">
            <div className="Card">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={strTeamBadge} />
              <Card.Body>
                <Card.Title>Name :{strTeam} </Card.Title>
                <Card.Text>
                  <h6>Country : {strCountry}</h6>

                </Card.Text>
                <Link to={"/team/"+idTeam}><Button variant="primary">Details </Button></Link>
              </Card.Body>
            </Card>
            </div>
         </div>
        
    );
};

export default Team;