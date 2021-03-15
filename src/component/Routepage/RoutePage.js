import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './RoutePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import Femalephoto from '../../image/female.png'
import Malephoto from '../../image/male.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faMapMarker, faTransgender } from '@fortawesome/free-solid-svg-icons';

const RoutePage = () => {

   const {id} =useParams();
   const [team1, setTeam1] = useState ({});
   console.log(team1)
  useEffect(() => {
      fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then(res => res.json())
      .then(data => setTeam1(data.teams[0]))
  }, [])
  
    return (
            <div >
                <div className="banner "  style={{background:`url(${team1.strStadiumThumb})`}}>
                    <img id="logo" src={team1.strTeamBadge} alt=""/>
                </div>
                <div className="Details row">
                    <div className=" col-md-6">
                       <h2 id="Name"> {team1.strTeam}</h2>
                       <h2><FontAwesomeIcon icon={faFlag}/> Country : {team1.strCountry}</h2>
                        <h2><FontAwesomeIcon icon={faMapMarker}/> Founded : {team1.intFormedYear}</h2>
                        <h2><FontAwesomeIcon icon={faTransgender}/> Gender : {team1.strGender}</h2>
                    </div>
                    <div className="Condition  col-md-6">
                        {(team1.strGender==="Male")? <img className="w-50" src={Malephoto} alt=""/> : <img className="w-50" src={Femalephoto} alt=""/>}
                    </div>
                </div>
                 
                 <div>
                      <p id="Description">Description : {team1.strDescriptionEN}</p>
                </div>
                <div className="Icon">
                    <a target="_blank" href={`https:/${team1.strFacebook}`}>
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a target="_blank" href={`https:/${team1.strInstagram}`}>
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a target="_blank" href={`https:/${team1.strTwitter}`}>
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>

            </div>
    );
};

export default RoutePage;